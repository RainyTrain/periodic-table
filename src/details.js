import { useEffect, useState } from 'react'
import './styles/details.scss'

function Details(props) {

    const [scale, setScale] = useState('')

    useEffect(() => {
        console.log(props.element.melt - 273)
    }, [scale])

    function change() {
        if(scale == 'Celsius'){
            return props.element.melt - 273
        }
        return props.element.melt
    }

    return (
        <div className={props.active ? 'main active' : 'main'} onClick={() => props.setActive(!props.active)}>
            <div className='content' onClick={e => e.stopPropagation()}>
                <div className='element'>
                    <div className='symbol' style={{backgroundColor:props.color}}>
                        {props.element.symbol}
                    </div>
                    {props.element.name}                 
                </div>
                <div>
                    Series: {props.element.category}
                </div>
                <div>
                    Melting point: {props.element.name}
                    <select onChange={e => setScale(e.target.value)}>
                        <option value='kelvin'>Kelvin</option>
                        <option value='celsius'>Celsius</option>
                    </select>
                </div>
                <div>
                    Atomic number: {props.element.number}
                </div>
            </div>
        </div>
    )
}

export default Details