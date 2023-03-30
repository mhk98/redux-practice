import React, { useReducer } from 'react';

function Counter() {
    const initialState = 0;

    const reducer = (state, action) => {
        console.log('action', action);
        if (action.type === 'INCREMENT') {
            return state + action.payload.count
        } else if (action.type === 'DECREMENT') {
            return state - action.payload.count
        }
    }

    const [state, dispatch] = useReducer(reducer, initialState)
    return (
        <div className='mt-24'>
            <div>
                <h1>{state}</h1>
            </div>
            <div className=' flex flex-row justify-center mt-4 gap-2 mx-0'>
                <button className='btn bg-red-200 rounded p-2' onClick={() => dispatch({ type: "DECREMENT", payload: { count: 5 } })}>Decrement</button>
                <button className='btn bg-green-200 rounded p-2' onClick={() => dispatch({ type: "INCREMENT", payload: { count: 5 } })}>Increment</button>
            </div>
        </div>
    );
};

export default Counter;