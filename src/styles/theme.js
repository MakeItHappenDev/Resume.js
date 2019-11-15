import React, {useState} from 'react'


export default () => {

    let defaultTheme = 'light'
    if(typeof window !== 'undefined'){
        defaultTheme = localStorage.getItem('theme') || defaultTheme
    }
    const [theme, setTheme] = useState(defaultTheme)

    const setThemeAndLocalStorage = (string) => {
        setTheme(string)
        if(typeof window !== 'undefined'){
            localStorage.setItem('theme',string)
        }
    }

    let css = `
    :root{
        --bgColor:#d0d0d0;
        --bgSection:white;
        --link: #0000a0;
        --highlight:#a00000;
        --color:#303030;
        --line:#FFd0d0;
        --printHL:#800000;
    }`
    if(theme === 'dark'){
        css = `
    :root{
        --bgColor:#505050;
        --bgSection:#303030;
        --link: #8ad3ff;
        --highlight:#d5ffb4;
        --color:#c0c0c0;
        --line:#738573;
        --printHL:#009000;
    }`
    }

    return(
        <>
            <section id="theme">
                <p onClick={()=>setThemeAndLocalStorage('dark')}>dark</p>
                <p onClick={()=>setThemeAndLocalStorage('light')}>light</p>
            </section>
            <style dangerouslySetInnerHTML={{__html:css}} />
        </>
    )
}