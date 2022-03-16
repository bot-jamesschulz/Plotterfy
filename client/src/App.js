import Recommendations from './components/Recommendations'
import Home from './components/Home'
import TopSongs from './components/TopSongs'
import ArtistGuesser from './components/ArtistGuesser'
import NavBar from './components/NavBar'
import {  BrowserRouter as Router, Route, Routes } from 'react-router-dom'

// Check if login was successful
const valid = new URLSearchParams(window.location.search).get('valid') ? true : false

function App() {
  return (
    <Router>
    <NavBar />
      <Routes>
        <Route exact path="/"  element={<Home valid = {valid}/>} />
        <Route exact path="/top-songs"  element={<TopSongs valid = {valid}/>} />
        <Route exact path="/recommendations"  element={<Recommendations valid = {valid}/>} />
        <Route exact path="/artist-guesser"  element={<ArtistGuesser valid = {valid}/>} /> 
      </Routes>
    </Router>
  );
}
export default App;