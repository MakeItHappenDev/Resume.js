import React from 'react'

import SEO from '../components/seo'

import Header from '../components/header'
import Meta from '../components/meta'
import Section from '../components/section'
import Static from '../components/static'
import Theme from '../styles/theme'

import '../styles/general.scss'

export default ({pageContext}) => {
    return(
        <>  
            <SEO {...pageContext}/>
            <Header lang={pageContext.lang}/>
            <Meta meta={pageContext.meta}/>
            <Static static={pageContext.static} />
            <Section data={pageContext.data} />
            <Theme />
        </>
    )
}