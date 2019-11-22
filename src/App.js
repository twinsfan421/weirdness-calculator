import React from 'react';
import { BrowserRouter, Switch, Route} from 'react-router-dom'
import Home from './components/home/Home'
import Navbar from './components/layout/Navbar';
import Results from './components/results/Results';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/results' component={Results} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
