import React from 'react'

export default (props) => {
    return(
        <section>
            <h1>{props.meta.name}</h1>
            <p>{props.meta.location}</p>
            <p>{props.meta.contact}</p>
    {props.meta.summary.split('\n').map((s,i)=><p key={`summary-${i}`}>{s}</p>)}
            <p>{props.meta.languages.map((l)=><span key={`language-${l.name}`}>{l.name} ({l.level})</span>)}</p>
            <ul>
                {props.meta.links.map(l => <li><a href={l.url} target="_blank" rel="noopener noreferrer">{l.text}</a></li>)}
            </ul>
        </section>
    )
}