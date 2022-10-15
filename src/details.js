import './styles/details.scss'

function Details(props) {

    return (
        <div className={props.active ? 'main active' : 'main'} onClick={() => props.setActive(false)}>
            <div className='content'>
                {props.element.category}<br/>
                {props.element.name}<br/>
                {props.element.number}<br/>
                Atomic mass - {props.element.atomic_mass}<br/>
            </div>
        </div>
    )
}

export default Details