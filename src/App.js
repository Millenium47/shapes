import { useEffect, useState } from "react";
import { BrowserRouter, MemoryRouter, Route, Routes, } from "react-router-dom";
import BoxList from "./components/BoxList";
import ShowModal from "./components/ShowModal";
import Result from "./components/Result";
import Menu from "./components/Menu";

function App() {

  const shapes = [
    { id: 10, shape: 'triangle', color: 'red' },
    { id: 20, shape: 'circle', color: 'green' },
    { id: 30, shape: 'diamond', color: 'blue' },
    { id: 40, shape: 'hexagon', color: 'black' },
    { id: 50, shape: 'triangle', color: 'yellow' }
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
  const [timer, setTimer] = useState(10)

  useEffect(() => {
    setSolution(shapes);
    setGuess(defaultShapes);
  }, [])

  const updateGuess = (id, newShape, newColor) => {
    const newGuess = guess.map(prev => {
      if (prev.id === id) {
        return { ...prev, shape: newShape, color: newColor };
      }
      return prev;
    })
    setGuess(newGuess);
  }

  const evaluate = () => {
    const replacer = (key, value) => {
      if (key === 'id') return undefined;
      else return value;
    }

    const result = JSON.stringify(solution, replacer) === JSON.stringify(guess, replacer);
    return result
  }

  const start = () => {
    return !openShowModal ?
      <Menu isOpenShowModal={isOpenShowModal} setTimer={setTimer} /> :
      <ShowModal timer={timer} solution={solution} isOpenShowModal={isOpenShowModal} />
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={start()} />
        <Route path="/guess" element={<BoxList guess={guess} updateGuess={updateGuess} />} />
        <Route path="/results" element={<Result evaluate={evaluate} isOpenShowModal={isOpenShowModal} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
