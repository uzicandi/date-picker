import React from 'react';
import { DateTimePicker } from './DateTimePicker';
import { HourTimePicker } from './HourTimePicker';
import { MinuteTimePicker } from './MinuteTimePicker';

export const ExamTimeSettings = () => {
  return (
    <>
      <label>응시 시작일</label>
      <DateTimePicker />
      <HourTimePicker />
      <MinuteTimePicker />
    </>
  );
};
