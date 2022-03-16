import {Card, Button, Container} from 'react-bootstrap'
import Login from './Login'
function Home({valid}) {

  return (
    <div >
    {!valid ? <Login /> : " "}

    <Container  >
      <Card className="mx-auto text-center bg-light" style={{ width: '50rem' }}>
        <Card.Img/>
      
        <Card.Body>
          <Card.Title>Interact with your Spotify data using Plotterfy</Card.Title>
          <Card.Text>
          {<br/>}{<br/>} Plotterfy allows you to access your most listened to songs year round, generate new recommendations, and engage with your listening data in fun ways.
          </Card.Text>
        </Card.Body>
      </Card>    
    </Container>
    </div>
    
  );
}
export default Home;
