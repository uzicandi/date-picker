import React from 'react';

export const FirstPage = () => {
  // dispatch 하면 Dialog뜨게
  const handleDialogClick = () => {
    console.log('click');
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
