import React from 'react'

export default function Headlines(props) {
    console.log(props.data)
  return (
    <div className='headlines'>
        {props.data.map((element, index) => {
            return(
                <div>
                    {element.title}
                    {element.author}
                    {element.content}
                </div>
            )
        })}
    </div>
  )
}
