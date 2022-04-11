import styled from 'styled-components'

export const LoginColor = styled.div`
background-color: #112426;
`
export const StyledLogin = styled.div`
    text-align: center;
    font-family: Helvetica neue, sans-serif;
    color: #cccf9f;
    text-shadow: 1px 1px 5px #1F1021;
    min-height: 100vh;
    min-width: 100vw;
    background-image: url('/headphone2.svg');
    background-position: top right;
    background-repeat: no-repeat;
    background-size: 65%;
    
    
    h1{
        font-size: 4.5rem;
        letter-spacing: 0.3rem;
        font-weight: bold;
        padding: 0 0 60px 0;
        
    }

    p{
        font-size: 2.0rem;
        letter-spacing: 0.1rem;
    }

    img{
        width: 150px; 
        position: absolute;
        top: 0;
        left: 0;
    }
    
`

export const Container = styled.header`
    margin: 0 auto;
    width: 80vw;
    height: 100vh; 
`

export const Flex = styled.div`
    margin: 0 auto;
    gap: 2rem;
    height: 100%;
    width: 60%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    h1{
        margin: 0 0 50px 0;
    }
`