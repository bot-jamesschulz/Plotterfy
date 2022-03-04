import axios from 'axios'
import { Button } from 'react-bootstrap'

function Login() {

 
  const routeOne = () => {
    const url = '/login'
    axios
      .get(url)
      .then(res => {
        console.log(res.data)
        window.location.replace(res.data)
      })
  }
  
  return (
    <div className="text-center">
        
          <Button 
            size="lg"
            className="m-5"
            variant="dark"
            onClick={routeOne}>Login to Spotify
          </Button>
      
    </div>
  );
    
}
  
  export default Login