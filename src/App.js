import React, { Component } from 'react';
import './App.scss';
import { FirstPage } from './components/FirstPage';
import { ExamPeriodPage } from './components/ExamPeriodPage';

function App() {
  return (
    <>
      <FirstPage />
      <ExamPeriodPage />
    </>
  );
}

export default App;
