import React from 'react'

export default function Headlines(props) {
    console.log('test')
  return (
    <div className='headlines'>
        {props.data.map((element, index) => {
            return(
            <div key={index}>
                <img src={element.urlToImage}></img>
                {element.title}</div>
            )
        })}
    </div>
  )
}
