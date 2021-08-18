import './App.css';
import {Route,Switch} from 'react-router-dom';
import HomePage from './pages/homepage/HomePage';


const HatsPage = () => {
  return(
  <div>
    <h1>HATS</h1>
  </div>
  )
}

function App() {
  return (
    //component we want to render that page
    //path is the URL
    <div>
      <Switch>
      <Route exact path='/' component={HomePage} /> 
      <Route path='/shop/hats' component={HatsPage} /> 
      </Switch>
    </div>
  );
}

export default App;
