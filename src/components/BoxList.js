import { useNavigate } from "react-router-dom";
import ShapeBox from './ShapeBox';

function BoxList({ guess, updateGuess }) {
    let navigate = useNavigate();

    const showResult = () => {
        navigate("/results")
    }

    return (
        <div className='py-5 text-center container-fluid bg-custom-blue'>
            <div className='py-5 row justify-content-center'>
                {guess.map(box => <ShapeBox id={box.id} color={box.color} shape={box.shape} updateGuess={updateGuess} />)}
            </div>
            <div className='row justify-content-center'>
                <button className='col-md-2 col-sm-4 mt-4 btn-lg btn btn-primary' onClick={showResult}>Submit</button>
            </div>
        </div>
    );
}

export default BoxList;
