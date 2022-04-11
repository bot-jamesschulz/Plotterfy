import styled from 'styled-components'



export const StyledTopSongs = styled.div`
    /* background-color: #112426;
    background-image: url('/speaker4.svg');
    background-position: 25% 75%;
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-size: 35%; */
    a{
        text-decoration: none;
    }

    *{
        font-family: Helvetica neue, sans-serif;
    }
`
export const ColumnContainer = styled.div`
    display: flex;

    /* & > * {
        border: 2px solid blue;
    } */
`


export const SongMenuContainer = styled.div`
    width: 12vw;
    height: 30vh;
    padding: 5vh 0;
    margin: 50px 0 0 300px;
    //border: 1px solid black;
    background-color:rgba(0, 0, 0, 0.0);
    color: #bfa280;
    display: flex;
    flex-flow: column;
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    //box-shadow: 2px 1px 20px -20px black;
    
    /* & * {
        border: 1px solid black;
    } */
    border-radius: 20px;
    
   
   

    
`
export const SongButton = styled.button`
    font-size: 1.5rem;
    text-align: left;
    //margin: 5px 0;
    background-color:rgba(0, 0, 0, 0.0);
    color: #EEEEEE;
    width: 90%;
    height: 90%;

    border: none;
    border-bottom: 1px solid white;
    opacity: 0.9;
    
    &:hover {
        font-weight: bold;
    }
    
`
export const SongListContainer = styled.div`
    width: 32vw;
    height: content-fit;
    padding: 10vh 0;
    margin: 0 0 0 45vw;
    display: flex;
    flex-flow: column;
    
    
    
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
    //box-shadow: 1px 1px 3px black;

    /* & > *{
        border: 1px solid black; 
    } */

    &:hover {
        //transform: scale(1.01);
        transition: all 0.25s;
        padding: 0 0 0 10px;
        //box-shadow: 0px 20px 50px 0px ${({bg}) => bg};
        cursor: pointer;
    }
    

    img{
        height: 75px;
        width: 75px;
        border-radius: 50%;
    }

    div{
        width: 20rem;
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
    font-size: 1.5rem;
    opacity: 10;
    
    
`


