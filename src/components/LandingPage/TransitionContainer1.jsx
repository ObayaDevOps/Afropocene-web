import React, { Component } from "react";
import { Container, Transition, Header, Visibility, Grid, Image, Responsive } from "semantic-ui-react";
import  {HomepageHeading }from '../HomeForest';
import AfricanFontComponent from "./AfricanFontComponent";
import TypeWriterEffect from 'react-typewriter-effect';


export default class TransitionContainer1 extends Component {
    constructor(props) {
        super(props);
        this.state = { visible: false };
    }

    toggleVisibility = () => {
        console.log("Consider me toggled");
        console.log(Responsive.onlyMobile.maxWidth);
    this.setState({ visible: true });
        // this.setState((prevState) => ({ visible: !prevState.visible }))
    }

    // componentDidMount() {
    //     this.toggleVisibility();
    // }

    //make it so that when it is scrolled past it is hidden again

    render() {
        const { visible } = this.state

        return(
            <Container>
                <Visibility
                    once={false}
                    onTopVisible={this.toggleVisibility}>
                    <Transition visible={visible} animation='fade down' duration={3000}>
                        <Grid container stackable verticalAlign="middle" style={{ minHeight: '110vh' }} >
                            <Grid.Row centered textAlign="center">
                                <Header 
                                    as="h1" 
                                    textAlign="center"
                                    style={{ 
                                        fontSize: window.screen.width <= Responsive.onlyMobile.maxWidth ? "4.5em" : "7.7em" , 
                                        paddingTop: window.screen.width <= Responsive.onlyMobile.maxWidth ? "1em" : "0.7em", 
                                        paddingBottom: window.screen.width <= Responsive.onlyMobile.maxWidth ? "0.5em" : "0.7em", 
                                        color: "#000000",

                                    }}>

                                    <TypeWriterEffect
                                        textStyle={{ fontFamily: 'Helvetica', colour: '#FFFFFF',fontSize: window.screen.width <= Responsive.onlyMobile.maxWidth ? "4.5em" : "1.7em" }}
                                        startDelay={150}
                                        cursorColor="white"
                                        text="What We Do."
                                        typeSpeed={100}
                                    />
                                </Header>
                            </Grid.Row>
                                <Grid.Column  mobile={16} tablet={16} computer={6} >
                                <Container  >

                                <Header as="h2"  style={{ fontSize: "5.1em", color: "#000000" }}>
                                    We Write New African Narratives
                                    </Header>
                                    <p style={{ fontSize: "1.33em" }}>
                                    We are afrofuturists interested in exploring the cultural aesthetics, philosophies of science and history that are borne of the developing intersection of African/Africana diaspora culture with technology.                                     
                                    </p>
                                    <p style={{ fontSize: "1.33em" }}>
                                        Our mission is to help ... to create ... to inspire
                                    </p>
                                    </Container>
                                </Grid.Column>
                                <Grid.Column mobile={16} tablet={16} computer={10} >
                                    <Image
                                        rounded
                                        fluid
                                        src={require('../../assets/InsideAfropocene/afropocene-studio2.jpg')}
                                        style = {{
                                            paddingBottom : window.screen.width <= Responsive.onlyMobile.maxWidth ? "3em" : "0em"
                                        }}
                                    />
                                </Grid.Column>
                        </Grid>
                    </Transition>
                </Visibility>
            </Container>

        );
    };
}