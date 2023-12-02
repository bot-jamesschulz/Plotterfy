import {HomeStyle} from './styles/Home.styled'
import Card from './Card'
import Login from './Login'
function Home({valid}) {
  
  if(!valid) return <Login />
  return (
    <>
      <HomeStyle>
          <h1>Welcome to Plotterfy.</h1>
          <p><img src='/logo.svg' alt=''/>Explore your Spotify data.</p>
          <Card/>
      </HomeStyle>
    </>
  );
}
export default Home;
