import React, { useState, useEffect } from 'react';

function Cell({ cellValue, cellsOn }) {
    const [isCellOn, setIsCellOn] = useState(false);

    //esto determina si isCellOn es true o false
    useEffect(() => {
        const isCellOnNow = cellsOn.some(item => item[0] === cellValue.row && item[1] === cellValue.col);
        setIsCellOn(isCellOnNow);
    }, [cellValue, cellsOn]);

 
    return (
        <div className={`flex flex-col text-center ${isCellOn ? 'bg-orange-200' : 'bg-black'} w-12 h-12 m-2`}>
         </div>
    );
}

export default Cell;
