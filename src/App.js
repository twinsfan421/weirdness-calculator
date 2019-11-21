import React from 'react';
import { BrowserRouter, Switch, Route} from 'react-router-dom'
import Home from './components/home/Home'
import Navbar from './components/layout/Navbar';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path='/' component={Home} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
