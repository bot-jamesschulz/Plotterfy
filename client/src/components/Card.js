import React from 'react'
import { Link } from 'react-router-dom'
import { CardLayout, FlexCard } from './styles/Card.styled'

export default function Card() {
  return (
    <CardLayout>
        <Link as={Link} to="/top-songs">
            <FlexCard bg='#af6464' layout='40%'>
                <div>
                    <h1>Top tracks</h1>
                    <p>View your most listened to songs in 4 week or 6 month increments.</p>
                </div>
                <div>
                    {/* <img src='/topSongs.jpg' alt=''></img> */}
                </div>
            </FlexCard>
        </Link>
        <Link as={Link} to="/top-artists">
            <FlexCard bg='#af7764'>
                <div>
                    <h1>Top artists</h1>
                    <p>See which artists you keep coming back for.</p>
                </div>
                <div>
                    {/* <img src='/topArtists.jpg' alt=''></img> */}
                </div>
            </FlexCard>
        </Link>
        <Link as={Link} to="/artist-guesser">
            <FlexCard bg='#af648a' layout='40%'>
                <div>
                    <h1>Popularity Quiz</h1>
                    <p>Guess who is more popular between two of your top 100 artists.</p>
                </div>
                <div>
                    {/* <img src='/topSongs.jpg' alt=''></img> */}
                </div>
            </FlexCard>
        </Link>


        
     
    </CardLayout>
  )
}
