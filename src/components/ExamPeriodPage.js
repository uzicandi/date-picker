import React from 'react';
import { ExamPeriodList } from './ExamPeriodList';
import { ExamPeriodHead } from './ExamPeriodHead';

export const ExamPeriodPage = () => {
  return (
    <>
      <div className="DimmedBackground">
        <section className="DialogBody">
          <ExamPeriodHead />
          <ExamPeriodList />
        </section>
      </div>
    </>
  );
};
