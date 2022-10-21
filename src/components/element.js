import React from "react";
import st from '../styles/element.module.scss'
import { useState } from "react";
import Details from '../components/details.js'

function Element(props) {

    const [active, setActive] = useState(false)
    const [color, setColor] = useState('')
    
    function whichColor(element) {
        switch (element.category) {
            case 'diatomic nonmetal':
                return 'rgba(56, 245, 144, 0.5)'
            case 'noble gas':
                return 'rgba(240, 77, 255, 0.5)'
            case 'alkali metal':
                return 'rgba(250, 219, 67, 0.5)'
            case 'alkaline earth metal':
                return 'rgba(221, 255, 0, 0.5)'
            case 'metalloid':
                return 'rgba(87, 231, 250, 0.5)'
            case 'polyatomic nonmetal':
                return 'rgba(247, 106, 139, 0.5)'
            case 'post-transition metal':
                return 'rgba(35, 196, 217, 0.5)'
            case 'transition metal':
                return 'rgba(247, 183, 183, 0.5)'
            case 'lanthanide':
                return 'rgba(247, 182, 106, 0.5)'
            case 'actinide':
                return 'rgba(248, 173, 255, 0.5)'
            default:
                return 'rgba(212, 212, 212, 0.5)'
        }
    }

    function exit() {
        setActive(!active)
        setColor(whichColor(props.element))
    }

    return (
        <div onClick={exit} className={st.element} style={{gridColumn:props.element.xpos, gridRow:props.element.ypos, backgroundColor:whichColor(props.element)}}>
            {props.element.number}<br/>
            <b>{props.element.symbol}</b>
            <div>
                {props.element.name}
            </div>
            <Details active={active} setActive={setActive} element={props.element} color={color}></Details>
        </div>
    )
}

export default Element