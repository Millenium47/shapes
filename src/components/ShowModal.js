import './ShowModal.css';
import ShapeBox from './ShapeBox';

const ShowModal = ({ solution, isOpenShowModal }) => {
    const closeModal = () => {
        setTimeout(function () {
            isOpenShowModal(false);
        }, 3000);
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
