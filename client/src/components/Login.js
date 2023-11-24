import axios from 'axios'
import {Button} from './styles/Button.styled'
import { LoginColor, StyledLogin, Container, Flex } from './styles/Login.styled'


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
    <LoginColor>
      <StyledLogin>
        <img src='/logo.svg' alt=''></img>
        <Container>
          <Flex>
            <div>
                <h1>Plotterfy allows you to interact with your Spotify metrics, {<br></br>} year round.</h1>
                <p>Login with your account to get started</p>
            </div>
            <div>
              <Button 
                onClick={routeOne}>Login
              </Button>  
            </div>
          </Flex>  
        </Container> 
      </StyledLogin>
    </LoginColor>
  );
    
}
  
  export default Login