import React from 'react';
import './App.css';
import Header from './components/Header/Header';

function App() {
  return (
    <>
     <Header title='Expense calculate' onClickFn={()=> {console.log('hola')}}/>
    </>
  );
}

export default App;
