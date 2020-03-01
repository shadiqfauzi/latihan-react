import React from 'react'
import './App.css'
import {Route} from  'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Failed from './pages/Failed'
import Method from './pages/Method'
import Register from './pages/Register'
import NavbarCustom from './components/NavbarCustom'

class App extends React.Component {
  render(){
    return(
      <div>
        <NavbarCustom />
        <Route path='/' component={Home} exact />
        <Route path='/login' component={Login} />
        <Route path='/failed' component={Failed} />
        <Route path='/method' component={Method} />
        <Route path='/register' component={Register} />
      </div>
    )
  }
  
}

export default App