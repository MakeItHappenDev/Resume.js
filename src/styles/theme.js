import React, {useState} from 'react'

import styles from './theme.module.scss'

export default () => {

    let defaultTheme = 'light'
    


    
    if(typeof window !== 'undefined'){
        if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
            defaultTheme = 'dark'
        }
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
    else if(theme === 'purple'){
        css = `
    :root{
        --bgColor:#d0d0d0;
        --bgSection:white;
        --link: teal;
        --highlight:#542c85;
        --color:#303030;
        --line:#542c85;
        --printHL:#542c85;
    }`
    }

    return(
        <>
            <section className={styles.theme}>
                <h2>Themes</h2>
                <p className={theme==="dark"?styles.selected:null} onClick={()=>setThemeAndLocalStorage('dark')}>dark</p>
                <p className={theme==="light"?styles.selected:null} onClick={()=>setThemeAndLocalStorage('light')}>light</p>
                <p className={theme==="purple"?styles.selected:null} onClick={()=>setThemeAndLocalStorage('purple')}>Purple</p>
            </section>
            <style dangerouslySetInnerHTML={{__html:css}} />
        </>
    )
}
