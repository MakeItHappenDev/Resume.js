import React from 'react'


export default (props) => {
    return(
        <p className="skillset"><strong>{props.title}</strong>: {props.subskills.join(', ')}</p>
    )
}