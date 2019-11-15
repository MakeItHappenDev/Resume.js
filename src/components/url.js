import React from 'react'
import { FaExternalLinkAlt, FaGithub, FaTwitter, FaYoutube, FaFlickr, FaLinkedinIn, FaGlobe, FaTwitch } from 'react-icons/fa';

export default (props) => {

    let El = FaExternalLinkAlt
    if(props.platform === "Github"){
        El = FaGithub
    }
    else if(props.platform === "Twitter"){
        El = FaTwitter
    }
    else if(props.platform === "YouTube"){
        El = FaYoutube
    }
    else if(props.platform === "Flickr"){
        El = FaFlickr
    }
    else if(props.platform === "LinkedIn"){
        El = FaLinkedinIn
    }
    else if(props.platform === "Website"){
        El = FaGlobe
    }
    else if(props.platform === "Twitch"){
        El = FaTwitch
    }


    return(
    <a href={props.url} target="_blank" rel="noopener noreferrer"><El/> {props.text}</a>
    )
}