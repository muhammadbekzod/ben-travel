import styled from 'styled-components';

export const Body = styled.div`
display: flex;
`

//Text, SubTitle, Title, Desc, ButtonWrapper, Button,Play
export const Text = styled.div`
display: flex;
flex-direction: column;
width: 630px;
height: 535px;
margin-top: 130px;
`


export const SubTitle = styled.div`
font-family: Poppins;
font-style: normal;
font-weight: bold;
font-size: 20px;
line-height: 30px;
text-transform: uppercase;
color: #DF6951;
`

export const Title = styled.div`
font-family: Volkhov;
font-style: normal;
font-weight: bold;
font-size: 84px;
line-height: 89px;
letter-spacing: -0.04em;
color: #181E4B;
`

export const Desc = styled.div`
font-family: Poppins;
font-style: normal;
font-weight: 500;
font-size: 16px;
line-height: 30px;
width: 477px;
height: 90px;
color: #5E6282;
`
export const ButtonWrapper = styled.div`
display: flex;
`
export const Button = styled.button`
width: 170px;
height: 60px;
background: #F1A501;
box-shadow: 0px 20px 35px rgba(241, 165, 1, 0.15);
border-radius: 10px;
cursor: pointer;
margin: 35px 45px 0 0;

`
export const ButtonText = styled.div`
font-family: Google Sans;
font-style: normal;
font-weight: 500;
font-size: 18px;
line-height: 23px;

text-align: center;
color: #FFFFFF;

`
export const Play = styled.div`
display: flex;
/* align-items: center;
justify-content: center; */
margin-top: 27px;
cursor: pointer;
`
export const PlayPic = styled.img`


`

export const PlayText = styled.div`
font-family: Poppins;
font-style: normal;
font-weight: 500;
font-size: 17px;
line-height: 25px;
color: #686D77;
margin-top: 27px;
margin-left: -10px;
cursor: pointer;
`

export const Background = styled.img`


`
