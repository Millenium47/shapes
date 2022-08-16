import { useNavigate } from "react-router-dom";

function Result({ evaluate, isOpenShowModal }) {
    const result = evaluate();
    let navigate = useNavigate();

    const playAgain = () => {
        isOpenShowModal(false);
        navigate("/")
    }

    const retryGame = () => {
        navigate("/guess")
    }

    return (
        <div className="px-4 py-5 text-center bg-custom-blue container-fluid">
            <div className="col-lg-6 mx-auto my-5">
                <h1 className="display-5 fw-bold">{result ? 'Congratulations, you win!' : 'You lose, try again!'}</h1>
            </div>
            <div className="col-lg-6 mx-auto my-5">
                <button className='btn btn-primary btn-lg px-4 gap-3' onClick={retryGame}>Retry and fix it</button>
            </div>
            <div className="col-lg-6 mx-auto my-5">
                <button className='btn btn-primary btn-lg px-4 gap-3' onClick={playAgain}>Play new game</button>
            </div>
        </div>
    );
}

export default Result;
