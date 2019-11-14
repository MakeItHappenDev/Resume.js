import React from 'react'

export default (props) => {
    return(
        <section id="meta">
            <h1>{props.meta.name}</h1>
            <p>{props.meta.location}</p>
            <p>{props.meta.contact}</p>
        </section>
    )
}


