import { useState } from "react";
import BoxList from "./components/BoxList";

function App() {

  const shapes = [
    { id: 10, shape: 'triangle', color: 'red' },
    { id: 20, shape: 'triangle', color: 'red' },
    { id: 30, shape: 'triangle', color: 'red' },
    { id: 40, shape: 'triangle', color: 'red' },
    { id: 50, shape: 'triangle', color: 'red' }
  ]

  const defaultShapes = [
    { id: 1, shape: 'square', color: 'black' },
    { id: 2, shape: 'circle', color: 'red' },
    { id: 3, shape: 'pentagon', color: 'yellow' },
    { id: 4, shape: 'diamond', color: 'green' },
    { id: 5, shape: 'hexagon', color: 'blue' }
  ]

  const [solution, setSolution] = useState([]);
  const [guess, setGuess] = useState([]);

  const updateGuess = (id, newShape, newColor) => {
    const newGuess = guess.map(prev => {
      if (prev.id === id) {
        console.log('prev.id ', { ...prev, shape: newShape, color: newColor });
        return { ...prev, shape: newShape, color: newColor };
      }
      return prev;
    })
    setGuess(newGuess);
  }

  const start = () => {
    setSolution(shapes);
    setGuess(defaultShapes);
  }

  return (
    <div className="container">
      <button onClick={start}>Start</button>
      <BoxList guess={guess} updateGuess={updateGuess} />
    </div>
  );
}

export default App;
