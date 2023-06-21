import { useState } from 'react'
import Botao from '../Botao'
import CampoTexto from '../CampoTexto'
import ListStrings from '../ListStrings'
import './Form.css'

function Form (props) {

    const [nome, setNome] = useState('')
    const [cargo, setCargo] = useState('')
    const [time, setTime] = useState('')
    const [imagem, setImagem] = useState('')

    function saving (evento) {
        evento.preventDefault()
        props.onColaboratorRegistered({
            nome,
            cargo,
            imagem,
            time
        })
        
        setNome('')
        setCargo('')
        setTime('')
        setImagem('')
    }

    return (
        <section className='form'>
            <form onSubmit={saving}>
                <h2>Preencha os dados para criar o card do colaborador</h2>
                <CampoTexto must={true} label="Nome" placeholder="Digite seu nome..." valor={nome} onChanged={valor => setNome(valor)} />
                <CampoTexto must={true} label="Cargo" placeholder="Digite seu cargo..." valor={cargo} onChanged={valor => setCargo(valor)} />
                <CampoTexto label="Imagem" placeholder="Informe o endereço da imagem..." valor={imagem} onChanged={valor => setImagem(valor)} />   
                <ListStrings must={true} label="Time" itens={props.teams} valor={time} onChanged={valor => setTime(valor)} />
                <Botao>Criar card</Botao>
            </form>
        </section>
    )
}

export default Form