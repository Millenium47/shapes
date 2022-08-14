import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Modal from 'bootstrap/js/dist/modal';

const ShowModal = ({ solution }) => {
    let navigate = useNavigate();

    useEffect(() => {
        getModal().show();
        setTimeout(function () {
            getModal().hide();
            navigate('/guess');
        }, 5000);
    }, []);

    const getModal = () => {
        var myModal = document.getElementById('exampleModal');
        var modal = Modal.getInstance(myModal) || new Modal(myModal);
        return modal;
    }

    const showBoxes = ({ id, color, shape }) => {
        return (
            <div className='col-md-2 col-sm-10'>
                <div key={id} className={'border border-dark rounded py-5 card-' + color}>
                    <p className={'display-1 bi-' + shape} />
                </div>
            </div >
        );
    }

    return (
        <div className="modal bg-custom-blue" id="exampleModal" tabIndex="-1" data-bs-backdrop="static">
            <div className="modal-dialog modal-xl modal-dialog-centered">
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
        </div>
    );
}

export default ShowModal;