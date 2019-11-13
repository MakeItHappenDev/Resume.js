import React from 'react'

export default (props) => {

  return(
    <>
      <h2>{props.title}</h2>
      <ul>
          {props.data.map(l => <li><a href={l.url} target="_blank" rel="noopener noreferrer">{l.text}</a></li>)}
      </ul>
    </>
  )
}