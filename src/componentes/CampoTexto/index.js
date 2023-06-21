import './CampoTexto.css'

function CampoTexto(props) {

    function onTyped (evento) {
        props.onChanged(evento.target.value)
    }
    return(
        <div className ="campo-texto">
            <label>{props.label}</label>
            <input value={props.valor} onChange={onTyped} required={props.must} placeholder={props.placeholder} />
        </div>
    )

}

export default CampoTexto;