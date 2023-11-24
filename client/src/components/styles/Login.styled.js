import styled from 'styled-components'

export const LoginColor = styled.div`
background-color: #0E1D1E;
`
export const StyledLogin = styled.div`
    text-align: center;
    font-family: Helvetica neue, sans-serif;
    color: #cccf9f;
    text-shadow: 1px 1px 5px #1F1021;
    min-height: 100vh;
    min-width: 100vw;
    background-image: url('/headphone2.svg');
    background-position: center right;
    background-repeat: no-repeat;
    background-size: 65%;

    display: flex;
    flex-direction: column;
    
    
    h1{
        font-size: 1.5rem;
        letter-spacing: 0.3rem;
        font-weight: bold;
        padding-top: 7rem;
    }
    @media (min-width: 640px) {
        h1{
            font-size: 2.5rem;
        }
    }

    p{
        font-size: 2.0rem;
        letter-spacing: 0.1rem;
    }

    img{
        width: 150px; 
        position: absolute;
        top: -10px;
        left: -10px;
    }
    
`

export const Container = styled.header`
    margin:  auto;
    width: 80vw;
    height: 100vh; 

`

export const Flex = styled.div`
    margin: 0 auto;
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    
    @media (min-width: 1024px) {
        width: 60%;
    }

    h1{
        margin: 0 0 50px 0;
    }
`