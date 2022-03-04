import Login from './components/Login'
import Recommendations from './components/Recommendations'
import Home from './components/Home'
import TopSongs from './components/TopSongs'
import ArtistGuesser from './components/ArtistGuesser'
import NavBar from './components/NavBar'
import {  BrowserRouter as Router, Route, Routes } from 'react-router-dom'

// Check if login was successful
const valid = new URLSearchParams(window.location.search).get('valid')
console.log(valid)

function App() {

  
  return (
    
    valid ? (
    <Router>
    <NavBar />
      <Routes>

        
        <Route exact path="/" element={<Home />} />
        <Route exact path="/top-songs" element={<TopSongs />} />
        <Route exact path="/recommendations" element={<Recommendations/>} />
        <Route exact path="/artist-guesser" element={<ArtistGuesser/>} />
        
      </Routes>
    </Router>
    )
    : <Login/>
   
    
  );
}
export default App;
