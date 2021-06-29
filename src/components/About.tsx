import { observer } from 'mobx-react-lite'
import React, { useContext } from 'react'
import { RootStoreContext } from '../stores/rootStore'
import AboutMe from '../Profile/AboutMe'
import Education from '../Profile/Education'
import './main.css'
import Experience from '../Profile/Experience'
import { Container, Menu, Segment } from 'semantic-ui-react'

const About = () => {

    const store = useContext(RootStoreContext)
    const { visibleProfile, visibleEducation, visibleExperience, showProfile, showEducation, showExperience } = store.commonStore

    return (
      <div className="about-main">
        <Menu className="menu" pointing secondary>
          <Menu.Item
            name="About Me"
            active={showProfile}
            onClick={() => visibleProfile()}
          />
          <Menu.Item
            name="Education"
            active={showEducation}
            onClick={() => visibleEducation()}
          />
          <Menu.Item
            name="Experience"
            active={showExperience}
            onClick={() => visibleExperience()}
          />
        </Menu>
        <Container>
          <Segment>
            {showProfile && <AboutMe />}
            {showEducation && <Education />}
            {showExperience && <Experience />}
          </Segment>
        </Container>
      </div>
    );
}

export default  observer(About)
