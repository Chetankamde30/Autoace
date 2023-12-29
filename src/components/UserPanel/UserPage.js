import UserNavigationbar from './UserNavigationbar';
import Button from 'react-bootstrap/Button';
import "./UserPage.css";
import Image6 from'./Image6 .jpg';
import Image4 from'./Image4.jpg';
import Image7 from'./Image7.jpg';
import Card from 'react-bootstrap/Card';
export default function AdminPage()
{
    return(
        <>
         < UserNavigationbar/>
         <section class="main-hero-section">
      <div class="hero-left-side">
        <h1>🛠️AutoAce is the best bike service center</h1>
        <p>
        👉We rebuild your trust in Vehicle service and repair by our transparent processes and live updates. We’ve built our business on trust and are committed to giving you an honest and genuine car service experience every time you book a service with 🛠️AutoAce.👈
        </p>
        <div class="button-group">
          
        </div>
      </div>
      <div class="hero-right-side">
        <img src={Image6} alt="heropageImg" 
            style={{height:'550px'}}
        />
      </div>
    </section>

    <Card style={{height:'530px', textAlign:'center'}}>
        <Card.Img variant="top" src={Image7}  style={{height:'380px',width:'750px', textAlign:'center',marginLeft:'22rem', marginTop:'20px'}}/>
        <Card.Body>
          <Card.Text style={{width:'750px', textAlign:'center',marginLeft:'22rem' }}>
          👉Customers can give Feedback whether they like service or not while servicing at the AutoAce car repair workshop. We respect the feedback you provide. We value your time and ensure fast delivery of your Vehicle.👈
          </Card.Text>
        </Card.Body>
      </Card>
      <br />
    <section class="common-section" id="section-two">
      <div class="left-side">
        <figure>
          <img src={Image4} alt="section2" 
            style={{height:'550px', width:'550px'}}
          />
        </figure>
      </div>
      <div class="right-side">
        <h2>👉Service  Assurance👈 </h2>
        <p>
        "We take Vehicle care seriously and are committed to offering you the best quality services at an economical price."
        </p>
        <div class="button-group">
          <button class="common-button">get started</button>
          <button class="common-button-normal">how its work?</button>
        </div>
      </div>
    </section>
    <Card className="text-center">
      <Card.Header>🛠️"AutoAce"</Card.Header>
      <Card.Body>
        <Card.Title>🪧Best Online vehicle Service Center Website🪧</Card.Title>
        <Card.Text>
        👉"We take Vehicle care seriously and are committed to offering you the best quality services at an economical price."👈
        </Card.Text>
        <Button variant="primary">Go To Top</Button>
      </Card.Body>
      <Card.Footer className="text-muted">😊Welcome You😊</Card.Footer>
    </Card>
        </>
    )
}