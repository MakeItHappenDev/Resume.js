import React from 'react'

import styles from './education.module.scss'

export default (props) => {

    return(
        <article className={styles.card}>
            <p className={styles.date}>{props.date}</p>
            <h3>{props.level}: {props.title}</h3>
            <p className={styles.desc}>{props.institution}</p>
            <p className={styles.location}>{props.location}</p>
        </article>
    )
}