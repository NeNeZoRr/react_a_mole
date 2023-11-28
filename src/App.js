import './App.css';
import { useState } from 'react';
import MoleContainer from './components/MoleContainer';

const App = () => {
  const [score, setScore] = useState(0);

  const createMoleHill = () => (
    <div>
      {[...Array(9)].map((_, i) => (
        <MoleContainer key={i} setScore={setScore} score={score} />
      ))}
    </div>
  );

  return (
    <div className="App">
      <h1>React-A-Mole!</h1>
      {score}
      {createMoleHill()}
    </div>
  );
};

export default App;
