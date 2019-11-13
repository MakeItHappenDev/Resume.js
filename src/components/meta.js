import React from 'react'
import Skillsets from './skillsets'
import Langs from './langs'
import Links from './links'
import Summary from './summary'

export default (props) => {
    return(
        <section id="meta">
            <h1>{props.meta.name}</h1>
            <p>{props.meta.location}</p>
            <p>{props.meta.contact}</p>
            <Summary {...props.meta.summary}/>
            <Langs {...props.meta.languages}/>
            <Skillsets {...props.meta.skillsets}/>
            <Links {...props.meta.links}/>
        </section>
    )
}