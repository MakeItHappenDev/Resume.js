import React from 'react'

import styles from './education.module.scss'

export default (props) => {

    return(
        <article className={styles.card}>
            <p className={styles.date}>{props.date}</p>
            <h3>{props.title}</h3>
            <div className={styles.desc}>
                {props.description.split('\n').map((d,i)=><p>{d}</p>)}
            </div>
            <p className={styles.location}>{props.location}</p>
        </article>
    )
}