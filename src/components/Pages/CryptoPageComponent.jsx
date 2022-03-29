import React, { Component } from "react";
import { Segment, Header } from "semantic-ui-react";
import FooterContainer from '../FooterContainer';


const PageContent = () => (
  <Segment style ={{minHeight : "100vh"}}>
  <Header as="h1" style={{ paddingTop: "2.5em"}}>CRYPTO PAGE</Header>
  <p>Cras facilisis urna ornare ex volutpat, et
  convallis erat elementum. Ut aliquam, ipsum vitae
  gravida suscipit, metus dui bibendum est, eget rhoncus nibh
  metus nec massa. Maecenas fzsfzfsaszfhendrerit laoreet augue
  nec molestie. Cum sociis natoque penatibus et magnis
  dis parturient montes, nascetur ridiculus mus.</p>

  <p>Duis a turpis sed lacus dapibus elementum sed eu lectus.</p>
</Segment>

);


class CryptoPageComponent extends Component {
    render() {
      return (
        <div>
          <PageContent />
          <FooterContainer />
        </div>
      );
    }
  }
   
  export default CryptoPageComponent;