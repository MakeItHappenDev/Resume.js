import React, {useState} from 'react'

export default () => {

    let defaultTheme = "dark"
    if(typeof window !== 'undefined'){
        defaultTheme = localStorage.getItem('theme') || defaultTheme  
    }

    const [theme,setTheme] = useState(defaultTheme)

    const setThemeAndStorage = (string) => {
        setTheme(string)
        if(typeof window !== 'undefined'){
            localStorage.setItem('theme', string);
        }
    }

    let css = `:root{
    --bgColor:#505050;
    --link: #8ad3ff;
    --mildHL: #c5ffa4;
    --color: #c0c0c0;
    --bgSection: #303030;
    --lines:#738574;
    }`

    if(theme === "dark"){
    }
    else{
        css = `
        :root{
            --bgColor:#d0d0d0;
            --link: blue;
            --mildHL: red;
            --color: #303030;
            --bgSection: white;
            --lines:#FFd0d0;}
        `
    }
    return(
        <>
            <section id="theme">
                <p onClick={()=>setThemeAndStorage("dark")}>Dark Theme</p>
                <p onClick={()=>setThemeAndStorage("light")}>light Theme</p>
            </section>
            <style dangerouslySetInnerHTML={{__html: css}} />
        </>
    )
}