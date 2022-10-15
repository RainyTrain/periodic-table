import React from "react";
import st from '../src/styles/table.module.scss'
import { useState } from "react";
import Details from "./details";

function Element(props) {

    const [active, setActive] = useState(false)
    
    function whichColor(element) {
        switch (element.category) {
            case 'diatomic nonmetal':
                return 'rgb(56, 245, 144)'
            case 'noble gas':
                return 'rgb(240, 77, 255)'
            case 'alkali metal':
                return 'rgb(250, 219, 67)'
            case 'alkaline earth metal':
                return 'rgb(221, 255, 0)'
            case 'metalloid':
                return 'rgb(87, 231, 250)'
            case 'polyatomic nonmetal':
                return 'rgb(247, 106, 139)'
            case 'post-transition metal':
                return 'rgb(35, 196, 217)'
            case 'transition metal':
                return 'rgb(247, 183, 183)'
            case 'lanthanide':
                return 'rgb(247, 182, 106)'
            case 'actinide':
                return 'rgb(248, 173, 255)'
            default:
                return 'rgb(212, 212, 212)'
        }
    }

    function exit(){
        console.log(1)
        setActive(true)
    }

    return (
        <div className={st.element} style={{gridColumn:props.element.xpos, gridRow:props.element.ypos, backgroundColor:whichColor(props.element)}}>
            {props.element.number}<br/>
            <b>{props.element.symbol}</b>
            <div>
                {props.element.name}
            </div>
            <button onClick={() => setActive(true)}>Info</button>
            <Details active={active} setActive={setActive} element={props.element}></Details>
        </div>
    )
}

export default Element