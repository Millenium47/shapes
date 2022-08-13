import { useNavigate } from "react-router-dom";

function Result({ evaluate }) {
    const result = evaluate();
    let navigate = useNavigate();

    const playAgain = () => {
        navigate("/")
    }
    return (
        <>
            <p>{result ? 'you win' : 'you lose'}</p>
            <button className='btn btn-primary' onClick={playAgain}>Play again</button>
        </>
    );
}

export default Result;
