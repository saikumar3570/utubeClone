import {Component} from 'react'
import Cookies from 'js-cookie'
import {Redirect} from 'react-router-dom'
import Header from '../Header/index'
// import ThemeContext from '../../context/context'

class Home extends Component {
  render() {
    const jwt = Cookies.get('jwt_token')
    if (jwt === undefined) {
      return <Redirect to="/login" />
    }
    return (
      <div>
        <Header />
      </div>
    )
  }
}
export default Home
