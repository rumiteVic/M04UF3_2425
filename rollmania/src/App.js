import './App.css';
import Die from './Die.js';
import Title from './Title.js';
import Section from './Section.js';
function App() {
  return (
    <div className="rollmania">
        <Title />
        <main className="App">
        <div className="fila1"><Die />
        <Die />
        <Die />
        </div>
<div className="fila2">
        <Section />
        <Section />
        <Section />
        </div>
        </main>
    </div>
 );
}

export default App;
