import React from 'react';
import { useState } from 'react';

const Counter = () => {
    const [count, setCount] = useState(0);

    return (
        <div className='d-flex justify-content-center align-items-center m-4 p-4'>
            <div> <h1 className='d-flex justify-content-center m-4'>
                count: {count}
            </h1>

                <button className='btn btn-success m-2' onClick={() => setCount(count + 1)}>Increase</button>
                <button className='btn btn-secondary m-2 ' onClick={() => setCount(0)}>Reset</button>
                <button className='btn btn-danger m-2' onClick={() => setCount(count - 1)}>Decrease</button>

            </div>
        </div>
    );
}

export default Counter