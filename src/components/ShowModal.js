import './ShowModal.css';
import { useNavigate } from "react-router-dom";

const ShowModal = ({ solution, isOpenShowModal }) => {
    let navigate = useNavigate();

    const closeModal = () => {
        setTimeout(function () {
            isOpenShowModal(false);
            navigate('/guess');
        }, 5000);
    }

    const showBoxes = ({ id, color, shape }) => {
        return (
            <div key={id} className={'card ' + color} >
                <i className={'bi-' + shape} />
            </div>
        );
    }

    return (
        <div className="modalBackground">
            <div className="modalContainer">
                {solution.map(box => showBoxes(box))}
                {closeModal()}
            </div>
        </div>
    );
}

export default ShowModal;
