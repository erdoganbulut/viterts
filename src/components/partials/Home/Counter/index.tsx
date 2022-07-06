import { Button, InputNumber } from 'antd';
import React from 'react';

import { useAppSelector, useAppDispatch } from '../../../../store/hooks';
import {
  setAmount,
  incrementAsync,
  incrementIfOdd,
  selectCount,
} from '../../../../store/slices/counter.slice';

const Counter = () => {
  const count = useAppSelector(selectCount);
  const dispatch = useAppDispatch();

  return (
    <div>
      <InputNumber value={count} onChange={(value: number) => dispatch(setAmount(value))} />
      <Button onClick={() => dispatch(incrementAsync(1))}>Add Async</Button>
      <Button onClick={() => dispatch(incrementIfOdd(1))}>Add If Odd</Button>
    </div>
  );
};

export default Counter;
