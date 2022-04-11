import {HomeStyle, UpperStyle, LowerStyle, LowerContainer} from './styles/Home.styled'
import Card from './Card'
function Home({valid, user}) {
  
  return (
    <>
      <HomeStyle>
        <UpperStyle>
          <h1><span>Welcome {user},</span> to Plotterfy.</h1>
          <p><img src='/logo.svg' alt=''/>Explore your Spotify data.</p>
          <Card/>
        </UpperStyle>
      </HomeStyle>
    </>
  );
}
export default Home;
