import React, { useRef, useEffect, useState, useCallback } from 'react';
import { ExamPeriodList } from './ExamPeriodList';
import { ExamPeriodHead } from './ExamPeriodHead';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { closeDialog } from '../store/modules/dialog';

export const ExamPeriodPage = () => {
  const modalEl = useRef();
  const dispatch = useDispatch();
  const visible = useSelector(state => state.dialog.open);

  const handleClickOutside = useCallback(
    e => {
      if (visible && e.target.className == 'DimmedBackground') {
        dispatch(closeDialog());
      }
    },
    [visible]
  );

  useEffect(() => {
    document.addEventListener('click', e => {
      handleClickOutside(e);
    });
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [visible]);

  if (!visible) {
    return null;
  }
  return (
    <>
      <div className="DimmedBackground">
        <section id="DialogBody" className="DialogBody" ref={modalEl}>
          <ExamPeriodHead />
          <ExamPeriodList />
        </section>
      </div>
    </>
  );
};
