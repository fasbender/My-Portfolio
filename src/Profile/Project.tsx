import { Reveal, Image, Grid } from 'semantic-ui-react';
import '../components/main.css'
import Aveneur from './aveneur.png'
import Senoark from './senoark.png'
import Homeland from './homeland.png'

const Project = () => {
    return (
      <div id="Projects" style={{ height: "50vh", padding: "5%", overflow: "auto" }}>
        <Grid>
          <Grid.Row columns={3}>
            <Grid.Column mobile={16} tablet={16} widescreen={5}>
              <Reveal animated="fade">
                <Reveal.Content visible>
                  <div className="blur">
                    <h1>Aveneur Solutions</h1>
                  </div>
                </Reveal.Content>
                <Reveal.Content hidden>
                  <Image src={Aveneur} size="large" />
                  <a href="https://aveneur.com/#/">
                    <h2>Go to site</h2>
                  </a>
                </Reveal.Content>
              </Reveal>
            </Grid.Column>
            <Grid.Column mobile={16} tablet={16} widescreen={5}>
              <Reveal animated="fade">
                <Reveal.Content visible>
                  <div className="blur">
                    <h1>Senoark</h1>
                  </div>
                </Reveal.Content>
                <Reveal.Content hidden>
                  <Image src={Senoark} size="large" />
                  <a href="https://senoark.org/#/">
                    <h2>Go to site</h2>
                  </a>
                </Reveal.Content>
              </Reveal>
            </Grid.Column>
            <Grid.Column mobile={16} tablet={16} widescreen={5}>
              <Reveal animated="fade">
                <Reveal.Content visible>
                  <div className="blur">
                    <h1>HOMELAND</h1>
                  </div>
                </Reveal.Content>
                <Reveal.Content hidden>
                  <Image src={Homeland} size="large" />
                  <a href="https://betahomeland.aveneur.com/#/">
                    <h2>Go to site</h2>
                  </a>
                </Reveal.Content>
              </Reveal>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    );
}

export default Project
