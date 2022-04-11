import styled from 'styled-components'


export const StyledArtistGuesser = styled.div`
    background-color: #112426;
    height: 100vh;
    width: 100%;
    
    

    *{
        font-family: Helvetica neue, sans-serif;
        color: white;
        text-decoration: none;
        color: #bfa280;
        
    }
`
export const ArtistLayout = styled.div`
    margin-left: 12rem;
    padding-top: 5%;
    display: flex;
    justify-content: center;
    
    //gap: 12rem;
    /* & > *{
        border: 2px solid black;
    } */
`
export const ArtistImage = styled.img`
    border-radius: 50%;
    height: 500px;
    width: 500px;

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
    
    width: 400px;
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
        //box-shadow: 0px 20px 50px 0px black;
        
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
`
export const ButtonAlign = styled.div`
    margin-left: 12rem;
    display: flex;
    justify-content: center;
   
`
export const AnswerContainer = styled.div`
    width: 15rem;
    display: flex;
    justify-content: center;
    

    *{
        color: #EEEEEE;
        text-shadow: 1px 1px 5px black;
    }
   
`
export const InfoContainer = styled.div`
    margin-top: 10%;
    height: 10rem; 
    display: flex;
    flex-direction: column;
    align-items: center;
    //justify-content: center;
    & div {
        color: #d1d4be;
    }
`