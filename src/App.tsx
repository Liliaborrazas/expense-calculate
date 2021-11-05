import React from 'react';
import './App.css';
import {HashRouter as Router, Route, Switch} from 'react-router-dom';
import Header from './components/header/Header';
import Home from './components/main/home/Home';
import {deletePerson_LocalStorage,getPersons} from './interfaces/PersonInterface'
import AddExpense from './components/main/addExpenses/AddExpense';
import Footer from './components/footer/Footer';

function App() {

const localStorageRemuve = getPersons();
const remover = JSON.stringify(localStorageRemuve)

  return (
    <Router>
       <header>
         <Header title='Expense calculate' onClick={()=>deletePerson_LocalStorage(remover)}/>
       </header>
      <Switch>
      <main className='page__main'>
        <Route exact path='/' component={Home}/>
        <Route path="/add-expense" component={AddExpense} />
        </main>
      </Switch>
        <Footer/>
    </Router>
  );
}

export default App;
