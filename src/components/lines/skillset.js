import React from 'react'


export default (props) => {
    return(
        <p><strong>{props.title}</strong>: {props.subskills.join(', ')}</p>
    )
}