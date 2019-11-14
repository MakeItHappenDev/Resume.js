import React from 'react'
import SkillSet from './skillset'
import Experience from './experience'
import Education from './education'
import Project from './project'
import Hobby from './hobbies'


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
    else if(props.type === "project"){
        return <Project {...props} />
    }
    else if(props.type === "hobby"){
        return <Hobby {...props} />
    }

    return(
        <pre>Couldn't find a renderer type for that card {JSON.stringify(props,null,1)}</pre>
    )
}