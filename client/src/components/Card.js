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
                    <p>View the songs you've been listening to the most.</p>
                </div>
            </FlexCard>
        </Link>
        <Link as={Link} to="/top-artists">
            <FlexCard bg='#af7764'>
                <div>
                    <h1>Top artists</h1>
                    <p>See which artists you keep coming back for.</p>
                </div>
            </FlexCard>
        </Link>
        <Link as={Link} to="/artist-guesser">
            <FlexCard bg='#af648a' layout='40%'>
                <div>
                    <h1>Popularity Quiz</h1>
                    <p>Do you know how popular your favorite artists are?.</p>
                </div>
            </FlexCard>
        </Link>
    </CardLayout>
  )
}
