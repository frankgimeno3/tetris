import React, { useState, useEffect } from 'react';

function Cell({ cellValue }) {
    const [isCellBottomLimit, setIsCellBottomLimit] = useState(false);
    const [isCellLeftLimit, setIsCellLeftLimit] = useState(false);
    const [isCellRightLimit, setIsCellRightLimit] = useState(false);

    useEffect(() => {
        if (cellValue.row === 10) {
            setIsCellBottomLimit(true);
        } else {
            setIsCellBottomLimit(false);
        }

        if (cellValue.col === 1) {
            setIsCellLeftLimit(true);
        } else {
            setIsCellLeftLimit(false);
        }

        if (cellValue.col === 20) {
            setIsCellRightLimit(true);
        } else {
            setIsCellRightLimit(false);
        }
    }, [cellValue]);

    return (
        <div className='flex flex-col text-center bg-black w-12 h-12  m-2'>
            
        </div>
    );
}

export default Cell;
