import React, { Component } from 'react'
import {Body, Text, SubTitle, Title, Desc, ButtonWrapper, Button,Play,
    ButtonText, PlayPic, PlayText} from './bodyStyle'
import play from './img/Playbutton.png';

export default class body extends Component {
    render() {
        return (
          <Body>
              <Text>
                  <SubTitle>Best Destinations around the world</SubTitle>
                <Title>Travel, enjoy and live a new and full life</Title>
                <Desc>Built Wicket longer admire do barton vanity itself do in it.
                     Preferred to sportsmen it engrossed listening. Park gate sell 
                     they west hard for the.</Desc>
                <ButtonWrapper>
                    <Button>
                        <ButtonText>Find out more</ButtonText>
                    </Button>
                    <Play>
                        <PlayPic src={play}/>
                        <PlayText>Play Demo</PlayText>
                    </Play>
                </ButtonWrapper>
              </Text>
             
          </Body>
        )
    }
}
