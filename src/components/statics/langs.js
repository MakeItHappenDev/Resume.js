import React from 'react'


export default (props) => {

  return(
    <>
      <h2>{props.title}</h2>
      <ul id="langs">
          {props.data.map((l)=><li key={`language-${l.name}`}>{l.name} ({l.level})</li>)}
      </ul>
    </>
  )
}