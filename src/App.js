import './App.css';
import { useState, useEffect } from 'react'
import Header from './Components/Header'
import Headlines from './Components/Headlines'
import Article from './Components/Article'

const url = 'https://newsapi.org/v2/top-headlines?country=us&apiKey=15a205e299d84a7ca189f836671e2bd8'

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(url, {
      method: 'GET',
      headers: {
        accept: 'application/json'
      }
    })
    .then((res) => res.json())
    .then((json) => {
      setData(json.articles)
    })
  }, [])

  // handleClick
  
  return (
    <div className="App">
      <Header />
      <Headlines data={ data }/>
      <Article />
    </div>
  );
}

export default App;
