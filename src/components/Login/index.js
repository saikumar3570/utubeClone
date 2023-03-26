import {Component} from 'react'
import Cookies from 'js-cookie'
import {Redirect} from 'react-router-dom'
import {
  MainContainer,
  OuterContainer,
  Image,
  Label,
  Input,
  FormContainer,
  Button,
  Para,
} from './styledComponents'

class Login extends Component {
  state = {
    username: '',
    password: '',
    showType: 'password',
    errorMessage: '',
  }

  showPassword = event => {
    if (event.target.checked === true) {
      this.setState({showType: 'text'})
    } else {
      this.setState({showType: 'password'})
    }
  }

  changeUser = event => {
    this.setState({username: event.target.value})
  }

  changePassword = event => {
    this.setState({password: event.target.value})
  }

  loginForm = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const details = {username, password}
    const options = {method: 'POST', body: JSON.stringify(details)}
    const response = await fetch('https://apis.ccbp.in/login', options)
    const data = await response.json()
    if (response.ok === true) {
      const {history} = this.props
      const jwtToken = data.jwt_token
      Cookies.set('jwt_token', jwtToken, {expires: 30, path: '/'})
      history.replace('/')
    } else {
      const msg = data.error_msg
      this.setState({errorMessage: msg})
    }
  }

  render() {
    const {username, password, showType, errorMessage} = this.state
    const jwt = Cookies.get('jwt_token')

    if (jwt !== undefined) {
      //   const {history} = this.props
      return <Redirect to="/" />
    }

    return (
      <MainContainer>
        <OuterContainer>
          <Image
            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
            alt="website logo"
          />
          <FormContainer onSubmit={this.loginForm}>
            <Label htmlFor="username">USERNAME</Label>
            <Input
              type="text"
              placeholder="Username"
              id="username"
              value={username}
              onChange={this.changeUser}
            />
            <Label htmlFor="password">PASSWORD</Label>
            <Input
              type={showType}
              placeholder="Password"
              id="password"
              value={password}
              onChange={this.changePassword}
            />
            <div>
              <input type="checkbox" onChange={this.showPassword} id="check" />
              <label htmlFor="check">Show Password</label>
            </div>
            <Button type="submit">Login</Button>
          </FormContainer>
          {errorMessage !== '' && <Para>{errorMessage}</Para>}
        </OuterContainer>
      </MainContainer>
    )
  }
}

export default Login
