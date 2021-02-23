import React from 'react';

const handleHourChange = e => {
  console.log(e.target.value);
};
export const HourTimePicker = () => {
  return (
    <>
      <select name="filter" id="hour-filter" onChange={handleHourChange}>
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
        <option value="10">오전 10시</option>
        <option value="11">오전 11시</option>
        <option value="12">오전 12시</option>
        <option value="13">오후 1시</option>
        <option value="14">오후 2시</option>
        <option value="15">오후 3시</option>
        <option value="16">오후 4시</option>
        <option value="17">오후 5시</option>
        <option value="18">오후 6시</option>
        <option value="19">오후 7시</option>
        <option value="20">오후 8시</option>
        <option value="21">오후 9시</option>
        <option value="22">오후 10시</option>
        <option value="23">오후 11시</option>
        <option value="24">오후 12시</option>
      </select>
    </>
  );
};
