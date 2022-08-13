import animation from '../assets/1aoi.gif';

function Menu({ isOpenShowModal }) {


    return (
        <div className="px-4 py-5 text-center bg-custom-blue container-fluid">
            <img className='d-block mx-auto mb-4' src={animation} alt='gif' />
            <h1 className="display-5 fw-bold">Shape memory game</h1>
            <div className="col-lg-6 mx-auto">
                <p className="lead mb-4">After pressing start shapes with background color are shown for 5 seconds, then you have to repeat them and press submit.
                    Click on shape or background to change it. </p>
                <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
                    <button className="btn btn-primary btn-lg px-4 gap-3" onClick={() => { isOpenShowModal(true) }}>Start</button>
                </div>
            </div>
        </div>
    );
}

export default Menu;
