import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom';

export default function Search({searchResults, setSearchResults }) {
    const [searchInput, setSearchInput] = useState('')
    const searchURL = `https://api.newscatcherapi.com/v2/search?q="${searchInput}"&countries=US&page_size=100`
    // const key = 'DybO10Cxlnyu6fvqDmTjfJW7HgY6sEYxmu9lBwuiPbo';
    const key = '7ayMQLhy33A9lPZzNSgTnMhdkGonh7cW-zrKiaMvWlc'
    const fetchSearch = () => { 
        fetch(searchURL, {
          method: 'GET',
          headers: {
            'x-api-key': key
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
            <br />
            <div>Please note that search results will take you off site to the main article source.</div>
            <br />
            {searchResults.map((element, index) => {
                return(
                    <div key ={index} className='results'>
                        <a href={element.link}>
                            <p>{element.title}</p>
                        </a>
                        <p>by {element.author}</p>

                    </div>
                )
            })}
        </div>

    )
    }
