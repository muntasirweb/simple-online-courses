import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header/Header';
import Courses from './components/Courses/Courses';

function App() {
  //console.log(courses);
  return (
    <div  className="container">
      <Header></Header>
      <Courses></Courses>
    </div>
  );
}

export default App;
