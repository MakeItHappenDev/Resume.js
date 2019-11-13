import React from 'react'
import MainLine from './lines/main'


export default (props) => {

    return(
        <section id="page">
            {props.data.map(s => <Section key={`section-${s.title}`} {...s}/>)}

        </section>
    )
}

const Section = props => {

    return(
        <article>
            <h2>{props.title}</h2>
            {props.data.map((d,i) => <MainLine key={`section-${props.title}-${i}`} {...d}/>)}
        </article>
    )
}