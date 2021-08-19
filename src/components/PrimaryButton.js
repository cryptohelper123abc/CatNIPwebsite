import React from 'react'

import { 
    Button,
    Image
  } from 'grommet';
import styled from 'styled-components';


const StyledButton = styled(Button)`
    font-size: 50px;
    text-align: center;
    min-width: 300px;
    min-height: 80px;
    font-size: 22px;
    text-transform: uppercase;
    letter-spacing: 1.3px;
    font-weight: 700;
    color: #00a99e;
    background: ${({ greyedOut }) => greyedOut ? '#cccccc' : '#fbed24'};
    border-color: #000000;
    border-style: solid;
    border-radius: 1000px;
    cursor: pointer;
    outline: none;
    padding: 10px;
    text-decoration: none;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.3s ease-in-out;

    &:hover {
        opacity: ${({ greyedOut }) => greyedOut ? '1' : '0.8'};
        color: #00a99e;
        transform: ${({ greyedOut }) => greyedOut ? 'scale(1)' : 'scale(0.9)'};
    }
    
`

const PrimaryButton = (props) => {
    return (
        <StyledButton onClick={props.onClick} margin='medium' greyedOut={props.greyedOut}>
          <Image src={props.image} height={64} width={64} margin={{right: 'medium'}}/>
          {props.name}
        </StyledButton>
    );
}

export default PrimaryButton

