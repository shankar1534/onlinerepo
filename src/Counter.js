// src/features/counter/Counter.js

import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment } from './counterSlice';

const Counter = () => {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div style={{margin:'auto',width:'200px',border:'2px solid green',display:'flex',alignItems:'center',justifyContent:'center',flexDirection:'column'}}>
      <div style={{fontSize:'40px'}}>
        <button onClick={() => dispatch(increment())}>
         Increment
        </button>
      </div>
      <div>
        <span style={{fontSize:'40px'}}>{count}</span>
      </div>
    </div>
  );
};

export default Counter;
