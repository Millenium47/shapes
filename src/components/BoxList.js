import './BoxList.css';
import ShapeBox from './ShapeBox';

function BoxList({ guess, updateGuess }) {
    return (
        <div className="box-list">
            {guess.map(box => <ShapeBox id={box.id} color={box.color} shape={box.shape} updateGuess={updateGuess} />)}
        </div>
    );
}

export default BoxList;
