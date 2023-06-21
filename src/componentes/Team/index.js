import './Team.css'
import Card from '../Card'

function Team(props) {
    const styleBackground = {backgroundColor: props.corSecundaria}
    const styleBorderColor = {borderColor: props.corPrimaria}

    return (
        props.colaborators.length > 0 && <section className='team' style={styleBackground}>
            <h3 style={styleBorderColor}>{props.name}</h3>
            <div className='colaborators'>
                {props.colaborators.map(colaborator => <Card key={colaborator.nome} corPrimaria={props.corPrimaria} userPhoto={colaborator.imagem} username={colaborator.nome} userRole={colaborator.cargo} />)}
            </div>
        </section>
    )
}

export default Team;