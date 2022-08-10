import './BoxList.css';
import { useNavigate } from "react-router-dom";
import ShapeBox from './ShapeBox';

function BoxList({ guess, updateGuess }) {
    let navigate = useNavigate();

    const showResult = () => {
        navigate("/results")
    }

    return (
        <>
            <div className="box-list">
                {guess.map(box => <ShapeBox id={box.id} color={box.color} shape={box.shape} updateGuess={updateGuess} />)}
            </div>
            <button onClick={showResult}>Submit</button>
        </>
    );
}

export default BoxList;
