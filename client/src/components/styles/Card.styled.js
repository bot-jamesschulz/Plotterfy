import styled from 'styled-components'


export const CardLayout = styled.div`
    min-width: 50%;
    min-height: 50%;
    display: flex;
    flex-wrap: wrap;
    gap: 1%;
    //justify-content: space-evenly;
    //border: 3px solid black;
    
    a {
        text-decoration: none;
    }
    h1 { 
        
        color: #EEEEEE;
        font-weight: bold;
        font-size: 2em;
        font-family: Helvetica neue, sans-serif;
        padding: 40px 20px;
        text-align: center;
        
       
        text-shadow: 0.5px 0.5px 3px black;
    }
    
    p {
        color: #dbdbdb;
        font-weight: bold;
        font-size: 1.5em;
        font-family: Helvetica neue, sans-serif;
        padding: 10px 30px;
       
        text-shadow: 1px 1px 5px black;
   
    }
    div ~ div {
        
    }
    /* img {
        width: 300px;
        height: 300px;
        object-fit: cover;
        object-position: bottom left;
        border-radius: 18%;
        margin: 30px;
    } */
`

export const FlexCard = styled.div`
    
    /* background-image: url('/microphoneBlack.svg');
    background-repeat: no-repeat;
    background-size: 45%;
    background-position: center; */

    box-shadow: 1px 1px 10px 0px black;
    background-color: ${({bg}) => bg};
    text-align: center;
    width: 30rem;
    height: 20rem;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    //margin: 0 0 70px ${({layout}) => layout || '20%'};
    padding: 0 20px;
    

    &:hover {
        transform: scale(1.1);
        transition: all 0.5s;
        box-shadow: 0px 20px 50px 0px ${({bg}) => bg};
        cursor: pointer;
    }

    

  

`

