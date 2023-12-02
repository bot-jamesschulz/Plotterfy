import styled from 'styled-components'


export const CardLayout = styled.div`

    min-width: 50%;
    min-height: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1rem;

    @media (min-width: 1280px) {
        flex-direction: row;
    }
    
    a {
        text-decoration: none;
    }
    h1 { 
        
        color: #EEEEEE;
        font-weight: bold;
        font-size: 2em;
        font-family: Helvetica neue, sans-serif;
        padding: 40px 20px 0 20px;
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
`

export const FlexCard = styled.div`

    box-shadow: 1px 1px 10px 0px black;
    background-color: ${({bg}) => bg};
    text-align: center;
    width: 20rem;
    height: 20rem;
    border-radius: 100px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    padding: 0 20px;
    
    &:hover {
        transform: scale(1.1);
        transition: all 0.4s;
        box-shadow: 0px 20px 50px 0px ${({bg}) => bg};
        cursor: pointer;
    }

    

  

`

