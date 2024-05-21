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
    const [topLimitReached, setTopLimitReached] = useState(false);

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
        setIsObjectOnBoard(true)
        const objects = Object.values(objectList);
        const randomObject = objects[Math.floor(Math.random() * objects.length)];
        setCellsOn(randomObject);
    };

    const handleArrowPress = (direction) => {
        setCellsOn(prevCellsOn => {
            const nextCellsOn = prevCellsOn.map(([row, col]) => {
                let newElement;
                switch (direction) {
                    case 'left':
                        newElement = [row, Math.max(1, col - 1)];
                        break;
                    case 'right':
                        newElement = [row, Math.min(20, col + 1)];
                        break;
                    case 'up':
                        newElement = [Math.max(1, row - 1), col];
                        break;
                    case 'down':
                        newElement = [Math.min(10, row + 1), col];
                        break;
                    default:
                        return [row, col];
                }
                return newElement;
            });
    
            // Check for duplicates in nextCellsOn
            const isDuplicate = nextCellsOn.some((cell, index) => {
                return (
                    index !== nextCellsOn.findIndex(item => (
                        item[0] === cell[0] && item[1] === cell[1]
                    ))
                );
            });
    
            if (!isDuplicate) {
                return nextCellsOn;
            } else {
                return prevCellsOn;
            }
        });
    };
    useEffect(() => {
        if (isObjectOnBoard) {
            setTopLimitReached(cellsOn.some(([row, _]) => row === 1));
            setBottomLimitReached(cellsOn.some(([row, _]) => row === 10));
            setLeftLimitReached(cellsOn.some(([_, col]) => col === 1));
            setRightLimitReached(cellsOn.some(([_, col]) => col === 20));
          
        } else {
            setTopLimitReached(false);
            setBottomLimitReached(false);
            setLeftLimitReached(false);
            setRightLimitReached(false);
        }
    }, [cellsOn]);

    const updateIsObjectOnBoard = (cellsOn) => {
        const isObjectOnBoard = cellsOn.length > 0;
        setIsObjectOnBoard(isObjectOnBoard);
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
