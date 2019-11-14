import React from 'react'

export default (props) => {

    return(
        <article className="project">
            <h3>{props.title}</h3>
            <p>{props.description}</p>
            <p>{props.scope}</p>
            <ul>
                {props.links.map(l=><li key={`links-${props.title}-${l.url}`}><a href={l.url}>{l.text}</a></li>)}
            </ul>
        </article>
    )
}