import axios from 'axios'
import React, { useEffect, useState, useRef } from 'react'
import Login from './Login'
import NavMenu from './NavMenu'
import { InfoContainer, StyledArtistGuesser, ArtistLayout, ArtistImage, ArtistInfo, Button, AnswerAlign, ButtonAlign, AnswerContainer, TopInfo } from './styles/ArtistGuesser.styled'

function ArtistGuesser({valid}) {
    const artistInfoArr = useRef([]) // Top 99 artists, called on initial render
    const [answer, setAnswer] = useState({}) // Answer text to be displayed
    const randA = useRef(0) // Random number for 1st artist in pair
    const randB = useRef(0) // Random number for 2nd artist in pair
    
    useEffect(() => {
        const url = '/artist-guesser'
        const response = axios.get(url)
        response.then(res => {
            // Fill artistInfoArr
            const newArtistArr = res.data.map(x => {
                let artistInfo = {
                id: x.id,
                name: x.name,
                followers: x.followers,
                image: x.image
                }
                return artistInfo
            })
            
            artistInfoArr.current = newArtistArr
            // End fill artistInfoArr

            // get two random artists from artistInfoArr and put them in artistPair

            randA.current = Math.floor(Math.random() * artistInfoArr.current.length)
            randB.current = Math.floor(Math.random() * artistInfoArr.current.length)
            while(randB.current === randA.current) {
            randB.current = Math.floor(Math.random() * artistInfoArr.current.length)
            }

            let newArtistPair = [{
                
                id: artistInfoArr.current[randA.current].id,
                name: artistInfoArr.current[randA.current].name,
                followers: artistInfoArr.current[randA.current].followers,
                image: artistInfoArr.current[randA.current].image

            }, 
            {
                
                id: artistInfoArr.current[randB.current].id,
                name: artistInfoArr.current[randB.current].name,
                followers: artistInfoArr.current[randB.current].followers,
                image: artistInfoArr.current[randB.current].image
            }]


            const newAns = {
                ...answer,
                artistPair: newArtistPair.map(artist => artist)
            }
            
            setAnswer(newAns)
            // End fill artistPair
           
        })
        
    }, [])

    // Generate new artist pairs
    const newPair = () => {
        randA.current = Math.floor(Math.random() * artistInfoArr.current.length)
        randB.current = Math.floor(Math.random() * artistInfoArr.current.length)
        while(randB.current === randA.current) {
            randB.current = Math.floor(Math.random() * artistInfoArr.current.length)
            }

        let newArtistPair = [{
           
            
            id: artistInfoArr.current[randA.current].id,
            name: artistInfoArr.current[randA.current].name,
            followers: artistInfoArr.current[randA.current].followers,
            image: artistInfoArr.current[randA.current].image

        }, 
        {
            id: artistInfoArr.current[randB.current].id,
            name: artistInfoArr.current[randB.current].name,
            followers: artistInfoArr.current[randB.current].followers,
            image: artistInfoArr.current[randB.current].image
        }]

        const newAns = {
            ...answer,
            answer: "",
            showFollowers: false,
            artistPair: newArtistPair.map(artist => artist)
        }
        setAnswer(newAns)
    }
   
    const imageClick = (artistA, artistB) => {
        let newAnswer = {
            ...answer,
            showFollowers: true,
            answer: artistA.followers > artistB.followers ? "Correct" : "Incorrect",
           
        }

        setAnswer(newAnswer)
    }

    if(!valid) return <Login />

    return (

        artistInfoArr.current.length !== 0 ? (
      <>
        <NavMenu/>
        <StyledArtistGuesser>
            <TopInfo>
            <p class='margin-left: auto; margin-right: auto;'>Of the two artists from your most-listened-to, which one has more followers?</p>
            </TopInfo>
            <ArtistLayout>    
                <ArtistInfo>
                    <ArtistImage src={answer.artistPair[0].image} onClick={(e) => imageClick(answer.artistPair[0], answer.artistPair[1])}/>
                    <InfoContainer>
                            <h2>{answer.artistPair[0].name}</h2>
                            {answer.showFollowers ? (
                            <div>
                                {answer.artistPair[answer.artistPair.findIndex(x => x.name === answer.artistPair[0].name)].followers.toLocaleString("en-US")}
                                {} followers
                            </div>
                            ) : null}
                    </InfoContainer>
                </ArtistInfo>
                <AnswerAlign>
                    <AnswerContainer>
                        <h1>{answer.answer}</h1>
                    </AnswerContainer>
                </AnswerAlign>
                <ArtistInfo>
                    <ArtistImage src={answer.artistPair[1].image} onClick={(e) => imageClick(answer.artistPair[1], answer.artistPair[0])}/> 
                        <InfoContainer>
                            <h2>{answer.artistPair[1].name}</h2>
                            
                            {answer.showFollowers ? (
                            <div>
                                {answer.artistPair[answer.artistPair.findIndex(x => x.name === answer.artistPair[1].name)].followers.toLocaleString("en-US")}
                                {} followers
                            </div>
                        ) : null}
                        </InfoContainer>
                </ArtistInfo>
            </ArtistLayout>
            <ButtonAlign>
                <Button onClick={newPair}> <h1>Go again</h1></Button>
            </ButtonAlign>
            
        </StyledArtistGuesser>                
      </>
        )
      : ""
    );
}
  export default ArtistGuesser;
  