import { observer } from 'mobx-react-lite'
import { Card, Container, Grid, Image } from 'semantic-ui-react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLevelUpAlt } from '@fortawesome/free-solid-svg-icons';
import Fas from './faisal.jpg'

const AboutMe = () => {
    return (
      <div>
          <Grid>
            <Grid.Row>
              <Grid.Column mobile={16} tablet={16} widescreen={6}>
                <Card>
                  <Image src={Fas} wrapped ui={false} />
                  <Card.Content>
                    <Card.Header>Faisal</Card.Header>
                    <Card.Meta>
                      <span className="date">
                        Started Web Developing in 2019
                      </span>
                    </Card.Meta>
                    <Card.Description>
                      I am a Frontend Developer.
                    </Card.Description>
                  </Card.Content>
                </Card>
              </Grid.Column>
              <Grid.Column widescreen={8} mobile={16} tablet={16}>
                <Container fluid text>
                  <h1>
                    Hi, my name is <strong>Faisal Bin Alamgir!</strong>
                  </h1>
                  <p>
                    <strong>I am 24 years old, born in Dhaka</strong>
                  </p>
                  <h4>
                    Hey, this is my homepage, so I have to say something about
                    myself. Sometimes it is hard to introduce yourself because
                    you know yourself so well that you do not know where to
                    start with. Let me give a try to see what kind of image you
                    have about me through my self-description. I hope that my
                    impression about myself and your impression about me are not
                    so different. Here it goes.....
                  </h4>
                  <h3>
                    <span style={{ fontSize: "2rem", color: "red" }}>I</span> am
                    a person who is positive about every aspect of life. There
                    are many things I like to do, to see, and to experience. My
                    favorite pass time is playing videogames and watching
                    football with my mates. One other thing I like to do in my
                    free time is{" "}
                    <span style={{ fontSize: "2rem", color: "gold" }}>
                      Coding!
                    </span>{" "}
                    It is a powerful thing to have, you can create amazing
                    things with it. I started learning to make websites back in
                    November 2019 and I want to keep leveling up!
                    <FontAwesomeIcon
                      style={{ color: "green" }}
                      icon={faLevelUpAlt}
                    />
                  </h3>
                </Container>
              </Grid.Column>
            </Grid.Row>
          </Grid>
      </div>
    );
}

export default observer(AboutMe)
