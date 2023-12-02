import styled from 'styled-components'

export const NavMenuContainer = styled.div`
        width: 100%;
        height: 5rem;
        background-color: #AF6464;
        display: flex;
        flex-direction: row;
        justify-content: space-evenly;
        position: fixed;
        top: 0;
        left: 0;
        bottom: 0;
        box-shadow: 0.1px 1px 5px 1px black;
        z-index: 1;

    @media (min-width: 640px) {
        width: 10vw;
        max-width: 8rem;
        min-width: 6rem;
        height: 100%;
        padding: 10vh 0px;
        background-color: #AF6464;
        display: flex;
        flex-flow: column;
        position: fixed;
        top: 0;
        left: 0;
        bottom: 0;
        box-shadow: 0.2px 1px 5px 1px black;
    }
    *{
        text-decoration: none;
    }
    
    border: none;
`
export const NavItem = styled.div`
    font-size: 1.0rem;
    text-align: center;
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