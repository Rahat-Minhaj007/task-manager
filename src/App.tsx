import React from 'react';
import logo from './logo.svg';
import './App.scss';
import Tasks from './components/Tasks/Tasks';

function App() {
  return (
    <div className="main">
     <h1 className="text-center p-5">MY DAILY WORK LIST</h1>
     <Tasks/>
    </div>
  );
}

export default App;
