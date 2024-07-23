// src/features/counter/Counter.js

import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment } from './counterSlice';

const Counter = () => {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div>
      <div>
        <button onClick={() => dispatch(increment())}>
          Increment
        </button>
      </div>
      <div>
        <span>{count}</span>
      </div>
    </div>
  );
};

export default Counter;
