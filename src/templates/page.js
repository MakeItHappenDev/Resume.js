import React from 'react'

import Header from '../components/header'
import Meta from '../components/meta'
import Section from '../components/section'

export default ({pageContext}) => {
    return(
        <>  
            <Header lang={pageContext.lang}/>
            <Meta meta={pageContext.meta}/>
            <Section data={pageContext.data} />
        </>
    )
}