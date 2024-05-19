import React, { useEffect, useState } from 'react';
import Cell from './cell';
import KeyboardService from './services/KeyboardService';

function Board() {
    const numRows = 10;
    const numCols = 20;
    const [cellsOn, setCellsOn] = useState([]);
    const [isObjectOnBoard, setIsObjectOnBoard] = useState(true);

    useEffect(() => {
        KeyboardService.init(handleSpacePress);
        updateIsObjectOnBoard(cellsOn);
    }, [cellsOn]);

    const handleSpacePress = () => {
        setCellsOn([[1, 1], [1, 2], [2, 1], [2, 2]]);
    };

    const updateIsObjectOnBoard = (cellsOn) => {
        setIsObjectOnBoard(cellsOn.length === 0);
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
                        <Cell key={cellIndex} cellValue={cell} cellsOn={cellsOn} />
                    ))}
                </div>
            ))}
        </div>
    );
}

export default Board;
