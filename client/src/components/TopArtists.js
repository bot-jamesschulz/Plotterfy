import axios from 'axios'
import React, { useEffect, useState, useRef } from 'react'
import Login from './Login'
import Artist from './Artist'
import { SongButton, Selected, SongListContainer, StyledTopSongs, ColumnContainer, SongMenuContainer } from './styles/TopSongs.styled'
import NavMenu from './NavMenu'
function TopArtists({valid}) {
    const [artists, setArtists] = useState([])
    const selected = useRef("medium")
    
   
     

    // After first render, get top songs within last 6 months and set to songs state array
    useEffect(() => {
    const url = '/top-artists'
    const response = axios.get(url)
    response.then(res => {
        // Create new object from response data
        const newArtists = res.data.map(x => {
          let artistInfo = {
          id: x.id,
          image: x.image,
          name: x.name,
          genres: x.genres.slice(0,2).join(', '),
          url: x.url
          }
          return artistInfo
        })
        console.log(newArtists)
        // updates song state with new object built from response data
        setArtists(newArtists)
    
   
      }) 
    }, [])

    //request top 20 songs within the last 4 weeks
    const shortTerm = () => {
      const url = '/top-artists/short-term'
      const response = axios.get(url)
      response.then(res => {
        // Create new object from response data
        const newArtists = res.data.map(x => {
          let artistInfo = {
          id: x.id,
          image: x.image,
          name: x.name,
          genres: x.genres.slice(0,2).join(', '),
          url: x.url
          }
          return artistInfo
        })
        console.log(newArtists)
        selected.current = "short"
        // updates song state with new object built from response data
        setArtists(newArtists)
      }) 
    }

    // request top 20 songs within the last 6 months
    const mediumTerm = () => {
      const url = '/top-artists'
      const response = axios.get(url)
      response.then(res => {
        // Create new object from response data
        const newArtists = res.data.map(x => {
          let artistInfo = {
          id: x.id,
          image: x.image,
          name: x.name,
          genres: x.genres.slice(0,2).join(', '),
          url: x.url
          }
          return artistInfo
        })
        console.log(newArtists)
        // updates song state with new object built from response data
        setArtists(newArtists)
      }) 
    }

    if(!valid) return <Login />

    return (
      <StyledTopSongs>
        <ColumnContainer>
         <NavMenu/>
          <SongMenuContainer>
            <h1>Top Artists</h1>
            <SongButton
            onClick={mediumTerm}>
            {selected.current === "medium" 
            ? <Selected>Last 6 months</Selected> 
            : <div>Last 6 months</div>}
            </SongButton>
            <SongButton
            onClick={shortTerm}>
            {selected.current === "short" 
            ? <Selected>Last month</Selected> 
            : <div>Last month</div>}
            </SongButton>
          </SongMenuContainer>


          <SongListContainer>
              {artists.map((artist, index) => (
                
                  <Artist key={index} artist={artist}/> 
                        
              ))}
          </SongListContainer>
        
        </ColumnContainer>
      </StyledTopSongs>
    );
  }
  export default TopArtists;
  