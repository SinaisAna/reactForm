import React from 'react';
import Admin from './components/Admin.jsx'
import Inicio from './components/Inicio.jsx'
import Login from './components/Login.jsx'
import Menu from './components/Menu.jsx'
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'

function App() {
  return (
    <div className='container'>
      <Router>
        <Menu></Menu>
        <Switch>
          <Route exact path='/' component={Inicio}></Route>
          <Route path='/admin' component={Admin}></Route>
          <Route path='/login' component={Login}></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
