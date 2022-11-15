import './App.css';
import { useState, useEffect } from 'react'
import {Route, Routes, Link} from 'react-router-dom'
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
      <nav>
        <Link to='/'>
          <h1>NewsApp Nav</h1>
        </Link>
      </nav>
      {/* <Headlines data={data} /> */}
      <main>
        <Routes>
          <Route path='/' element={ <Headlines data={data}/>} />
          <Route path='article/:articleNumber' element={ <Article data={data} />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
