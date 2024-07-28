import styled from 'styled-components'
import { Button } from '../../../components'

export const Container = styled.div`
width: 100%;
height: 100%;
display: flex;
justify-content: center;
align-items: center;

form{
    background-color: #565656;
    border-radius: 10px;
    padding: 30px;
}
 
`
export const Label = styled.p`
 font-size: 15px;
 color: #ffffff;
 margin-bottom: 3px;
`
export const Input = styled.input`
 height: 40px;
 border-radius: 10px;
 background: #ffffff;
 border: none;
 box-shadow: 0px 4px 14px rgba(0,0,0,0.1);
 margin-bottom: 25px;
 width: 100%;

`

export const ButtonStyles = styled(Button)`
width: 100%;
margin-top: 25px;
`

