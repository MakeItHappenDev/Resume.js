import React from 'react'
import { FaPhone, FaEnvelopeOpen, FaMapMarkerAlt, FaGlobe, FaFilePdf} from 'react-icons/fa'

import pdf from '../static/resume.pdf'

export default (props) => {
    return(
        <section id="meta">
            <h1>{props.meta.name}</h1>
            {props.meta.location && <p><FaMapMarkerAlt/> {props.meta.location}</p>}
            {props.meta.contact && <p><FaEnvelopeOpen/> {props.meta.contact}</p>}
            {props.meta.website && <p><FaGlobe/> {props.meta.website}</p>}
            {props.meta.phone && <p><FaPhone/> {props.meta.phone}</p>}
            {pdf && <p><FaFilePdf /> <a href={pdf} target="_blank">download .pdf</a></p>}
        </section>
    )
}


