
import React, { Component } from "react";
import {
  Button,
  Container,
  Divider,
  Grid,
  Header,
  Icon,
  Image,
  List,
  Dropdown,
  Menu,
  Responsive,
  Segment,
  Sidebar,
  Sticky,
  Transition,
  Visibility
} from "semantic-ui-react";

import "semantic-ui-css/semantic.min.css";

import { Switch, HashRouter, BrowserRouter, Link, Route, NavLink } from "react-router-dom";
import { HomepageContentContainer } from '../components/LandingPage/HomepageContentContainer';
import Shop from './experiment/Shop';
import ContactUsPageComponent from './Pages/ContactUsPageComponent';
import ContactDropdownContainer from "./LandingPage/ContactDropdownContainer";
import GalleryComponent from './Gallery/GalleryComponent';
import AboutUsPageComponent from './Pages/AboutUsPageComponent';
import RoadmapPageComponent from './Pages/RoadmapPageComponent';
import CryptoPageComponent from "./Pages/CryptoPageComponent";
import CalendarPageComponent from "./Pages/CalendarPageComponent";
import PressPageComponent from "./Pages/PressPageComponent";
import AfricanFontComponent from "./LandingPage/AfricanFontComponent";


/* Heads up!
 * Neither Semantic UI nor Semantic UI React offer a responsive navbar, however, it can be implemented easily.
 * It can be more complicated, but you can create really flexible markup.
 */

export default class DesktopContainer extends Component {
  state = { activeItem : null,
            fixed: false
          };

  handleItemClick = (e, { name }) => {  
    console.log(name + "X");
    
    this.setState({ activeItem: name }); 
  }

  componentDidMount() {
    window.onbeforeunload = function () {
      window.scroll({
        top: 0
      });
    }

    window.addEventListener('scroll', this.onScroll);

  }

  componentWillUnmount() {
    // window.onbeforeunload = function () {
    //   window.scroll(0,0);
    // }

    window.removeEventListener('scroll', this.onScroll);

  }

  onScroll = () => {
    console.log("ScrollinDDD");
    console.log(window.scrollY);
    console.log(this.state.fixed);


    //If we have started to scroll then hide the menu bar
    if(window.scrollY > 0) {
      this.setState({
         fixed : true
      });
    } 

  }

  hideFixedMenu = () => this.setState({ fixed: false });
  showFixedMenu = () =>  {
    console.log("Passed huh");
    this.setState({ fixed: true });}
    

  //   window.onscroll = function(ev) {
  //     if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
  //         // you're at the bottom of the page
  //     }
  // };

  render() {
    const { fixed } = this.state;
    const { activeItem } = this.state;
    const myRef = document.querySelector('scrollable-div');


    return (
      <Responsive minWidth={Responsive.onlyTablet.minWidth}>
             <BrowserRouter>
              <Menu                
                fixed="top"
                inverted
                borderless
                color='black'
              >
                  {/* <Image                                    
                    size='small'
                    to="/"
                    as={Link}
                    // hidden={!this.state.fixed}
                    src={require('../assets/logos/gold-logo-TRANSPARENT.PNG')}
                  /> */}
                  <AfricanFontComponent text="AFR.PCN" classNameSize="afro-font-large" />


                  <Menu.Item
                    name='home'
                    onClick={this.handleItemClick}
                    position="right"
                    to="/"
                    as={Link}
                    style={{ color: "#FFFFFFF" }} 
                    active={activeItem === 'home'}>
                      Home
                  </Menu.Item>

                  <Menu.Item
                    to="/about_us"
                    style={{ color: "#FFFFFFF" }} 
                    as={Link}

                    onClick={this.handleItemClick}
                    name='about_us'  
                    active={activeItem === 'about_us'}
                    >
                      About Us                    
                  </Menu.Item>

                  <Menu.Item
                    to="/roadmap"
                    style={{ color: "#FFFFFFF" }} 
                    as={Link}
                    onClick={this.handleItemClick}
                    name='roadmap'  
                    active={activeItem === 'roadmap'}
                    >
                      Roadmap                    
                  </Menu.Item>  
                
                  <Menu.Item
                    to="/gallery"
                    style={{ color: "#FFFFFFF" }} 
                    as={Link}

                    onClick={this.handleItemClick}
                    name='gallery'  
                    active={activeItem === 'gallery'}
                    >
                      Gallery                    
                  </Menu.Item>

                  <Menu.Item
                    to="/crypto"
                    style={{ color: "#FFFFFFF" }} 
                    as={Link}

                    onClick={this.handleItemClick}
                    name='Crypto'  
                    active={activeItem === 'crypto'}
                    >
                      Crypto                    
                  </Menu.Item> 

                  <Menu.Item
                    to="/calendar"
                    style={{ color: "#FFFFFFF" }} 
                    as={Link}
                    onClick={this.handleItemClick}
                    name='shop' 
                    active={activeItem === 'calendar'}>
                      Calendar
                  </Menu.Item>                                      

                  <Menu.Item
                    href='https://medium.com/@humble-beeing' target='_blank'
                    style={{ color: "#FFFFFFF" }} 
                    name='blog' 
                    active={activeItem === 'blog'}>
                      Blog
                  </Menu.Item>

                  <Menu.Item
                    to="/press"
                    style={{ color: "#FFFFFFF" }} 
                    as={Link}
                    onClick={this.handleItemClick}
                    name='press' 
                    active={activeItem === 'press'}>
                      Press
                  </Menu.Item>

                  <Menu.Item
                    to="/shop"
                    style={{ color: "#FFFFFFF" }} 
                    as={Link}
                    onClick={this.handleItemClick}
                    name='shop' 
                    active={activeItem === 'shop'}>
                      Shop
                  </Menu.Item>

                  <Menu.Item
                    to="/contact"
                    style={{ color: "#FFFFFFF" }} 
                    as={Link}
                    onClick={this.handleItemClick}
                    name='shop' 
                    active={activeItem === 'contact'}>
                      Contact Us
                  </Menu.Item>

                  {/* <Menu.Item
                    href='https://linktr.ee/humblebeeing' target='_blank'
                    style={{ color:"#bf9000" }} 
                    name='contact'  
                    active={activeItem === 'contact'}
                    >
                      Contact                    
                  </Menu.Item> */}

                  {/* <ContactDropdownContainer /> */}
              </Menu>

            {/* A <Switch> looks through its children <Route>s and
                renders the first one that matches the current URL. */}
              <Switch>
              <Route path="/shop" component={Shop} />
              <Route path="/contact" component={ContactUsPageComponent} /> 
               {/* <Route exact path="/donate" component={Donate} /> */} 
               {/* <Route exact path="/blog" component={Blog} /> */} {/* TODO: Check that the blog doesn't need a route to work ! */}
              <Route exact path="/" component={HomepageContentContainer} />
              <Route exact path="/gallery" component={GalleryComponent} />
              <Route exact path="/about_us" component={AboutUsPageComponent} />
              <Route exact path="/roadmap" component={RoadmapPageComponent} />
              <Route exact path="/crypto" component={CryptoPageComponent} />
              <Route exact path="/calendar" component={CalendarPageComponent} />
              <Route exact path="/press" component={PressPageComponent} />

             </Switch>

             </BrowserRouter>
      </Responsive>

    );
  }
}
