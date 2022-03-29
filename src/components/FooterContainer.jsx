import React, { Component } from "react";
import { Container, Transition, Header, Visibility, Grid, List, Segment, Button } from "semantic-ui-react";
import  {HomepageHeading }from './HomeForest';

export default class TransitionContainer1 extends Component {
    state = { visible: false }

    toggleVisibility = () => {
        console.log("Consider me toggled");
    this.setState({ visible: true });
    }


    render() {
        const { visible } = this.state

        return(
            <Container fluid>
                <Visibility
                    once={false}
                    onTopVisible={this.toggleVisibility}>
                    <Segment inverted vertical style={{ padding: "5em 0em" }}>
                        <Container>
                            <Grid divided inverted stackable>
                            <Grid.Row>
                                <Grid.Column width={3}>
                                <Header inverted as="h4" content="About" />
                                <List link inverted>
                                    <List.Item as="a" href='/about_us'>About Us</List.Item>
                                    <List.Item as="a" href='/contact'>Contact Us</List.Item>
                                </List>
                                </Grid.Column>
                                <Grid.Column width={3}>
                                <Header inverted as="h4" content="Services" />
                                <List link inverted>
                                    <List.Item as="a">Hire our Space</List.Item>
                                    <List.Item as="a">Sumbit Art</List.Item>
                                </List>
                                </Grid.Column>
                                <Grid.Column width={7}>
                                <Header as="h4" inverted>
                                    Get Involved !
                                </Header>
                                <p>
                                    Reshaping Narratives. Building The Future.
                                </p>
                                </Grid.Column>
                            </Grid.Row>
                            </Grid>
                        </Container>
                    </Segment>
                    </Visibility>
                    </Container>

        );
    };
}