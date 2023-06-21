import Banner from './componentes/Banner';
import Form from './componentes/Form';
import Team from './componentes/Team';
import { useState } from 'react';

function App() {


  const teams = [
    {
      nome: 'Programação',
      corPrimaria: '#57C278',
      corSecundaria: '#D9F7E9'
    },
    {
      nome: 'Front-End',
      corPrimaria: '#82CFFA',
      corSecundaria: '#E8F8FF'
    },
    {
      nome: 'Data-Sciente',
      corPrimaria: '#A6D157',
      corSecundaria: '#F0F8E2'
    },
    {
      nome: 'DevOps',
      corPrimaria: '#E06B69',
      corSecundaria: '#FDE7E8'
    },
    {
      nome: 'UX/Design',
      corPrimaria: '#DB6EBF',
      corSecundaria: '#FAE9F5'
    },
    {
      nome: 'Mobile',
      corPrimaria: '#FFBA05',
      corSecundaria: '#FFF5D9'
    },
    {
      nome: 'Inovação e gestão',
      corPrimaria: '#FF8A29',
      corSecundaria: '#FFEEDF'
    }
  ]
  const [colaborators, setColaborators] = useState([])
  const onNewColaboratorRegistered = (colaborator) => {
    console.log(colaborator)
    setColaborators([...colaborators, colaborator])
  }

  return (
    <div className="App">
      <Banner />
      <Form teams={teams.map(team => team.nome)} onColaboratorRegistered={colaborator => onNewColaboratorRegistered(colaborator)} />
      {teams.map(team => <Team  key={team.nome} name={team.nome} corPrimaria={team.corPrimaria} corSecundaria={team.corSecundaria} colaborators={colaborators.filter(colaborator => colaborator.time == team.nome)}/>)}
    </div>
  );
}

export default App;
