import { Alert,Container,} from "react-bootstrap";
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import mission from './images/mission.jpg'
import vision from './images/vision.jpg'
import values from './images/values.jpg'


export function About(){
    return (
        <Container>
            <Alert variant="primary">
                <p>🛠️Founded in 2023, AutoAce is a leading servicing website streamlining and revolutionising the repairing,maintainence, bike in Nagpur, Mumbai, Pune, and Gujrat. Leveraging a Smart AI Pricing Engine, and 140 quality checks, reparing vehicles is seamless and transparent with Autoace. </p>
            </Alert> 
            <CardGroup>
      <Card>
        <Card.Img variant="top" src={mission}/>
        <Card.Body>
          <Card.Title>"Mission"</Card.Title>
          <Card.Text>
             Our Mission is to Provide high-quality bike services and a full range of viability  to the customer provide full range of services to users.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" src={vision} />
        <Card.Body>
          <Card.Title>"Vision"</Card.Title>
          <Card.Text>
          To transform the quality of life of people across the world by providing mobility solutions that are exciting, responsible, sustainable and safe.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" src={values} />
        <Card.Body>
          <Card.Title>Values</Card.Title>
          <Card.Text>
            
Commitment towards a sustainable future for societies and the environment,Focus on speed and agility to seize opportunity in a Volatile Uncertain Complicated Ambiguous (VUCA) world
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
    </CardGroup>
                 
             </Container>
    );
}