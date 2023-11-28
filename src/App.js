import './App.css';
import { useState } from 'react';
import MoleContainer from './components/MoleContainer';

function App() {
  const [score, setScore] = useState(0);

  const createMoleHill = () => {
    const moleContainers = [];
    const numRows = 3;
    const numCols = 3;

    for (let row = 0; row < numRows; row++) {
      const moleRow = [];
      for (let col = 0; col < numCols; col++) {
        const index = row * numCols + col;
        moleRow.push(
          <MoleContainer
            key={index}
            setScore={setScore}
            score={score}
          />
        );
      }
      moleContainers.push(
        <div key={row} className="mole-row">
          {moleRow}
        </div>
      );
    }

    return moleContainers;
  };

  return (
    <div className="App">
      <h1>React-a-Mole!</h1>
      <p>Score: {score}</p>
      <div className="mole-hill">
        {createMoleHill()}
      </div>
    </div>
  );
}

export default App;
