import React from 'react'
import { useParams } from 'react-router-dom'

export default function Headlines(props) {
    let {articleNumber} = useParams();
    articleNumber = parseInt(articleNumber);
    let article = props.data.filter((element, index) => index === articleNumber) 
  return (
    <div className='headlines'>
                <div >
                    <h1>{article[0].title}</h1>
                    <img src={article[0].media}></img>
                    <div>
                      <h2>By: {article[0].author}</h2>
                      <h4>Source: {article[0].clean_url}</h4>
                      <h4>Published On: {article[0].clean_url}</h4>
                    </div>
                    <p>{article[0].summary}</p>
                    <div className='articleLink'>
                        <p>Read the full article at <a href={article[0].link} target='blank'>Link</a></p>
                    </div>
                </div>
    </div>
  )
}

