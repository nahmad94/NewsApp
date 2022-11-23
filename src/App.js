import './App.css';
import { useState, useEffect } from 'react'
import {Route, Routes, Link} from 'react-router-dom'
import Header from './Components/Header'
import Headlines from './Components/Headlines'
import Article from './Components/Article'
import Footer from './Components/Footer'
import Search from './Components/Search'

// NewsCatcher Api
// const key = 'DybO10Cxlnyu6fvqDmTjfJW7HgY6sEYxmu9lBwuiPbo';
const key = '7ayMQLhy33A9lPZzNSgTnMhdkGonh7cW-zrKiaMvWlc'
const headlineURL = 'https://api.newscatcherapi.com/v2/latest_headlines?countries=US&topic=business'

function App() {
  let [data, setData] = useState([]);
  let [searchResults, setSearchResults] = useState([]);
  useEffect(() => {
    fetch(headlineURL, {
      method: 'GET',
      headers: {
        'x-api-key': key
      }
    })
    .then((res) => res.json())
    .then((json) => {
      setData(json.articles)
    })
  }, [])
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
