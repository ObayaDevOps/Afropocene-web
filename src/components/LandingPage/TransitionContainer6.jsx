import React, { Component } from "react";
import { Container, Transition, Header, Visibility, Grid, Segment, Divider, Image, Button } from "semantic-ui-react";
import  {HomepageHeading }from '../HomeForest';
import About from '../LandingPage/TeamAboutCards';

export default class TransitionContainer6 extends Component {
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
                        
                        <Segment style={{ padding: "8em 0em" }} vertical>
                            <Container text>
                                <Header as="h3" style={{ fontSize: "2em" }}>
                                So What's The Meaning Of Our Name ?
                                </Header>
                                <Image
                                    rounded
                                    fluid
                                    src={require('../../assets/logos/afropoceneMainLogo.png')}
                                    />

                                <p style={{ fontSize: "1.33em" }}>
                                Anthropocene:
                                adjective

                                relating to or denoting the current geological age, 
                                viewed as the period during which human activity has been the dominant influence on climate and the environment.
                                </p>
                                <p style={{ fontSize: "1.33em" }}>
                                Afro-
                                relating to Africa.

                                "Afrocentric"                                </p>
                                <Button as="a" size="large" href='https://medium.com/@humble-beeing' target='_blank'>
                                Read More on our Blog!
                                </Button>

                                <Divider
                                as="h4"
                                className="header"
                                horizontal
                                style={{ margin: "3em 0em", textTransform: "uppercase" }}
                                >
                                <a href="#root">Case Studies</a>
                                </Divider>

                                <Header as="h3" style={{ fontSize: "2em" }}>
                                Did You Know Only 1% of Honey Produced in Uganda is Harvested?
                                </Header>
                                <p style={{ fontSize: "1.33em" }}>
                                Uganda has enormous untapped potential for Bee- keeping. Uganda currently harvests only 1% of a potential 500,000 tonnes of honey per year. 
                                Despite being only one of five countries in sub-Saharan Africa licenced to export honey to the EU, Uganda has failed to meet home-grown demands for honey, let alone export to this potential market.
                                </p>
                                <p style={{ fontSize: "1.33em" }}>
                                Deborah Ruth Amulen, a lecturer at Makerere University currently a PhD student of Ghent University, also studying at Bangor University, said: "There is still hope for beekeeping in Uganda, since farmers are very interested, they only need the right blend of support to succeed.
                                Besides the high unemployment among these communities makes them yearn for meaningful livelihood alternatives and in the spirit of climate smart agriculture, beekeeping is a suitable choice."
                                </p>
                                <p style={{ fontSize: "1.33em" }}>
                                Smagghe of Ghent University, said: "Yes indeed there is much of potential especially in northern Uganda honey to market as organic honey to Europe. 
                                Our research demonstrated that this honey is free of pesticide residues. So this extra income can sustain also a stable social community. 
                                The successful communities we visited in Kitgum for instance, can work as examples for the whole area. 
                                However, there is need for more and better on-going training in good beekeeping practices and diseases monitoring and control.
                                </p>
                                <Button as="a" size="large" href='https://medium.com/@humble-beeing' target='_blank'>

                                Read More on our Blog !
                                </Button>
                            </Container>
                            </Segment>

                        </Grid>
                    </Transition>
                </Visibility>
            </Container>

        );
    };
}