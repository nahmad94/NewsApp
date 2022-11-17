import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom';

export default function Search({searchResults, setSearchResults }) {
    const [searchInput, setSearchInput] = useState('')
    const searchURL = `https://newsapi.org/v2/everything?q=${searchInput}&apiKey=15a205e299d84a7ca189f836671e2bd8`
    const fetchSearch = () => { 
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
    }
    useEffect(() => {}, [searchResults])
    function handleChange(e) {
        setSearchInput(e.target.value)
    }
    function handleSubmit(e) {
        e.preventDefault();
        fetchSearch();
    }
    return (
        <div>
            <div className='searchGreeting'>Search NewsApp</div>
            <form onSubmit={handleSubmit} >
                <input type='text' onChange={handleChange}></input>
                <input type='submit' value="Submit"/>
            </form>
            <div>Please note that search results will take you off site to the main article source.</div>
            {searchResults.map((element, index) => {
                return(
                    <div key ={index}>
                        <a href={element.url}>
                        <div>
                            <h1>{element.title}</h1>
                            <h3>{element.author}</h3>
                        </div>
                        </a>
                    </div>
                )
            })}
        </div>

    )
    }
