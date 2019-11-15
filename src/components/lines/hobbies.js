import React from 'react'
import Url from '../url'


export default (props) => {

    return(
        <article className="hobby">
            <h2>{props.title}</h2>
            <p>{props.description}</p>
            <ul>
                {props.links.map(l=><li key={`links-${props.title}-${l.url}`}><Url {...l}/></li>)}
            </ul>

        </article>
    )
}