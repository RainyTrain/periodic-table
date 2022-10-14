import React from "react";
import data from './elements.json'
import st from '../src/styles/table.module.scss'
import Element from "./element";

function Table() {

    return (
        <div className={st.table}>
            {data.elements.map(element => {
                console.log(element.category)
                return <Element element={element}/>
            })}
        </div>
    )
}

export default Table