import { useEffect, useState } from "react";
import BoxList from "./components/BoxList";
import ShowModal from "./components/ShowModal";

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
  const [openShowModal, isOpenShowModal] = useState(false);
  const [startGuess, isStartGuess] = useState(false);

  useEffect(() => {
    setSolution(shapes);
    setGuess(defaultShapes);
  }, [])

  useEffect(() => {
    if (openShowModal) isStartGuess(true);
  }, [openShowModal])

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

  const startGuessing = () => {
    return (
      <>
        <BoxList guess={guess} updateGuess={updateGuess} />
        <button onClick={evaluate}>Submit</button>
      </>
    );
  }

  const evaluate = () => {

    const replacer = (key, value) => {
      if (key == 'id') return undefined;
      else return value;
    }

    const result = JSON.stringify(solution, replacer) === JSON.stringify(guess, replacer);
    return result ? <p>you win</p> : <p>you lose</p>;
  }

  return (
    <div className="container">
      {!openShowModal && !startGuess && <button onClick={() => { isOpenShowModal(true) }}>Start</button>}
      {openShowModal && <ShowModal solution={solution} isOpenShowModal={isOpenShowModal} />}
      {startGuess && startGuessing()}

    </div>
  );
}

export default App;
