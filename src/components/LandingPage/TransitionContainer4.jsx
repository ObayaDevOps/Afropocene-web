import React, { Component } from "react";
import { Container, Transition, Header, Visibility, Grid, Segment, Divider, Responsive, Button, Icon } from "semantic-ui-react";
import  {HomepageHeading }from '../HomeForest';
import TeamAboutCards from '../LandingPage/TeamAboutCards';


export default class TransitionContainer4 extends Component {
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
                    <Transition visible={visible} animation='browse' duration={1500}>
                        <Grid container  stackable verticalAlign="middle" style={{ minHeight: '100vh' }} >
                            <Segment style={{ padding: "0em" }} vertical>
                                <Grid celled="internally" columns="equal" stackable>
                                    <Grid.Row textAlign="center">
                                    <Grid.Column style={{ paddingBottom: "7em", paddingTop: "10em" }}>
                                        <Header 
                                            as="h3" 
                                            style={{ 
                                                fontSize: window.screen.width <= Responsive.onlyMobile.maxWidth ? "4.5em" : "7.7em" , 
                                                color: "#000000" }}>
                                            Meet the Team
                                        </Header>
                                        <Divider hidden />
                                        <TeamAboutCards />
                                        <Divider hidden />
                                        <Button animated size='big' as='a' href='/about_us'> 
                                        <Button.Content visible>More about Us</Button.Content>
                                            <Button.Content hidden>
                                                <Icon name='arrow right' />
                                            </Button.Content>                                        
                                        </Button>
                                    
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