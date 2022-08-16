import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Modal from 'bootstrap/js/dist/modal';
import { CountdownCircleTimer } from 'react-countdown-circle-timer'

const ShowModal = ({ solution, timer }) => {
    let navigate = useNavigate();

    const [timeLeft, setTimeLeft] = useState(timer);

    useEffect(() => {
        if (timeLeft > 0)
            setTimeout(() => { setTimeLeft(timeLeft - 1) }, 950)
    }, [timeLeft]);

    useEffect(() => {
        var modal = getModal();
        modal.show();

        setTimeout(() => {
            modal.hide();
            navigate('/guess');
        }, timer * 1000);
    }, []);

    const getModal = () => {
        var myModal = document.getElementById('exampleModal');
        var modal = Modal.getInstance(myModal) || new Modal(myModal);
        return modal;
    }

    const showBoxes = ({ id, color, shape }) => {
        return (
            <div key={id} className='col-md-2 col-sm-10'>
                <div className={'border border-dark rounded py-5 card-' + color}>
                    <p className={'display-1 bi-' + shape} />
                </div>
            </div >
        );
    }

    return (
        <div className="modal bg-custom-blue" id="exampleModal" tabIndex="-1" data-bs-backdrop="static">
            <div className="modal-dialog modal-xl modal-dialog-centered">
                <div className="position-absolute top-0 start-50 translate-middle-x">
                    <p className="display-1 fw-bold">{timeLeft}</p>
                </div>
                <div className="modal-content">
                    <div className="modal-body">
                        <div className="text-center container">
                            <div className="row justify-content-center" styles={{ margin: '-50px' }}>
                                {solution.map(box => showBoxes(box))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
}

export default ShowModal;