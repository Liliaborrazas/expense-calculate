import './App.css';
import {HashRouter as Router, Route, Switch} from 'react-router-dom';
import Header from './components/header/Header';
import Home from './components/main/home/Home';
import {deleteLocalStorage} from './servises/persons';
import AddExpense from './components/main/addExpenses/AddExpense';
import Footer from './components/footer/Footer';
import AddPerson from './components/main/addPerson/AddPerson';

function App() {

// const localStorageRemuve = getPersons();
// const remover = JSON.stringify(localStorageRemuve)

  return (
    <Router>
       <header>
         <Header title='Expense calculate' onClick={()=>deleteLocalStorage()}/>
       </header>
      <Switch>
      <main className='page__main'>
        <Route exact path='/' component={Home}/>
        <Route path="/add-person" component={AddPerson} />
        <Route path="/add-expense" component={AddExpense} />
        </main>
      </Switch>
      <footer>
        <Footer/>
      </footer>
    </Router>
  );
}

export default App;
