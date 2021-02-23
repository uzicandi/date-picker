import React from 'react';

const handleMinuteChange = e => {
  console.log(e.target.value);
};

export const MinuteTimePicker = () => {
  return (
    <>
      <select name="filter" id="minute-filter" onChange={handleMinuteChange}>
        <option value="0">오전 0시</option>
        <option value="1">오전 1시</option>
        <option value="2">오전 2시</option>
        <option value="3">오전 3시</option>
        <option value="4">오전 4시</option>
        <option value="5">오전 5시</option>
        <option value="6">오전 6시</option>
        <option value="7">오전 7시</option>
        <option value="8">오전 8시</option>
        <option value="9">오전 9시</option>
      </select>
    </>
  );
};
