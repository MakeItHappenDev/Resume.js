import React from 'react'

export default ({pageContext}) => {
    return(
        <>
            <p>Hello from the template</p>
            <pre>{JSON.stringify(pageContext,null,1)}</pre>
        </>
    )
}