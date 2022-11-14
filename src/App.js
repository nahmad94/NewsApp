import './App.css';
import { useState, useEffect } from 'react'
import Header from './Components/Header'
import Headlines from './Components/Headlines'

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

  console.log(data)
  
  return (
    <div className="App">
      <Header />
      <div>
        {data.map((element, index) => {
          return(
            <div key={index}>
              <img src={element.urlToImage}></img>
              {element.title}</div>
          )
        })}
      </div>
    </div>
  );
}

export default App;
