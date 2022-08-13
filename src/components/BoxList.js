import { useNavigate } from "react-router-dom";
import ShapeBox from './ShapeBox';

function BoxList({ guess, updateGuess }) {
    let navigate = useNavigate();

    const showResult = () => {
        navigate("/results")
    }

    return (
        <div className='px-4 py-5 text-center container-fluid bg-custom-blue'>
            <div className="row mx-5 ">
                <div className='d-grid gap-4 d-sm-flex justify-content-sm-center'>
                    {guess.map(box => <ShapeBox id={box.id} color={box.color} shape={box.shape} updateGuess={updateGuess} />)}
                </div>
            </div>
            <div className='row'>
                <div className='col-5' />
                <button className='col-2 mt-4 btn-lg btn btn-primary' onClick={showResult}>Submit</button>
            </div>
        </div>
    );
}

export default BoxList;
