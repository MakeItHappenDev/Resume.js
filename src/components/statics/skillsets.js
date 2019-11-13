import React from 'react'


export default (props) => {

  return(
    <>
      <h2>{props.title}</h2>
      {props.data.map(s => <Skill {...s}/>)}
    </>
  )
}

const Skill = (props) => {
  return(
    <p className="skillset"><strong>{props.title}</strong>: {props.subskills.join(', ')}</p>
  )
}