import './ShapeBox.css';

function ShapeBox({ id, shape, color, updateGuess }) {

    const possibleShapes = ['square', 'circle', 'triangle', 'star', 'pentagon', 'hexagon'];
    const possibleColors = ['black', 'red', 'blue', 'green', 'yellow'];

    const updateGuessShape = (e) => {
        e.stopPropagation();
        const index = possibleShapes.findIndex(e => e === shape) + 1;
        const newShape = index < possibleShapes.length ? possibleShapes[index] : possibleShapes[0];
        updateGuess(id, newShape, color);
    }

    const updateGuessColor = () => {
        const index = possibleColors.findIndex(e => e === color) + 1;
        const newColor = index < possibleColors.length ? possibleColors[index] : possibleColors[0];
        updateGuess(id, shape, newColor);
    }

    return (
        <div key={id} className={'card ' + color} onClick={updateGuessColor} >
            <i onClick={updateGuessShape} className={'bi-' + shape} />
        </div>
    );
}

export default ShapeBox;
