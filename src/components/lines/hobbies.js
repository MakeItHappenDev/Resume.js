import React from 'react'
import Url from '../url'

import styles from './default.module.scss'

export default (props) => {

    return(
        <article className={styles.card}>
            <h3>{props.title}</h3>
            <p>{props.description}</p>
            <ul>
                {props.links && props.links.map(l=><li key={`links-${props.title}-${l.url}`}><Url {...l}/></li>)}
            </ul>

        </article>
    )
}