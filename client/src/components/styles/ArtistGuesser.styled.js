import styled from 'styled-components'


export const StyledArtistGuesser = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    background-color: #0E1D1E;

    *{
        font-family: Helvetica neue, sans-serif;
        color: white;
        text-decoration: none;
        color: #bfa280;
        
    }
`
export const ArtistLayout = styled.div`
    
    padding: 2rem 0 0 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    @media (min-width: 640px) {
        margin: 0 6rem 0 12rem;
        padding-top: 5%;
        flex-direction: row;
    }
`
export const ArtistImage = styled.img`
    border-radius: 50%;
    height: 30vw;
    max-height: 410px;
    width: 30vw;
    max-width: 410px;

    &:hover {
        cursor: pointer;
        transform: scale(1.1);
        transition: all 0.25s;
        box-shadow: 0px 20px 50px 0px black;
        
    }
`
export const ArtistInfo = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`
export const Button = styled.button`
    
    width: 300px;
    height: 100px;
    border: none;
    border-radius: 50px;
    background-color: #AF6464;
    opacity: 9;
    box-shadow: 0px 5px 20px black;


    &:hover {
        cursor: pointer;
        transform: scale(1.05);
        //padding: 0 0 0 10px;
        transition: all 0.25s;
    }
    *{
        color: #EEEEEE;
        text-shadow: 1px 1px 5px black;
    }
`
export const AnswerAlign = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    @media (min-width: 640px) {
        justify-content: end;
    }
`
export const ButtonAlign = styled.div`
    margin-bottom: 1rem;
    align-self: center;
    @media (min-width: 640px) {
        margin: 2rem 6rem 2rem 12rem;
    } 
`
export const AnswerContainer = styled.div`
    width: 8rem;
    display: flex;
    justify-content: center;
    margin: 1rem 0 1rem 0;
    *{
        color: #EEEEEE;
        text-shadow: 1px 1px 5px black;
    }
`
export const InfoContainer = styled.div`
    margin-top: 1rem;
    height: 5rem; 
    display: flex;
    flex-direction: column;
    align-items: center;
    //justify-content: center;
    & div {
        color: #d1d4be;
    }
    h2{
        font-size: 1.5em;
        text-align: center;
    }
`
export const TopInfo = styled.div`
    margin: 8rem 0 0 1rem;
    color: white;
    h1{
        color: white; 
    }
    @media (min-width: 640px) {
        margin: 2rem 0 0 10rem;
    }
`