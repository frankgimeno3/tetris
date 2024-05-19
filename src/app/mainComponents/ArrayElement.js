import React, { useState, useEffect } from 'react';

function ArrayElement({ passedArray }) {
    const [receivedArray, setReceivedArray] = useState([0, 0, 0, 0, 0, 0, 0, 0, 0]);

    useEffect(() => {
        setReceivedArray(passedArray);
    }, [passedArray]);

    return (
        <div className='flex flex-row'>
            {receivedArray.map((item, index) => (
                <div key={index} className={`m-2 rounded-md shadow-xl border border-gray-t00 px-2`} style={{ backgroundColor: item === 0 ? 'white' : 'red' }}>
                    <p style={{ color: item === 0 ? 'white' : 'red' }}>{item}</p>
                </div>
            ))}
        </div>
    );
}

export default ArrayElement;
