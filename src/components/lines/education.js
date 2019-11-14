import React from 'react'

import styles from './education.module.scss'

export default (props) => {

    return(
        <article className="education">
            <p className="date">{props.date}</p>
            <h3>{props.level}: {props.title}</h3>
            <p className="desc">{props.institution}</p>
            <p className="location">{props.location}</p>
        </article>
    )
}