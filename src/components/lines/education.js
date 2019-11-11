import React from 'react'


export default (props) => {

    return(
        <article>
            <p>{props.date}</p>
            <div>
                <h1>{props.level}: {props.title}</h1>
                <p>{props.institution}</p>
            </div>
            <p>{props.location}</p>
        </article>
    )
}