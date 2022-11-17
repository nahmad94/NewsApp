import React from 'react'
import { useParams } from 'react-router-dom'

export default function Headlines(props) {
    let {articleNumber} = useParams();
    articleNumber = parseInt(articleNumber);
    console.log(props.data[articleNumber])
    let article = props.data.filter((element, index) => index === articleNumber) 
  return (
    <div className='headlines'>
                <div>
                    <h1>{article[0].title}</h1>
                    <img src={article[0].urlToImage}></img>
                    <div>
                      <h2>By: {article[0].author}</h2>
                      <h4>Source: {article[0].source.name}</h4>
                      <h4>Published On: {article[0].publishedAt}</h4>
                    </div>
                    <p>{article[0].description}</p>
                    <div className='articleLink'>
                        <p>Read the full article at <a href={article[0].url} target='blank'>Link</a></p>
                    </div>
                </div>
    </div>
  )
}

