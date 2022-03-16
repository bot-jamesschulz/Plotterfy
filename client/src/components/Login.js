import axios from 'axios'
import { Button } from 'react-bootstrap'

function Login() {

 
  const routeOne = () => {
    const url = '/login'
    axios
      .get(url)
      .then(res => {
        window.location.replace(res.data)
      })
  }
  
  return (
    <div className="text-center ">
        
        <Card style={{ width: '40rem' }} className="mx-auto m-2 bg-light">
          <Card.Img variant="top" src="" />
          <Card.Body>
            <Card.Title></Card.Title>
            <Card.Text>
              First, you need to log in with your account
            </Card.Text>
            <Button 
            size="lg"
            className="m-5"
            variant="dark"
            onClick={routeOne}>Login
          </Button>
          </Card.Body>
        </Card>
    </div>
  );
    
}
  
  export default Login