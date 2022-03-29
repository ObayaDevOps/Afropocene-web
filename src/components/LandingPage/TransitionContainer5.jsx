import React, { Component } from "react";
import { Container, Transition, Header, Visibility, Grid, Segment, Divider } from "semantic-ui-react";
import  {HomepageHeading }from '../HomeForest';
import About from '../LandingPage/TeamAboutCards';
import MapEmbedContainer from "../LandingPage/MapContainer";

export default class TransitionContainer5 extends Component {
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
                    <Transition visible={visible} animation='fade up' duration={1500}>
                        <Grid container  stackable verticalAlign="middle">   
                        <Segment style={{ padding: "0em" }} vertical>
                            <Grid celled="internally" columns="equal" stackable>
                                <Grid.Row textAlign="center">
                                <Grid.Column style={{ paddingBottom: "5em", paddingTop: "5em" }}>
                                    <Header as="h2" style={{ fontSize: "2em", color: "#000000" }}>
                                    Would You Like To Visit the Studio/Lab Space ? 
                                    </Header>
                                    <p style={{ fontSize: "1.75em", color: "#000000" }}>
                                        We are based in Kampala, Uganda! 
                                    </p>
                                    <p style={{ fontSize: "1.75em", color: "#000000" }}>
                                        2nd and 3rd Floor, 'Tools and Machinery' building in Kabalagala
                                    </p>
                                    <p style={{ fontSize: "1.75em", color: "#000000" }}>
                                        <MapEmbedContainer></MapEmbedContainer>
                                    </p>
                                </Grid.Column>
                                </Grid.Row>
                            </Grid>
                        </Segment>
                        </Grid>
                    </Transition>
                </Visibility>
            </Container>

        );
    };
}