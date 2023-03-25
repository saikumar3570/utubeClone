import {Component} from 'react'
import {Route, Switch} from 'react-router-dom'
import Login from './components/Login'
import ProtectedRoute from './components/ProtectedRoute'
import Home from './components/Home'
import Themecontext from './context/context'

class App extends Component {
  state = {lightMode: true}

  changeMode = () => {
    this.setState(prev => ({lightMode: !prev.lightMode}))
  }

  render() {
    const {lightMode} = this.state
    return (
      <Themecontext.Provider value={{lightMode, changeMode: this.changeMode}}>
        <Switch>
          <Route exact path="/login" component={Login} />
          <ProtectedRoute exact path="/" component={Home} />
        </Switch>
      </Themecontext.Provider>
    )
  }
}

export default App
