import React from 'react'
import { useParams } from 'react-router-dom'

export default function Headlines(props) {
    let {articleNumber} = useParams();
    articleNumber = parseInt(articleNumber);
    let article = props.data.filter((element, index) => index === articleNumber) 
  return (
    <div className='headlines'>
                <div>
                    <h1>{article[0].title}</h1>
                    <h2>{article[0].author}</h2>
                    <p>{article[0].description}</p>
                    <div>
                        <p>Read the full article at</p>
                        <a href={article[0].url} target='blank'>Link</a>
                    </div>
                </div>
    </div>
  )
}

