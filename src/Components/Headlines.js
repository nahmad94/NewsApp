import React from 'react'
import { Link } from 'react-router-dom'

export default function Headlines(props) {
  return (
        <div className='headlines'>
            {props.data.map((element, index) => {
                return(
                    <>
                        <Link to={`/article/${index}`}>
                            <div className='headline'  key={index}>
                                <img src={element.media}></img>
                                <div>{element.title}</div>
                            </div>
                        </Link>
                    </>
                )
            })}
        </div>
  )
}
