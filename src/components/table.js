import React, { useRef, useState } from "react";
import data from '../elements.json'
import st from '../src/styles/table.module.scss'
import Element from "./element";
import {BiMoon} from 'react-icons/bi'
import {FiSun} from 'react-icons/fi'

function Table() {

    const [theme, setTheme] = useState('bright')
    const button = useRef('')

    function change() {
        if (theme == 'bright') {
            setTheme('dark')
            button.current.className = `${st.button} ${st.active}`
        }
        else{
            setTheme('bright')
            button.current.className = `${st.button}`
        }
    }

    return (
        <div className={theme == 'bright' ? `${st.table} ${st.bright}` : `${st.table} ${st.dark}`}>
            <button className={st.button} ref={button} onClick={change} style={{gridColumn: 9, gridRow:2}}><span></span><FiSun/><BiMoon/></button>
            {data.elements.map(element => {
                console.log(element.category)
                return <Element element={element}/>
            })}
        </div>
    )
}

export default Table