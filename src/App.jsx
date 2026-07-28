import { useState } from 'react';
import Navbar from './components/Navbar';
import NewsBoard from './components/NewsBoard';
import './App.css';

function App() {
  // Set the default homepage news to India
  const [category, setCategory] = useState("India");

  return (
    <div>
      <Navbar setCategory={setCategory} />
      <NewsBoard category={category} />
    </div>
  );
}

export default App;