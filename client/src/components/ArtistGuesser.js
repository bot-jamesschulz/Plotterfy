import axios from 'axios'
import React, { useEffect, useState, useRef } from 'react'
import {Card, Button, Container, Row, Col} from 'react-bootstrap'


function ArtistGuesser() {
    const artistInfoArr = useRef([]) // Top 99 artists, called on initial render
    const [answer, setAnswer] = useState({}) // Answer text to be displayed
    const randA = useRef(0) // Random number for 1st artist in pair
    const randB = useRef(0) // Random number for 2nd artist in pair
    
    useEffect(() => {
        const url = 'http://localhost:3001/artist-guesser'
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
            randA.current = Math.floor(Math.random() * 98)
            randB.current = Math.floor(Math.random() * 98)

            let newArtistPair = [{
                answer: "",
                id: artistInfoArr.current[randA.current].id,
                name: artistInfoArr.current[randA.current].name,
                followers: artistInfoArr.current[randA.current].followers,
                image: artistInfoArr.current[randA.current].image

            }, 
            {
                answer: "",
                id: artistInfoArr.current[randB.current].id,
                name: artistInfoArr.current[randB.current].name,
                followers: artistInfoArr.current[randB.current].followers,
                image: artistInfoArr.current[randB.current].image
            }]
            //console.log(randA.current, " ", randB.current)

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
        randA.current = Math.floor(Math.random() * 98)
        randB.current = Math.floor(Math.random() * 98)

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

        //console.log(randA.current, " ", randB.current)
        const newAns = {
            ...answer,
            showFollowers: false,
            artistPair: newArtistPair.map(artist => artist)
        }
        
        setAnswer(newAns)
    }
   
    // 
    const imageClick = (artistA, artistB) => {
        console.log("asdasd")  
       
        let newAnswer = {
            ...answer,
            showFollowers: true,
            answer: artistA.followers > artistB.followers ? "Correct" : "Incorrect",
           
        }
        console.log(newAnswer)
        setAnswer(newAnswer)
        

    }

 
    
    //console.log("Artist pair: ", artistPair)
    console.log("Artist array: ",artistInfoArr)
    return (

        artistInfoArr.current.length !== 0 ? (
      <div className="text-center" >
        <h1>Guess which artist has more followers</h1>
        <Container>
        <Row>
        <Col>

        <div onClick={(e) => imageClick(answer.artistPair[0], answer.artistPair[1])}>
        
        <Card className="mx-auto p-1 m-1" style={{ width: '30rem' }}>
            <Card.Img variant="top" src={answer.artistPair[0].image} height="470" />
            <Card.Body>
                <Card.Title className="h1">{answer.artistPair[0].name}</Card.Title>
                {answer.showFollowers ? (
                <Card.Text>
                    {answer.artistPair[answer.artistPair.findIndex(x => x.name === answer.artistPair[0].name)].followers}
                    {} Followers
                </Card.Text>
                ) : null}
            </Card.Body>
        </Card>
        </div>
        </Col>
        <Col>
        <div onClick={(e) => imageClick(answer.artistPair[1], answer.artistPair[0])}>
        <Card className="mx-auto p-1 m-1" style={{ width: '30rem' }}>
            <Card.Img variant="top" src={answer.artistPair[1].image} height="470"/>
            <Card.Body>
                <Card.Title className="h1">{answer.artistPair[1].name}</Card.Title>
                {answer.showFollowers ? (
                <Card.Text>
                
                    {answer.artistPair[answer.artistPair.findIndex(x => x.name === answer.artistPair[1].name)].followers}
                    {} Followers
                
                
                </Card.Text>
                ) : null}
                {console.log(answer.showFollowers)}
            </Card.Body>
        </Card>
        </div>
        </Col>
        </Row>
    
        <h3>{answer.answer}</h3> 
        <Button 
            variant="outline-dark"
            onClick={newPair}> Next
        </Button>
        
      
        </Container>
      </div>
        )
      : ""
    );
}
  export default ArtistGuesser;
  