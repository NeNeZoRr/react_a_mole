// App.js
import './App.css';
import { useState } from 'react'
import MoleContainer from './components/MoleContainer'

function App() {
  const [score, setScore] = useState(0);

  const createMoleHill = () => {
    const hills = [];
    for (let i = 0; i < 9; i++) {
      hills.push(
        <MoleContainer
          key={i}
          setScore={setScore}
          score={score}
        />
      );
    }

    return (
      <div className="mole-hill">
        {hills}
      </div>
    );
  }

  return (
    <div className="App">
      <h1>React-a-Mole!</h1>
      <p>Score: {score}</p>
      {createMoleHill()}
    </div>
  );
}

export default App;
