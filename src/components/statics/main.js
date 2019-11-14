import React from 'react'
import Langs from './langs'
import Skillsets from './skillsets'
import Links from './links'
import Profile from './profile'


export default (props) => {
    if(props.type === "languages"){
        return( <Langs {...props} />)    
    }
    else if(props.type === "links"){
        return( <Links {...props} />)
    }
    else if(props.type === "skillsets"){
        return ( <Skillsets {...props} />)
    }
    else if(props.type === "profile"){
        return ( <Profile {...props}/>)
    }

    return(
        <pre>Couldn't render {JSON.stringify(props,null,1)}</pre>
    )
}