import {Card, Button, Container} from 'react-bootstrap'
function Home() {

  return (
    <div >
    <Container  >
    <Card className="text-center">
      <Card.Img variant="top" src="https://i.gyazo.com/a07754d20552191049cf5a11b8090373.png" />
     
      <Card.Body>
        <Card.Title>Application for interacting with your Spotify data</Card.Title>
        <Card.Text>
          Built using React, Node.js, Bootstrap, Spotify-web-api-node, Express, and Axios
        </Card.Text>
      </Card.Body>
      <Card.Footer><a href="https://github.com/CS458-spotify-project/soft-ware-bois" target="_blank" rel="noopener noreferrer">https://github.com/CS458-spotify-project/soft-ware-bois</a></Card.Footer>
    </Card>

            
    </Container>
    </div>
    
  );
}
export default Home;
