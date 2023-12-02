import axios from 'axios'
import React, { useEffect, useState, useRef } from 'react'
import Login from './Login'
import Track from './Track'
import { SongButton, Selected, SongListContainer, StyledTopSongs, SongMenuContainer } from './styles/TopSongs.styled'
import NavMenu from './NavMenu'
function TopSongs({valid}) {
    const [songs, setSongs] = useState([])
    const selected = useRef("medium")
    
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
      selected.current = "short"
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
      selected.current = "medium"
      // updates song state with new object built from response data
      setSongs(newSong)
      }) 
    }

    if(!valid) return <Login />

    return (
      <>
        <NavMenu/>
        <StyledTopSongs>
            <SongMenuContainer>
              <div><h1>Top Songs</h1></div>
              <SongButton onClick={mediumTerm}>
                {selected.current === "medium" 
                ? <Selected>Last 6 months</Selected> 
                : <div>Last 6 months</div>}
              </SongButton>
              <SongButton onClick={shortTerm}>
                {selected.current === "short" 
                ? <Selected>Last month</Selected> 
                : <div>Last month</div>}
              </SongButton>
            </SongMenuContainer>
            <SongListContainer>
                {songs.map((track, index) => (
                    <Track key={index} track={track}/> 
                ))}
            </SongListContainer>
        </StyledTopSongs>
      </>
    );
  }
  export default TopSongs;
  