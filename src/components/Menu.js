import React from 'react';
import styled from 'styled-components';
  import { 
    Nav,
  } from 'grommet';
  import NavButton from './NavButton'

export const StyledMenu = styled(Nav)`
  display: flex;
  flex-direction: column;
  background: #fdff7a;
  height: 100vh;
  width: 50%;
  text-align: left;
  padding: 2rem;
  position: relative;
  transition: transform 0.3s ease-in-out;
  transform: ${({ sideBarOpen }) => sideBarOpen ? 'translateX(0)' : 'translateX(-100%)'};
  z-index: 10;
`;

const Menu = ({sideBarOpen}) => {
    return (
      <StyledMenu sideBarOpen={sideBarOpen} direction='column' justify='start'>
        {/* <NavButton to='/dxsale' name="DXSale" />
        <NavButton to='/bundles' name="Bundles" />
        <NavButton to='/game' name="game" />
        <NavButton to='/info' name="Info" />
        <NavButton to='buy' name="Buy" />
        <NavButton to='airdrop' name="Airdrop" />
        <NavButton to='socials' name="Socials" />
        <NavButton to='team' name="Team" /> */}

                    {/* <NavButton to='/dxsale' name="DXSale" /> */}
                    <NavButton to='/audits' name="Audits" />
            <NavButton to='/bundles' name="Bundles" />
            <NavButton to='/game' name="game" />
            <NavButton to='/info' name="Info" />
            <NavButton to='/buy' name="Buy" />
            <NavButton to='/airdrop' name="Airdrop" />
            <NavButton to='/socials' name="Socials" />
            <NavButton to='/team' name="Team" />

      </StyledMenu>
    )
  }
  export default Menu;