import React from "react";
import {  Image, Transition, Visibility, Segment, Container, Responsive, Header, Input, Button, Divider} from "semantic-ui-react";
import PropTypes from "prop-types";
import AfricanFontComponent from "./AfricanFontComponent";
import TypeWriterEffect from 'react-typewriter-effect';



export default class AnimationLogoImage extends React.Component {

    constructor(props) {
        super(props);
        this.state = { visible: false };
    }

    componentDidMount() {
        this.toggleVisibility();
    }      
    
    

    toggleVisibility = () => 
        this.setState( {visible: true})
    
    
    render() {
        const { visible } = this.state;

        return (
            <Segment
            inverted
            fluid
            textAlign="center"
            style={{ 
                minHeight: '100vh', 
                padding: window.screen.width <= Responsive.onlyMobile.maxWidth ? "0em": "30em" }}
            vertical
          >
              <AfricanFontComponent text="AFROPOCENE." classNameSize="afro-font-xxlarge" />
              <Divider hidden />
              <Divider hidden />
              <Divider hidden />
              <Divider hidden />

              <TypeWriterEffect
                    textStyle={{ fontFamily: 'Helvetica', colour: '#FFFFFF' }}
                    startDelay={600}
                    cursorColor="white"
                    multiText={[
                      'Welcome to the Future of African Creativity...',
                      'A group of thinkers, creators and doers formed a team to explore Art in all forms  ...',
                      'From the Physical... To the Digital.',
                      'Linked by a shared passion to: Innovate.Create.Educate',
                    ]}
                    typeSpeed={65}
            />

            </Segment>


        );
    }
}