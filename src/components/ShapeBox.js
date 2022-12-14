function ShapeBox({ id, shape, color, updateGuess }) {

    const possibleShapes = ['square', 'circle', 'triangle', 'diamond', 'pentagon', 'hexagon'];
    const possibleColors = ['black', 'red', 'blue', 'green', 'yellow'];

    const updateGuessShape = (e) => {
        e.stopPropagation();
        console.log('updateGuessShape')
        const index = possibleShapes.findIndex(e => e === shape) + 1;
        const newShape = index < possibleShapes.length ? possibleShapes[index] : possibleShapes[0];
        updateGuess(id, newShape, color);
    }

    const updateGuessColor = () => {
        console.log('updateGuessColor')
        const index = possibleColors.findIndex(e => e === color) + 1;
        const newColor = index < possibleColors.length ? possibleColors[index] : possibleColors[0];
        updateGuess(id, shape, newColor);
    }

    return (
        <div className='col-md-2 col-sm-7'>
            <div className={'border border-dark rounded py-5 px-4 card-' + color} onClick={updateGuessColor} >
                <p onClick={updateGuessShape} className={'display-1 bi-' + shape} />
            </div>
        </div>
    );
}

export default ShapeBox;