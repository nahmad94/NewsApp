import React from 'react'
import { useParams } from 'react-router-dom'

export default function Headlines(props) {
    let {articleNumber} = useParams();
    articleNumber = parseInt(articleNumber);
    // const article = props.data[index]
    // console.log(article)
    // console.log(article)
    // console.log(article)
    let article = props.data.filter((element, index) => index === articleNumber) 
    console.log(article)
  return (
    <div className='headlines'>
        {/* {props.data.filter((element, index) => { */}
                <div>
                    {article[0].title}
                    {article[0].author}
                    {article[0].content}
                    <p>Read the full article at</p>
                    <a href={article[0].url} target='blank'>Link</a>
                </div>
         {/* })}  */}
    </div>
  )
}

