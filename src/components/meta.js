import React from 'react'

export default (props) => {
    return(
        <section id="meta">
            <h1>{props.meta.name}</h1>
            <p>{props.meta.location}</p>
            <p>{props.meta.contact}</p>
            <ul id="summary">
            {props.meta.summary.split('\n').map((s,i)=><li key={`summary-${i}`}>{s}</li>)}
            </ul>
            <ul id="langs">
                {props.meta.languages.map((l)=><li key={`language-${l.name}`}>{l.name} ({l.level})</li>)}
            </ul>
            <ul>
                {props.meta.links.map(l => <li><a href={l.url} target="_blank" rel="noopener noreferrer">{l.text}</a></li>)}
            </ul>
        </section>
    )
}