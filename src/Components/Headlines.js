import React from 'react'
import { Link } from 'react-router-dom'

export default function Headlines(props) {
    console.log('test')
  return (
    
        <div className='headlines'>
            {props.data.map((element, index) => {
                return(
                    <>
                        <Link to={`/article/${index}`}>
                            <div key={index}>
                                <img src={element.urlToImage}></img>
                                {element.title}
                            </div>
                        </Link>
                    </>
                )
            })}
        </div>
  )
}
