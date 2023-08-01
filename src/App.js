import React from 'react';
import AddPage from './AddPage';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import { Navigate } from 'react-router-dom';
function App() {
  return (
    <>
      <Routes>
        <Route path="/AddPage" element={<AddPage />}></Route>
      </Routes>
      <div className="App">
        <div className="screen">
          <div className="title">
            <h1>타임테이블</h1>
          </div>

          <div className="tt-grid">
            <Gen date="a" />
            <Gen date="b" />
            <Gen date="c" />
            <Gen date="d" />
            <Gen date="e" />
          </div>
        </div>
      </div>
    </>
  );
}

function Gen(props) {
  const times = [
    '9시~10시',
    '10시~11시',
    '11시~12시',
    '12시~13시',
    '13시~14시',
    '14시~15시',
    '15시~16시',
    '16시~17시',
    '17시~18시',
  ];
  function hello() {
    alert('1');
  }

  return (
    <>
      {times.map((con, idx) => (
        <div
          className="element"
          onClick={Navigate('/AddPage')}
          id={props.date + idx}
        >
          {con}
        </div>
      ))}
    </>
  );
}
export default App;
