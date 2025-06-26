import React, { useState } from 'react';
import { Cube } from './Cube';
import { getCubeSvg } from './getCubeSvg';

const initialCube = new Cube();

export default function App() {
  const [cube, setCube] = useState(initialCube);
  const [steps, setSteps] = useState([]);
  const [svg, setSvg] = useState(getCubeSvg(cube.getFaces()));

  const handleScramble = () => {
    const newCube = new Cube();
    newCube.scramble();
    setCube(newCube);
    setSteps([]);
    setSvg(getCubeSvg(newCube.getFaces()));
  };

  const handleSolve = async () => {
    const moves = cube.solve();
    const newSteps = [];
    for (let i = 0; i < moves.length; i++) {
      await new Promise(r => setTimeout(r, 500));
      cube.rotate(moves[i]);
      newSteps.push(`Step ${i + 1}: ${moves[i]}`);
      setSteps([...newSteps]);
      setSvg(getCubeSvg(cube.getFaces()));
    }
  };

  return (
    <div style={{ textAlign: 'center' }}>
      <h1>Rubik's Cube Solver (React)</h1>
      <button onClick={handleScramble}>Scramble</button>
      <button onClick={handleSolve}>Solve</button>
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
        <div style={{ width: '200px', textAlign: 'left' }}>
          {steps.map((step, i) => <div key={i}>{step}</div>)}
        </div>
        <div dangerouslySetInnerHTML={{ __html: svg }} />
      </div>
    </div>
  );
}