import styled from 'styled-components'

export const NavMenuContainer = styled.div`
    width: 12rem;
    height: 100vh;
    padding: 10vh 0px;
    background-color: #AF6464;
    display: flex;
    flex-flow: column;
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    *{
        text-decoration: none;
    }
    //border-radius: 10px;
    
    border: none;
    //box-shadow: 2px 2px 5px black;
    


    /* & > * {
        border: 2px solid blue;
    } */
    
`
export const NavItem = styled.div`
    font-size: 1.0rem;
    text-align: center;
    //text-shadow: 1px 1px 1px #1F1021;
    margin: 5px auto;
    color: #EEEEEE;
    width: 100%;
    height: fit-content;
    

    img{

        width: 30px;
        height: 45px;
    }
    
    &:hover {
        cursor: pointer;
        transition: all 0.25s;
        //padding: 0 0 0 10px;
        transform: scale(.9);
    }
    
`