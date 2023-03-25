import {Component} from 'react'
import {withRouter} from 'react-router-dom'
import Header from '../Header/index'
// import ThemeContext from '../../context/context'

class Home extends Component {
  render() {
    return (
      <div>
        <Header />
      </div>
    )
  }
}
export default withRouter(Home)
