import axios from 'axios'
import React, { useEffect, useState } from 'react'
import {Card, Button, Container} from 'react-bootstrap'

function Recommendations() {
    const [songs, setSongs] = useState([])

    useEffect(() => {
        const url = 'http://localhost:3001/recommendations'
        const response = axios.get(url)
        response.then(res => {
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
            
            console.log(newSong)
            setSongs(newSong)
        })

        
            
    }, [])

    const refresh = () => {
      const url = 'http://localhost:3001/recommendations'
        const response = axios.get(url)
        response.then(res => {
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
            
            console.log(newSong)
            setSongs(newSong)

        })
      }
    
    
    return (
      <div>
        {/* {songs.map(track  => <p key={track.id}>Ranking: {track.id} Artist: {track.artist} Song: {track.name}</p>)} */}
      
        <Container>
        <div className="text-center p-1">
        <Button 
            variant="outline-dark"
            onClick={refresh}>Generate more recommendations
        </Button>
       
        </div>
        {songs.map(track  => 
          <>
          
          <Card key={track.id} className="flex-row mx-auto p-1 m-1" style={{ width: '30rem' }}>
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
  export default Recommendations;
  