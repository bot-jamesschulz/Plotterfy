import Home from './components/Home'
import Login from './components/Login'
import TopSongs from './components/TopSongs'
import TopArtists from './components/TopArtists'
import ArtistGuesser from './components/ArtistGuesser'
import {  BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import GlobalStyle from './components/styles/GlobalStyles';
// Check if login was successful
const valid = new URLSearchParams(window.location.search).get('valid') ? true : false
const user = new URLSearchParams(window.location.search).get('user')



function App() {
  return (
    <>

      {valid ?
      (
      <Router>
        <GlobalStyle/>
        <Routes>
          <Route exact path="/home"  element={<Home valid = {valid} user={user}/>} />
          <Route exact path="/top-songs"  element={<TopSongs valid = {valid}/>} />
          <Route exact path="/top-artists"  element={<TopArtists valid = {valid}/>} />
          <Route exact path="/artist-guesser"  element={<ArtistGuesser valid = {valid}/>} /> 
        </Routes>
      </Router>
      )
      : <Login/>}
    </>  
  );
}
export default App;
