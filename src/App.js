import React, { useState } from 'react';
import MoleContainer from './components/MoleContainer';
import './App.css';

const App = () => {
  const [score, setScore] = useState(0);

  const createMoleHill = () => (
    <div>
      {[...Array(9)].map((_, i) => (
        <MoleContainer key={i} setScore={setScore} score={score} />
      ))}
    </div>
  );

  const handleResetScore = () => {
    setScore(0);
  };

  return (
    <div className="App">
      <h1>React-A-Mole!</h1>
      <div>
        <p>Score: {score}</p>
        <button onClick={handleResetScore}>Reset Score</button>
      </div>
      {createMoleHill()}
    </div>
  );
};

export default App;
