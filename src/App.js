import './App.css';
import {Route,Switch} from 'react-router-dom';
import HomePage from './pages/homepage/HomePage';
import ShopPage from './pages/shop/Shop';



function App() {
  return (
    //component we want to render that page
    //path is the URL
    <div>
      <Switch>
      <Route exact path='/' component={HomePage} /> 
      <Route path='/shop' component={ShopPage} /> 
      </Switch>
    </div>
  );
}

export default App;
