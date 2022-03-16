import axios from 'axios'
import React, { useEffect, useState } from 'react'
import {Card, Button, Container} from 'react-bootstrap'
import Login from './Login'


function TopSongs({valid}) {
    const [songs, setSongs] = useState([])
    


    // After first render, get top songs within last 6 months and set to songs state array
    useEffect(() => {
    const url = '/topsongs'
    const response = axios.get(url)
    response.then(res => {
        // Create new object from response data
        const newSong = res.data.map(x => {
          let trackInfo = {
          image: x.image,
          id: x.id,
          name: x.name,
          artist: x.artists.join(", "),
          url: x.url
          }
          return trackInfo
        })

        // updates song state with new object built from response data
        setSongs(newSong)
   
      }) 
    }, [])
    
    // request top 20 songs within the last 4 weeks
    const shortTerm = () => {
      const url = '/topsongs/shortterm'
      const response = axios.get(url)
      response.then(res => {
      // Create new object from response data
      const newSong = res.data.map(x => {
        let trackInfo = {
        image: x.image,
        id: x.id,
        name: x.name,
        artist: x.artists.join(", "),
        url: x.url
        }
        return trackInfo
      })

      // updates song state with new object built from response data
      setSongs(newSong)
      }) 
    }
    // request top 20 songs within the last 6 months
    const mediumTerm = () => {
      const url = '/topsongs'
      const response = axios.get(url)
      response.then(res => {
        // Create new object from response data
      const newSong = res.data.map(x => {
        let trackInfo = {
        image: x.image,
        id: x.id,
        name: x.name,
        artist: x.artists.join(", "),
        url: x.url
        }
        return trackInfo
      })

      // updates song state with new object built from response data
      setSongs(newSong)
      }) 
    }
    if(!valid) return <Login />

    return (
      <div>
        <Container>
        <div className="text-center p-1 ">
          <Button  
              variant="outline-dark"
              onClick={shortTerm}>Last 4 weeks
          </Button> { ' '}

          <Button 
              variant="outline-dark"
              onClick={mediumTerm}>Last 6 months
          </Button>
        </div>

        {songs.map(track  => 
          <>
          <Card key={track.id} className="flex-row mx-auto p-1 m-1 border-1 bg-light" style={{ width: '30rem' }}>
            <h5 className="p-4">{track.id}</h5>
            <a href={track.url} target="_blank" rel="noopener noreferrer"><img src={track.image} alt="Logo" width="100" height="100" /></a>
            <Card.Body>
                <Card.Title className="h6">{track.name}</Card.Title>
                <Card.Text>
                  {track.artist}
                </Card.Text>
            </Card.Body>
          </Card>
          </>
          )}
        </Container>
      </div>
    );
  }
  export default TopSongs;
  