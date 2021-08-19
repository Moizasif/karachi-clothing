import './App.css';
import {Route,Switch} from 'react-router-dom';
import HomePage from './pages/homepage/HomePage';
import ShopPage from './pages/shop/Shop';
import Header from './components/header/Header';
import SignInAndSignUp from './pages/sign-in-and-sign-up/sign-in-and-sign-up';



function App() {
  return (
    //component we want to render that page
    //path is the URL
    <div>
      <Header />
      <Switch>
      <Route exact path='/' component={HomePage} /> 
      <Route path='/shop' component={ShopPage} /> 
      <Route path='/signin' component={SignInAndSignUp} /> 
      </Switch>
    </div>
  );
}

export default App;
