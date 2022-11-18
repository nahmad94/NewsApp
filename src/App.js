import './App.css';
import { useState, useEffect } from 'react'
import {Route, Routes, Link} from 'react-router-dom'
import Header from './Components/Header'
import Headlines from './Components/Headlines'
import Article from './Components/Article'
import Footer from './Components/Footer'
import Search from './Components/Search'

// NewsApi
// const key1 = '15a205e299d84a7ca189f836671e2bd8'
// const key2 = '0d269e6f0417477eb8b17c0748637aba'
// const url = 'https://newsapi.org/v2/top-headlines?country=us&apiKey=' + key1;

// MediaStack Api 
const key = `c65a5f25d2c0c58921fd25e9e95b2c3a`
const url = `http://api.mediastack.com/v1/`

// let searchInput = ''

function App() {
  let [data, setData] = useState([]);
  let [searchResults, setSearchResults] = useState([]);
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
  console.log(data)
  return (
    <div className="App">
      <nav>
        <Link to='/'>
          <Header />
        </Link>
      </nav>
      <main>
        <Routes>
          <Route path='/' element={ <Headlines data={data}/>} />
          <Route path='/article/:articleNumber' element={ <Article data={data} />} />
          <Route path='/Search' element={ <Search searchResults={searchResults} setSearchResults={setSearchResults}/> } />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
