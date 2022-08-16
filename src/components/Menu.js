import animation from '../assets/1aoi.gif';

function Menu({ isOpenShowModal, setTimer }) {

    return (
        <div className="px-4 py-5 text-center bg-custom-blue container-fluid min-vh-100">
            <img className='d-block img-fluid mx-auto mb-4' src={animation} alt='gif' />
            <h1 className="display-5 fw-bold">Shape memory game</h1>
            <div className="col-lg-6 mx-auto">
                <p className="lead mb-4">After pressing start shapes with background color are shown for 10 seconds, then you have to repeat them and press submit.
                    Click on shape or background to change it. </p>
                <div className="btn-group d-grid gap-2 d-sm-flex justify-content-sm-center mb-4" role="group">
                    <input type="radio" className="btn-check" name="btnradio" id="btnradio1" autoComplete="off" onClick={() => setTimer(15)} />
                    <label className="btn btn-info" htmlFor="btnradio1">Easy</label>

                    <input type="radio" className="btn-check" name="btnradio" id="btnradio2" autoComplete="off" onClick={() => setTimer(10)} />
                    <label className="btn btn-info" htmlFor="btnradio2">Medium</label>

                    <input type="radio" className="btn-check" name="btnradio" id="btnradio3" autoComplete="off" onClick={() => setTimer(5)} />
                    <label className="btn btn-info" htmlFor="btnradio3">Hard</label>
                </div>
                <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
                    <button className="btn btn-primary btn-lg px-4 gap-3" onClick={() => { isOpenShowModal(true) }}>Start</button>
                </div>
            </div>
        </div>
    );
}

export default Menu;
