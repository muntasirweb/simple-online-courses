import React from 'react';
import logo from './logo.svg';
import './App.css';
import courses from './fake-data/courses.js'
import Header from './components/Header/Header';

function App() {
  console.log(courses);
  return (
    <div>
      <Header></Header>
    </div>
  );
}

export default App;
