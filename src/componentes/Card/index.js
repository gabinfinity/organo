import './Card.css'

function Card(props) {
    return (
        <div className='card'>
            <div className='cardr1' style={{backgroundColor: props.corPrimaria}}></div>
            <img src={props.userPhoto} alt = 'Foto do usuário' />
            
            <h1>{props.username}</h1>
            <p>{props.userRole}</p>
        </div>
    )
}

export default Card