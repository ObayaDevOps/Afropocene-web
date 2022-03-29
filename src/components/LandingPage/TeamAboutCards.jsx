import React, { Component } from "react";
import { Card, Image, Container } from "semantic-ui-react";


class TeamAboutCards extends Component {

    render() {
      return (
        <Container fluid>
            <Card.Group stackable itemsPerRow={5}>
              <Card>
              <Image src={require('../../assets/teamPhotos/ObiPFP.png')} wrapped ui={false} />
                <Card.Content>
                  <Card.Header>Obaya</Card.Header>
                  <Card.Meta>
                  <span className='date'>Tech + Generative</span>
                  </Card.Meta>
                </Card.Content>
              </Card>

              <Card>
              <Image src={require('../../assets/teamPhotos/MartinPFP2.png')} wrapped ui={false} />
                <Card.Content>
                  <Card.Header>Kharumwa</Card.Header>
                  <Card.Meta>
                  <span className='date'>Photography</span>
                  </Card.Meta>
                </Card.Content>
              </Card>
              
              <Card>
              <Image src={require('../../assets/teamPhotos/LetaruPFP.png')} wrapped ui={false} />
                <Card.Content>
                  <Card.Header>Letaru</Card.Header>
                  <Card.Meta>
                  <span className='date'>Mixed Media</span>
                  </Card.Meta>
                </Card.Content>
              </Card>

              <Card>
                <Image src={require('../../assets/teamPhotos/OdurPFP.png')} wrapped ui={false} />
                <Card.Content>
                  <Card.Header>Odur</Card.Header>
                  <Card.Meta>
                  <span className='date'>Metal and Oil Paint</span>
                  </Card.Meta>
                </Card.Content>
              </Card>

              <Card>
              <Image src={require('../../assets/teamPhotos/MonaPFP.png')} wrapped ui={false} />
                <Card.Content>
                  <Card.Header>Mona</Card.Header>
                  <Card.Meta>
                  <span className='date'>Charcoal</span>
                  </Card.Meta>
                </Card.Content>
              </Card>
            </Card.Group>
        </Container>
      );
    }
  }
   
  export default TeamAboutCards;