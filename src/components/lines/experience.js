import React from 'react'


export default (props) => {

    return(
        <article className="experience">
            <p className="date">{props.date}</p>
            <h3>{props.title}</h3>
            <div className="desc">
                {props.description.split('\n').map((d,i)=><p>{d}</p>)}
            </div>
            <p className="location">{props.location}</p>
        </article>
    )
}