import React from 'react';
import { useDispatch } from 'react-redux';
import { openDialog } from '../store/modules/dialog';

export const FirstPage = () => {
  const dispatch = useDispatch();

  // dispatch 하면 Dialog뜨게
  const handleDialogClick = () => {
    dispatch(openDialog());
  };

  return (
    <>
      <div className="PageBody">
        <button className="openDialogBtn" onClick={handleDialogClick}>
          설정 대화상자 열기
        </button>
      </div>
    </>
  );
};
