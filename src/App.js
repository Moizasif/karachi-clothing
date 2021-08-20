import './App.css';
import {Route,Switch} from 'react-router-dom';
import HomePage from './pages/homepage/HomePage';
import ShopPage from './pages/shop/Shop';
import Header from './components/header/Header';
import SignInAndSignUp from './pages/sign-in-and-sign-up/sign-in-and-sign-up';
import {auth} from './firebase/firebase.utils'
import React from 'react';



class App extends React.Component{
  constructor(props) {
    super(props);
    this.state={
      currentUser: null
    }
  }

  unsubscribeFromAuth = null

  componentDidMount() {
    this.unsubscribeFromAuth =  auth.onAuthStateChanged(user => {
      this.setState({ currentUser : user})
      console.log(user)
    })
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }


  render()
  {
    return (
      //component we want to render that page
      //path is the URL
      <div>
        <Header currentUser = {this.state.currentUser}/>
        <Switch>
        <Route exact path='/' component={HomePage} /> 
        <Route path='/shop' component={ShopPage} /> 
        <Route path='/signin' component={SignInAndSignUp} /> 
        </Switch>
      </div>
    );
  }
 
}

export default App;
