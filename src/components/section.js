import React from 'react'
import MainLine from './lines/main'


export default (props) => {

    return(
        <section>
            {props.data.map(s => <Section key={`section-${s.title}`} {...s}/>)}

        </section>
    )
}

const Section = props => {

    return(
        <article>
            <h1>{props.title}</h1>
            {props.data.map((d,i) => <MainLine key={`section-${props.title}-${i}`} {...d}/>)}
        </article>
    )
}