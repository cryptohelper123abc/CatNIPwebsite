import React from 'react'
import {
  Link
} from "react-router-dom";
import { 
    ResponsiveContext,
  } from 'grommet';
import styled from 'styled-components';


const StyledLink = styled(Link)`
    font-size: 50px;
    text-align: center;
    min-width: ${({ size }) => size !== 'small' ? '128px' : '100px'};
    min-height: ${({ size }) => size !== 'small' ? '32px' : '16px'};
    font-size: 22px;
    text-transform: uppercase;
    letter-spacing: 1.3px;
    font-weight: 700;
    color: #ffff00 ;
    background: #00a99d;
    border-color: #000000;
    border-style: solid;
    border-radius: 10px;
    cursor: pointer;
    outline: none;
    padding: 10px;
    text-decoration: none;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.3s ease-in-out;

    &:hover {
      color: bfba00;
      background: #007c70;
      transform: scale(0.9);
    }
    
`

const NavLink = (props) => {
    return (
      <ResponsiveContext.Consumer>
        {size => (
          <StyledLink to={props.to} margin='medium' size={size} >
            {props.name}
          </StyledLink>
        )}
      </ResponsiveContext.Consumer>
    );
}

export default NavLink