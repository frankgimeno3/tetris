import React, { useState } from 'react';
import Cell from './cell';

function Board() {
    const numRows = 10;
    const numCols = 20;

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
                        <Cell key={cellIndex} cellValue={cell} />
                    ))}
                </div>
            ))}
        </div>
    );
}

export default Board;
