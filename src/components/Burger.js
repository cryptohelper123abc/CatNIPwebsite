import React from 'react';
import styled from 'styled-components';

const StyledBurger = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 2rem;
  height: 2rem;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 10;
  margin: 10px;

  &:focus {
    outline: none;
  }

  div {
    width: 2rem;
    height: 0.25rem;
    background: ${({ sideBarOpen }) => sideBarOpen ? '#00a99d' : '#00a99d'};
    border-radius: 10px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;

    :first-child {
      transform: ${({ sideBarOpen }) => sideBarOpen ? 'rotate(45deg)' : 'rotate(0)'};
    }

    :nth-child(2) {
      opacity: ${({ sideBarOpen }) => sideBarOpen ? '0' : '1'};
      transform: ${({ sideBarOpen }) => sideBarOpen ? 'translateX(20px)' : 'translateX(0)'};
    }

    :nth-child(3) {
      transform: ${({ sideBarOpen }) => sideBarOpen ? 'rotate(-45deg)' : 'rotate(0)'};
    }
  }
`;

const Burger = (props) => {
    return (
      <StyledBurger sideBarOpen={props.sideBarOpen} onClick={() => props.setSideBarOpen(!props.sideBarOpen)}>
        <div />
        <div />
        <div />
      </StyledBurger>
    )
  }
  
export default Burger;
