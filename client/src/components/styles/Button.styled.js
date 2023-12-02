import styled from 'styled-components'

export const Button = styled.button`
    color: #0E1D1E;
    font-size: 1.75rem;
    font-weight: bold;
    width: 200px;
    height: 50px;
    border: 1px solid #bfa280;
    border-radius: 25px;
    background-color: #bfa280;
    opacity: 9;
    box-shadow: 0px 5px 20px black;
    &:hover {
        transform: scale(1.05);
        transition: all 0.2s;
        cursor: pointer;
    }
`