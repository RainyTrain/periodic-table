import { useMemo, useState } from 'react'
import '../styles/details.scss'

function Details(props) {

    const [scale, setScale] = useState('')

    const melt = useMemo(() => {
        if(scale == 'celsius'){
            return props.element.melt - 273
        }
        return props.element.melt
    }, [scale])

    return (
        <div className={props.active ? 'main active' : 'main'} onClick={() => props.setActive(!props.active)}>
            <div className='content' onClick={e => e.stopPropagation()}>
                <div className='element'>
                    <div className='symbol' style={{backgroundColor:props.color}}>
                        {props.element.symbol}
                    </div>
                    {props.element.name}                 
                </div>
                <div className='description'>
                     <div>
                        {props.element.period}
                    </div>
                    <div>
                        {melt}
                        <select style={{marginLeft: '15px'}} onChange={e => setScale(e.target.value)}>
                            <option value='kelvin'>Kelvin</option>
                            <option value='celsius'>Celsius</option>
                        </select>
                    </div>
                    <div>
                        {props.element.number}
                    </div>
                    <div>
                        {props.element.category}
                    </div>
                    <div>
                        {props.element.atomic_mass}
                    </div>
                    <div>
                        {props.element.electron_configuration}
                    </div>
                </div>
                <div className='properties'>
                    <div>Period:</div>
                    <div>Melting point:</div>
                    <div>Atomic number:</div>
                    <div>Series:</div>
                    <div>Atomic mass:</div>
                    <div>Electron configuration:</div>
                </div>
            </div>
        </div>
    )
}

export default Details