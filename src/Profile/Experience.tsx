import { observer } from 'mobx-react-lite'
import { Container, Image } from "semantic-ui-react";
import Experiences from "./experience.png"

const Experience = () => {
    return (
      <>
        <Container>
          <Image src={Experiences} wrapped ui={false} />
        </Container>
      </>
    );
}

export default observer(Experience)
