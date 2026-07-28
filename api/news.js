// api/news.js
export default async function handler(req, res) {
  const { category } = req.query;
  const apiKey = process.env.VITE_API_KEY;

  // 1. List of valid standard categories
  const standardCategories = ['general', 'business', 'technology', 'health', 'sports', 'entertainment', 'science'];
  
  let url;

  // 2. Decide if we use 'category' parameter or 'q' (search) parameter
  if (standardCategories.includes(category.toLowerCase())) {
    // Agar standard category hai toh category parameter use karo
    url = `https://newsapi.org/v2/top-headlines?country=in&category=${category}&apiKey=${apiKey}`;
  } else {
    // Agar "Bollywood", "Stock Market" jaisa custom term hai toh 'q' (query) parameter use karo
    url = `https://newsapi.org/v2/everything?q=${encodeURIComponent(category)}&language=en&apiKey=${apiKey}`;
  }

  try {
    const response = await fetch(url);
    const data = await response.json();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch" });
  }
}