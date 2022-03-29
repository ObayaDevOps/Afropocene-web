import React, { Component } from "react";
import FooterContainer from '../FooterContainer';
import { Container, Transition, Header, Visibility, Grid, Image, Responsive, Divider } from "semantic-ui-react";

// Here we will outline, the 'Honey Drop' buisness model.
//               We produce small batches of honey, and then we only select the finest white-capped comb to bottle.
//               Due to this, when we sell out, we sell out. All of our honey will be single origin, allowing you to experince the taste nature in that particular region

//               Sign up to our email or our whats app lists to get notified of when we harvest and sell !

const PageContent = () => (
  <div style={{minHeight: "100vh"}}>
          <div>
        <Container>
            <Transition visible={true} animation='fade down' duration={2500}>
                <Grid container stackable verticalAlign="middle" style={{ minHeight: '100vh' }} >
                    <Grid.Row centered textAlign="center" style={{ paddingBottom: "1em", paddingTop: "7em" }} >
                        <Header 
                            as="h1" 
                            textAlign="center"
                            style={{ 
                                fontSize: window.screen.width <= Responsive.onlyMobile.maxWidth ? "4.5em" : "7.7em" , 
                                paddingTop: window.screen.width <= Responsive.onlyMobile.maxWidth ? "2em" : "0.7em", 
                                paddingBottom: window.screen.width <= Responsive.onlyMobile.maxWidth ? "0.5em" : "0.7em", 
                                color: "#bf9000",

                            }}>
                            {/* Hi, I'm Obaya <span role="img" aria-label="waving_hand">👋</span> */}
                            Hi, I'm Obaya <span role="img" aria-label="bee">🐝</span>


                        </Header>
                    </Grid.Row>

                    <Grid.Column  mobile={16} tablet={16} computer={6} >
                        <Container >
                        <Header as="h2"  style={{ fontSize: "3.1em", color: "#bf9000" }}>
                            A Little Bit About Me
                            </Header>

                            <p style={{ fontSize: "1.33em" }}>
                            I'm a Computer Scientist by training and I'm one of the co-founders of Humble Beeing
                            </p>
                            <p style={{ fontSize: "1.33em" }}>
                                In June of 2021, in the midst of a Global Pandemic, I quit my job as a Software Engineer at an Investment Bank in London and decided to move back home (Kampala, Uganda) and pursue my passion of full-time beekeeping !
                                I completed a beekeeping training course at Hackney City arm but still, a tiny bit of a risk :)
                            </p>
                            <p style={{ fontSize: "1.55em" }}>
                              A Computer Scientist Beekeeper ? Bit of a waste of skills, No* ? <span role="img" aria-label="robot">🤖</span>
                            </p>
                            <p style={{ fontSize: "1.33em" }}>
                              Not at all, I've been interested in Systems since I can remember, this lead me down a career path dealing with large distributed systems, but the first systems I ever marvelled at were all natural.
                            </p>
                            <p style={{ fontSize: "1.33em" }}>
                              We used to knock over termite mounds on the playground and watch them. I saw them all collect their eggs and descend deeper into the ground. I used to wonder, How can they all know what to do at the same time, when I, a distinguished and most-excellent seven year old human, don't know what I'm doing most of the time ?
                            </p>
                            <p style={{ fontSize: "1.33em" }}>
                              I'm still looking for answers, and while looking I stumbled upon what may be the most incredible system on the planet. The Honeybee Hive. A spatially-distributed and decentralised super-organism that creates it's own food.
                            </p>
                            <p style={{ fontSize: "1.33em" }}>
                              It might just sound like an insect-nerd's rambling but see for yourself !
                              - Democratic Decision Making, - Honeybee methods of communication (Bee dance, physical, highly local; Queen phermones, chemical, widespread, Bee running to encourage swarm, physical)
                                </p>
                                <p style={{ fontSize: "1.33em" }}>
                                  I'm also not the first to find these creatures to be amazing, if we look back through history, the honey bee is prominent across ages and cultures. there's a whole book in the Quran called the Bee, The land of milk and honey in the bible, the bee being the symbol of the king of egypt,
                                 </p>
                                 <p style={{ fontSize: "1.33em" }}>
                                  I'm also not the first to find these creatures to be amazing, if we look back through history, the honey bee is prominent across ages and cultures. there's a whole book in the Quran called the Bee, The land of milk and honey in the bible, the bee being the symbol of the king of egypt,
                                 </p>
                                 <p style={{ fontSize: "0.83em" }}>
                                   *My manager's actual comments  <span role="img" aria-label="lmao_sweat">😅</span>
                                 </p>
                            </Container>
                        </Grid.Column>
                        <Grid.Column mobile={16} tablet={16} computer={10} >
                            <Image
                                rounded
                                fluid
                                src={require('../../assets/teamPhotos/ObiPFP.png')}
                                style = {{
                                    paddingBottom : window.screen.width <= Responsive.onlyMobile.maxWidth ? "3em" : "0em"
                                }}
                            />
                      </Grid.Column>                  
                </Grid>
            </Transition>
    </Container>
    </div>    
     </div>

);

class AboutUsPageComponent extends Component {
    render() {
      return (
        <div>
        <PageContent />
        <Divider hidden />
        <FooterContainer />
        </div>
      );
    }
  }
   
  export default AboutUsPageComponent;