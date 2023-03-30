import React, { useContext, useState } from 'react';
import { COUNTER_CONTEXT } from '../App';

function Child() {

    const { setCount, count } = useContext(COUNTER_CONTEXT)
    return (
        <div className='mt-24'>
            <div>
                <h1>{count}</h1>
            </div>
            <div className=' flex flex-row justify-center mt-4 gap-2 mx-0'>
                <button onClick={() => setCount(count - 1)} className='btn bg-red-200 rounded p-2'>Decrement</button>
                <button onClick={() => setCount((prvState) => prvState + 1)} className='btn bg-green-200 rounded p-2'>Increment</button>
            </div>
        </div>
    );
};

export default Child;