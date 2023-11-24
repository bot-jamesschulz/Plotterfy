import styled from 'styled-components'


export const StyledTopSongs = styled.div`
    a{
        text-decoration: none;
    }
    *{
        font-family: Helvetica neue, sans-serif;
    }
    display: flex;
    flex-direction: column;
    align-items: end;
    padding-right: 20vw;
`

export const SongMenuContainer = styled.div`
    width: 15vw;
    margin: 100px 53vw 0 0;
    color: #bfa280;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: start;
    gap: 1rem;

    @media (min-width: 640px) {
        width: 5vw;
        margin: 50px 38vw 0 0;
    }
    @media (min-width: 1024px) {
        width: 12vw;
        max-width: 145px;
        height: 30vh;
        padding: 5vh 0;
        margin: 50px 0 0 200px;
        background-color:rgba(0, 0, 0, 0.0);
        color: #bfa280;
        display: flex;
        flex-flow: column;
        align-items: start;
        position: fixed;
        top: 0;
        left: 6vw;
        bottom: 0;
        border-radius: 20px;
    }
`

export const SongButton = styled.button`
    font-size: 1.4rem;
    text-align: left;
    background-color:rgba(0, 0, 0, 0.0);
    color: #EEEEEE;
    border: none;

    opacity: 0.9;
    
    &:hover {
        transform: scale(1.1);
    }

    
`
export const SongListContainer = styled.div`
    width: 70vw;
    height: content-fit;
    display: flex;
    flex-direction: column;
    
    @media (min-width: 640px) {
        width: 55vw;
        max-width: 438px;
        height: content-fit;
        display: flex;
        flex-flow: column;
    } 

    @media (min-width: 1024px) {
        padding-top: 5rem;
    } 
`
export const StyledTrack = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 10px;
    font-size: 1rem;
    font-family: Helvetica neue, sans-serif;
    color: #d1d4be;
    border: 1px solid black;
    border-top-style: none;
    border-left-style: none;
    border-right-style: none;
    border-radius: opx;
    box-shadow: 0 2px 5px -5px black;

    &:hover {
        transition: all 0.25s;
        padding: 0 0 0 10px;
        cursor: pointer;
    }
    img{
        height: 75px;
        width: 75px;
        border-radius: 50%;
    }
    div{
        width: 20rem;
        padding: 0 5px 0 5px;
        margin: auto auto;
        text-align: center;
    }
    h5{
        color: #cccf9f;
        font-weight: bold;
        
    }
    h3{
        text-align: right;
        opacity: 0.9;
        
    }
`

export const Selected = styled.div`
    font-weight: bold;
    opacity: 10;   
`


