import React from 'react'
import Url from '../url'

import styles from './default.module.scss'

export default (props) => {

    return(
        <article className={styles.card}>
            <h3>{props.title}</h3>
            {props.description.split('\n').map((d,i)=><p>{d}</p>)}
            <p>{props.scope}</p>
            <p>{props.version}</p>
            <ul>
                {props.links && props.links.map(l=><li key={`links-${props.title}-${l.url}`}><Url {...l} /></li>)}
            </ul>
        </article>
    )
}