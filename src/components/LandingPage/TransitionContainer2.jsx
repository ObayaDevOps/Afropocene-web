import React, { Component } from "react";
import { Container, Transition, Header, Visibility, Grid, Image, Divider, Responsive } from "semantic-ui-react";
import  {HomepageHeading }from '../HomeForest';


export default class TransitionContainer2 extends Component {
    state = { visible: false }

    toggleVisibility = () => {
        console.log("Consider me toggled");
    this.setState({ visible: true });
    }


    render() {
        const { visible } = this.state

        return(
            <Container>
                <Visibility
                    once={false}
                    onTopVisible={this.toggleVisibility}>
                    <Transition visible={visible} animation='fade up' duration={4500}>
                        <Grid container fluid stackable verticalAlign="middle" style={{ minHeight: '80vh' }} >
                                <Grid.Column mobile={16} tablet={16} computer={6}>
                                <Container>
                                    <Header as="h2" style={{ fontSize: "5.1em", color: "#000000" }}>
                                    We Provide Space for Emerging Artists
                                    </Header>
                                    <p style={{ fontSize: "1.33em" }}>
                                    A "Co-Arts" space for artists, researchers, thinkers, experimenters, developers & do-ers. We provide space and community for any and all explorers of African futures.             
                                    </p>
                                    </Container>

                                </Grid.Column>
                                <Grid.Column floated="right" mobile={16} tablet={16} computer={10}>
                                    <Image
                                        rounded
                                        fluid
                                        src={require('../../assets/InsideAfropocene/afropocene-OdurAssistant.jpg')}
                                        // style = {{
                                        //     paddingBottom : window.screen.width <= Responsive.onlyMobile.maxWidth ? "0em" : "0.1em"
                                        // }}
                                    />
                                </Grid.Column>
                            <Divider hidden  />
                        </Grid>
                    </Transition>
                </Visibility>
            </Container>
        );
    };
}