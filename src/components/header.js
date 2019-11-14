import React from 'react'
import {Link} from 'gatsby'
const json = require('../data/resume.json')

export default (props) => {
    const data = json.data.fetchResumes
    const activeLang = data.find(l => l.lang === props.lang)
    return(
        <header id="header">
            <nav>
    {activeLang.pages.map(p=><Link key={`pageNav-${p.name}`} to={`/${activeLang.lang.toLowerCase()}/${p.name.toLowerCase()}`}>{p.name}</Link>)}
            </nav>

            <nav>
                {data.map(l => <Link key={`langNav-${l.lang}`} to={`/${l.lang.toLowerCase()}`}>{l.lang}</Link>)}
            </nav>
        </header>
    )
}