import React from 'react'
import { StyledTrack } from './styles/TopSongs.styled'

export default function Track({track: {id, image, name, artist, url}}) {
  return ( 
    <a href={url} target="_blank" rel="noreferrer" >
    <StyledTrack>
      <div><h3>{id}</h3></div>
      <div>
        <div><h5>{name}</h5></div>
        <div>{artist}</div>
      </div>
      <div><img src={image} alt="Logo"/></div>
    </StyledTrack>
    </a>
  )
}
