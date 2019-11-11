import React from 'react'


export default (props) => {

    return(
        <article>
            <p>{props.date}</p>
            <div>
                <h1>{props.title}</h1>
                <p>{props.description}</p>
            </div>
            <p>{props.location}</p>
        </article>
    )
}