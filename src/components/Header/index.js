import {IoMdMoon} from 'react-icons/io'
import {BsFillBrightnessHighFill} from 'react-icons/bs'
import Popup from 'reactjs-popup'
import {withRouter} from 'react-router-dom'
import Cookies from 'js-cookie'
import ThemeContext from '../../context/context'
import {
  MainContainer,
  LogoImage,
  LocalContainer,
  ModeButton,
  Profile,
  LogoutButton,
  ButtonsContainer,
} from './styledComponents'
import './index.css'

const Header = props => (
  <ThemeContext.Consumer>
    {value => {
      const {lightMode, changeMode} = value

      const changeDisplay = () => {
        changeMode()
        console.log(lightMode)
      }

      const Logout = () => {
        Cookies.remove('jwt_token')
        const {history} = props
        history.replace('./login')
      }

      return (
        <MainContainer light={lightMode} data-testid="home">
          {lightMode && (
            <img
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
              alt="website logo"
              className="logoImage"
            />
          )}
          {!lightMode && (
            <img
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png"
              alt="website logo"
              className="logoImage"
            />
          )}
          <LocalContainer>
            <button
              type="button"
              onClick={changeDisplay}
              className="modeButton"
            >
              {lightMode ? (
                <IoMdMoon className="Icon" />
              ) : (
                <BsFillBrightnessHighFill className="Sun" />
              )}
            </button>
            <Profile
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
              alt="profile"
            />
            <Popup modal trigger={<LogoutButton>Logout</LogoutButton>}>
              {close => (
                <div className="Modal">
                  <p>Are you sure, you want to exit?</p>
                  <ButtonsContainer>
                    <button type="button" className="Cancel" onClick={close}>
                      Cancel
                    </button>
                    <button type="button" className="Confirm" onClick={Logout}>
                      Confirm
                    </button>
                  </ButtonsContainer>
                </div>
              )}
            </Popup>
          </LocalContainer>
        </MainContainer>
      )
    }}
  </ThemeContext.Consumer>
)

export default withRouter(Header)
