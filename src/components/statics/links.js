import React from 'react'
import Url from '../url'

export default (props) => {

  return(
    <>
      <h2>{props.title}</h2>
      <ul>
          {props.data.map(l => <li><Url {...l}/></li>)}
      </ul>
    </>
  )
}