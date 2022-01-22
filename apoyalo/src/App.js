import './App.css';
import Datos from './componentes/PersonCards';

function App() {
  return (
    <div className="App">
      <Datos firstName="Jane" lastName="Doe" age="45" hairColor="Black"/>
      <Datos firstName="John" lastName="Smith" age="88" hairColor="Brown"/>
      <Datos firstName="Millard" lastName="Fillmore" age="50" hairColor="Brown"/>
      <Datos firstName="Maria" lastName="Smith" age="62" hairColor="Brown"/>
    </div>
  );
}

export default App;
