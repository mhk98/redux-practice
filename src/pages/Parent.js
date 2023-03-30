import React, { useContext, useState } from 'react';
import { COUNTER_CONTEXT } from '../App';
import Child from './Child';

function Parent() {
    const { setCount, count } = useContext(COUNTER_CONTEXT)
    return (
        <div>
            <div>
                <h1>Parent</h1>
                <h1>{count}</h1>
            </div>

        </div>
    );
};

export default Parent;