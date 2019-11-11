import React from 'react'
import SkillSet from './skillset'
import Experience from './experience'
import Education from './education'


export default props => {
    if(props.type === "skillset"){
        return <SkillSet {...props}/>
    }
    else if(props.type === "experience"){
        return <Experience {...props} />
    }
    else if(props.type === "education"){
        return <Education {...props}/>
    }

    return(
        <pre>Couldn't find a renderer type for that card {JSON.stringify(props,null,1)}</pre>
    )
}