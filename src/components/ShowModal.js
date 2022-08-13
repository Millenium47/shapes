import './ShowModal.css';
import { useNavigate } from "react-router-dom";

const ShowModal = ({ solution, isOpenShowModal }) => {
    let navigate = useNavigate();

    const closeModal = () => {
        // setTimeout(function () {
        //     isOpenShowModal(false);
        //     navigate('/guess');
        // }, 1000);
    }

    const showBoxes = ({ id, color, shape }) => {
        return (
            <div key={id} className={'card ' + color} style={{ padding: '2rem' }}>
                <p className={'bi-' + shape} style={{ fontSize: '4rem' }} />
            </div>
        );
    }

    return (
        <div className="modalBackground">
            <div className="modalContainer">
                <div className='d-grid gap-2 d-sm-flex justify-content-sm-center'>
                    {solution.map(box => showBoxes(box))}
                </div>
                {closeModal()}
            </div>
        </div>
    );
}

export default ShowModal;