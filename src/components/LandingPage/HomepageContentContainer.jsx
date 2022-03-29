import React, { Component } from "react";
import {
  Divider
} from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";


import TransitionContainer1 from "./TransitionContainer1";
import TransitionContainer2 from "./TransitionContainer2";
import TransitionContainer3 from "./TransitionContainer3";
import TransitionContainer4 from "./TransitionContainer4";
import TransitionContainer5 from "./TransitionContainer5";
import TransitionContainer6 from "./TransitionContainer6";
import TransitionContainer7 from "./TransitionContainer7";
import TransitionContainer8 from "./TransitionContainer8";
import FooterContainer from '../FooterContainer';
import AnimationLogoImage from './AnimationLogoImage';

/* Heads up!
 * Neither Semantic UI nor Semantic UI React offer a responsive navbar, however, it can be implemented easily.
 * It can be more complicated, but you can create really flexible markup.
 */

 //See if by moving the classes to their own files you can fix the structure with the Nav Bar

//Implement sMooth scroll here ?

export const HomepageContentContainer = () =>  {
   return (
    <div>
        <AnimationLogoImage />
        <TransitionContainer1 />
        <TransitionContainer2 />
        <TransitionContainer3 />
        <TransitionContainer8 />
        < Divider hidden />
        <TransitionContainer4 />
        < Divider />
        <TransitionContainer5 />
        < Divider />
        <FooterContainer />
    </div>
   ); 
};