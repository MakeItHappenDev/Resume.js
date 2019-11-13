import React from 'react'


export default (props) => {

    return(
        <article className="experience">
            <p className="date">{props.date}</p>
            <h3>{props.title}</h3>
            <p className="desc">{props.description}</p>
            <p className="location">{props.location}</p>
        </article>
    )
}