// api/news.js
export default async function handler(req, res) {
  const { category = 'general' } = req.query;
  const apiKey = process.env.VITE_API_KEY; 

  // 1. Build the APITube URL
  // If the category is 'general', we fetch the latest news. 
  // Otherwise, we search for the specific category keyword in the article titles.
  const searchQuery = category === 'general' ? '' : `?title=${category}`;
  const url = `https://api.apitube.io/v1/news/everything${searchQuery}`;

  try {
    // 2. APITube requires the key in the headers
    const response = await fetch(url, {
      headers: {
        'X-API-Key': apiKey 
      }
    });

    if (!response.ok) {
      throw new Error(`APITube returned ${response.status}`);
    }

    const data = await response.json();

    // 3. Transform APITube's format into the NewsAPI format your React app expects
    // We map 'results', 'body', and 'href' into 'articles', 'description', and 'url'
    const transformedArticles = (data.results || []).map(article => ({
      title: article.title,
      description: article.body, 
      url: article.href,         
      urlToImage: article.image || article.image_url || null // Frontend fallback handles nulls
    }));

    // 4. Send back the exact shape your frontend is waiting for
    res.status(200).json({ articles: transformedArticles });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to fetch news from APITube' });
  }
}