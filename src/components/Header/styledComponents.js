import styled from 'styled-components'

export const MainContainer = styled.div`
  display: flex;
  padding: 15px;
  justify-content: space-between;
  background-color: ${props => (props.light ? 'white' : '#181818')};
`
export const LocalContainer = styled.div`
  display: flex;
  width: 300px;
  justify-content: space-evenly;
`

export const LogoImage = styled.img`
  height: 25px;
  width: 100px;
`
export const ModeButton = styled.button`
  border: transparent;
  background-color: transparent;
  cursor: pointer;
`
export const Profile = styled.img`
  height: 35px;
  width: 35px;
`

export const LogoutButton = styled.button`
  border: 1px solid #3b82f6;
  color: #3b82f6;
  height: 30px;
  width: 80px;
  cursor: pointer;
`
export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: space-between;
`
