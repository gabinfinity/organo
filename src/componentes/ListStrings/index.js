import './ListStrings.css'

function ListStrings (props) {

    return (
        <div className='list-strings'>
            <label>{props.label}</label>
         <select required={props.must} onChange={evento => props.onChanged(evento.target.value)}value={props.valor}>
                <option value = "">Selecione um time</option>       
                {props.itens.map(item => <option key={item}>{item}</option>)}
         </select>
        </div>
    )
}

export default ListStrings