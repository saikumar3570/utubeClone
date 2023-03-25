import styled from 'styled-components'

export const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`
export const OuterContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  width: 300px;
`

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
`

export const Image = styled.img`
  height: 30px;
  width: 110px;
  align-self: center;
  margin-bottom: 15px;
`
export const Label = styled.label`
  color: #909090;
  font-family: 'Roboto';
  font-size: 15px;
  margin-bottom: 3px;
`
export const Input = styled.input`
  border: 1px solid #7e858e;
  height: 30px;
  width: 250px;
  margin-bottom: 10px;
  border-radius: 5px;
  padding: 5px;
`
export const Button = styled.button`
  background-color: #3b82f6;
  color: white;
  text-align: center;
  border: transparent;
  margin-top: 5px;
  padding: 10px;
  border-radius: 10px;
  cursor: pointer;
`
export const Para = styled.p`
  color: red;
`
