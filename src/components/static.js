import React from 'react'

import Main from './statics/main'

export default (props) => {

    return(
        <section id="static">
            {props.static.map(s=><Main key={`static-${s.title}`} {...s} />)}
        </section>
    )
}