import React, {useState, useEffect} from 'react'

export default function Search() {
    const searchURL = 'https://newsapi.org/v2/everything?q=bitcoin&apiKey=15a205e299d84a7ca189f836671e2bd8'
    let [searchResults, setSearchResults] = useState([]);
    useEffect(() => {
        fetch(searchURL, {
          method: 'GET',
          headers: {
            accept: 'application/json'
          }
        })
        .then((res) => res.json())
        .then((json) => {
          setSearchResults(json.articles)
        })
      }, [])
      console.log(searchResults)
  return (
    <div>
        <div>Search NewsApp</div>
        <div> This area is under construction</div>
        {searchResults.map((element, index) => {
            return(
                <div>
                    <h1>{element.title}</h1>
                    <h3>{element.author}</h3>
                </div>
            )
        })}
    </div>

  )
}
