import React, { Component } from "react";
import { Container, Transition, Image, Visibility, Grid, Header, Divider, Segment, Responsive } from "semantic-ui-react";
import  {HomepageHeading }from '../HomeForest';
import About from '../LandingPage/TeamAboutCards';
import TypeWriterEffect from 'react-typewriter-effect';


export default class TransitionContainer8 extends Component {
    state = { visible: false }

    toggleVisibility = () => {
        console.log("Consider me toggled");
    this.setState({ visible: true });
    }


    render() {
        const { visible } = this.state

        return(
            <Container fluid >
            <Visibility
            once={false}
            onTopVisible={this.toggleVisibility}>
            <Transition visible={visible} animation='fade up' duration={4500}>
            <Segment 
                fluid 
                style={{ 
                    backgroundImage: `url(${require('../../assets/InsideAfropocene/odurInstallation.jpg')})`, 
                    backgroundSize: 'cover', 
                    minHeight: '100vh' }}>
                        <Grid  columns="equal" stackable  verticalAlign="middle"  >
                            <Grid.Row centered textAlign="center">
                                <Header 
                                    centered  
                                    as="h3" 
                                    style={{ 
                                        color: "white" ,  
                                        fontSize: window.screen.width <= Responsive.onlyMobile.maxWidth ? "4em" : "7.7em" , 
                                        paddingTop:"0.3em", 
                                        paddingBottom:"0em" }}
                                >
                                    {/* <b>Our Jouney So Far</b> */}
                                    <TypeWriterEffect
                                        textStyle={{ fontFamily: 'Helvetica', colour: '#FFFFFF',fontSize: window.screen.width <= Responsive.onlyMobile.maxWidth ? "4.5em" : "0.7em" }}
                                        startDelay={200}
                                        cursorColor="white"
                                        text="Our Jouney So Far"
                                        typeSpeed={50}
                                    />


                                </Header>
                            </Grid.Row>
                            <Grid.Column textAlign="center" width={6} style={{ padding: "5em" }}>
                                    <Image
                                        rounded
                                        size='medium'
                                        centered
                                        hidden={ window.screen.width <= Responsive.onlyMobile.maxWidth }
                                        src={require('../../assets/icons/visitors.png')}
                                    /> 
                                    <Image
                                        rounded
                                        size='small'
                                        centered
                                        hidden={ window.screen.width > Responsive.onlyMobile.maxWidth }
                                        src={require('../../assets/icons/visitors.png')}
                                    /> 
                                        <p style={{ 
                                            fontSize: window.screen.width <= Responsive.onlyMobile.maxWidth ? "3em" : "4.5em" , 
                                            textAlign:'center', 
                                            color: "white" }}>
                                            <b>3 Exhibitions</b>
                                        </p>                                         
                                    </Grid.Column>
                                <Grid.Column textAlign="center" width={5} style={{ padding: "5em" }}>
                                    <Image
                                            rounded
                                            size='medium'
                                            centered
                                            hidden={ window.screen.width <= Responsive.onlyMobile.maxWidth }
                                            src={require('../../assets/icons/network.png')}
                                            // src={require('../assets/bees-345628_1920.jpg')}
                                        />  
                                        <Image
                                            rounded
                                            size='small'
                                            centered
                                            hidden={ window.screen.width > Responsive.onlyMobile.maxWidth }
                                            src={require('../../assets/icons/network.png')}
                                            // src={require('../assets/bees-345628_1920.jpg')}
                                        />                                       
                                            <p style={{ 
                                                fontSize: window.screen.width <= Responsive.onlyMobile.maxWidth ? "3em" : "4.5em" ,  
                                                color: "white" }}>
                                            <b>5 Resident Artists</b>
                                        </p>
                                           
                                    </Grid.Column>
                                    <Grid.Column textAlign="center" width={5} style={{ padding: "5em" }}>
                                    <Image
                                        rounded
                                        size='medium'
                                        centered
                                        hidden={ window.screen.width <= Responsive.onlyMobile.maxWidth }

                                        src={require('../../assets/icons/musical-notes.png')}
                                        // src={require('../assets/bees-345628_1920.jpg')}
                                    />
                                     <Image
                                            rounded
                                            size='small'
                                            centered
                                            hidden={ window.screen.width > Responsive.onlyMobile.maxWidth }
                                            src={require('../../assets/icons/musical-notes.png')}
                                            // src={require('../assets/bees-345628_1920.jpg')}
                                    />  
                                        <p style={{ 
                                            fontSize: window.screen.width <= Responsive.onlyMobile.maxWidth ? "3em" : "4.5em" , 
                                            color: "white" }}>
                                            <b>1 Live Music Show</b>
                                        </p>
                                        
                                    </Grid.Column>  
                        </Grid>
            </Segment>
            </Transition>
            </Visibility>

            </Container>


        );
    };
}