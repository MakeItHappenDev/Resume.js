import React from 'react'

export default (props) => {

    return(
        <article className="hobby">
            <h2>{props.title}</h2>
            <p>{props.description}</p>
            <ul>
                {props.links.map(l=><li key={`links-${props.title}-${l.url}`}><a href={l.url}>{l.text}</a></li>)}
            </ul>

        </article>
    )
}