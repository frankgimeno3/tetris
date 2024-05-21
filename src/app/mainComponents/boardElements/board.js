import React, { useEffect, useState } from 'react';
import Cell from './cell';
import KeyboardService from './services/KeyboardService';

function Board() {
    const numRows = 10;
    const numCols = 20;
    const [cellsOn, setCellsOn] = useState([]);
    const [isObjectOnBoard, setIsObjectOnBoard] = useState(false);
    const [leftLimitReached, setLeftLimitReached] = useState(false);
    const [rightLimitReached, setRightLimitReached] = useState(false);
    const [bottomLimitReached, setBottomLimitReached] = useState(false);

    const objectList = {
        dot: [[1, 1]],
        square: [[1, 1], [1, 2], [2, 1], [2, 2]],
        line: [[1, 1], [1, 2], [1, 3], [1, 4]],
        Z: [[1, 1], [1, 2], [2, 2], [3, 2], [3, 3]],
        S: [[1, 2], [1, 3], [2, 2], [3, 1], [3, 2]]
    };

    useEffect(() => {
        KeyboardService.init(handleArrowPress, handleSpacePress);
    }, []);

    useEffect(() => {
        updateIsObjectOnBoard(cellsOn);
    }, [cellsOn]);

    const handleSpacePress = () => {
        const objects = Object.values(objectList);
        const randomObject = objects[Math.floor(Math.random() * objects.length)];
        setCellsOn(randomObject);
    };

    const handleArrowPress = (direction) => {
        setCellsOn(prevCellsOn => {
            return prevCellsOn.map(([row, col]) => {
                switch (direction) {
                    case 'left':
                        return [row, Math.max(1, col - 1)];
                    case 'right':
                        return [row, Math.min(20, col + 1)];
                    case 'up':
                        return [Math.max(1, row - 1), col];
                    case 'down':
                        return [Math.min(10, row + 1)]; // Changed from 20 to 10 to match numRows
                    default:
                        return [row, col];
                }
            });
        });
    };

    const updateIsObjectOnBoard = (cellsOn) => {
        const isObjectOnBoard = cellsOn.length > 0;
        setIsObjectOnBoard(isObjectOnBoard);

        if (isObjectOnBoard) {
            setBottomLimitReached(cellsOn.some(([row, _]) => row === 10));
            setLeftLimitReached(cellsOn.some(([_, col]) => col === 1));
            setRightLimitReached(cellsOn.some(([_, col]) => col === 20));
        } else {
            setBottomLimitReached(false);
            setLeftLimitReached(false);
            setRightLimitReached(false);
        }
    };

    // Generar las filas y columnas
    const rows = [];
    for (let row = 1; row <= numRows; row++) {
        const cells = [];
        for (let col = 1; col <= numCols; col++) {
            cells.push({ row, col });
        }
        rows.push(cells);
    }

    return (
        <div className='flex flex-col text-center bg-white'>
            {rows.map((row, rowIndex) => (
                <div key={rowIndex} className='flex flex-row'>
                    {row.map((cell, cellIndex) => (
                        <Cell
                            key={cellIndex}
                            cellValue={cell}
                            cellsOn={cellsOn}
                        />
                    ))}
                </div>
            ))}
        </div>
    );
}

export default Board;
