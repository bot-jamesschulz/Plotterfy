import styled from 'styled-components'


export const HomeStyle = styled.div`
    background-image: url('/top1.svg');
    background-position: bottom left;
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-size: 75%;
    min-height: calc(60vh - 40px);
    max-width: 90%;
    margin: 0 auto;
    color: #cccf9f;
    & > *{
        font-family: Helvetica neue, sans-serif;
        font-weight: bold;
        letter-spacing: 0.2rem;
              
    }
    h1 {
        
        font-size: 4em;
        
        padding: 40px 5px;
        flex: 2;
    }

    p {
        font-size: 3em;
        padding: 0 50px;
        align-self: flex-end;
        flex: 1;
    }

`
export const LowerStyle = styled.div`
    min-width: 100%;
    height:fit-content;
    margin: 0;
    background-color: #301934;
`
export const LowerContainer = styled.div`
    width: 80vw;
    padding: 50px 0;
    height: fit-content;
    margin: 0 auto;
`
