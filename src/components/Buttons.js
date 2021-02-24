import React from 'react';
import { useDispatch } from 'react-redux';
import { closeDialog } from '../store/modules/dialog';

export const Buttons = () => {
  const dispatch = useDispatch();
  const completeBtnClick = () => {
    dispatch(closeDialog());
  };
  return (
    <button className="button" onClick={completeBtnClick}>
      완료
    </button>
  );
};
