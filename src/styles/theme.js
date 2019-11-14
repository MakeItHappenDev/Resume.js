import React, {useState} from 'react'

export default (props) => {

    const [theme,setTheme] = useState('dark')

    let css = `:root{
    --background:black;
    }`

    if(theme === "dark"){
    }
    else{
        css = `
        :root{
            --background:white;
        }
        `
    }
    return(
        <>
            <section>
                <p onClick={()=>setTheme("dark")}>Dark</p>
                <p onClick={()=>setTheme("light")}>light</p>
            </section>
            <style dangerouslySetInnerHTML={{__html: css}} />
        </>
    )
}