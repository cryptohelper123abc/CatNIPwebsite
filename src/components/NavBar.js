import React from 'react';
import { 
  Box,
  Nav,
  ResponsiveContext,
  Image,
} from 'grommet';
import Burger from './Burger';
import NavButton from '../components/NavButton'
import logo from '../assets/catnipbattlerlogo.png'
// image for navbar
// <Image src={logo} style={{width: `${size !== 'small' ? '10%' : '1px'}`, minWidth: '70px', height: 'auto'}}/>
const NavBar = (props) => {

  return(
    <ResponsiveContext>
      {size => (
      <Box
        tag='header'
        direction='row'
        align='center'
        pad={{ left: 'medium', right: 'small', vertical: 'small' }}
        elevation='medium'
        style={{ zIndex: '1' }}
        height='80px'
        style={{background: '#fdff7a'}}
        {...props}
      >
        { size !== 'small' ? 
        <Nav direction="row" justify='between' flex>
          <Box direction='row' gap='small'>
            <NavButton to='/' name="home" />
            
          </Box>
          <Box direction='row' gap='small'>
            {/* <NavButton to='/dxsale' name="DXSale" /> */}
            <NavButton to='/audits' name="Audits" />
            <NavButton to='/bundles' name="Bundles" />
            <NavButton to='/game' name="game" />
            <NavButton to='/info' name="Info" />
            <NavButton to='/buy' name="Buy" />
            <NavButton to='/airdrop' name="Airdrop" />
            <NavButton to='/socials' name="Socials" />
            <NavButton to='/team' name="Team" />

          </Box>
        </Nav>
        :
        <Box direction='row' align='center' justify='between' flex>
          <Burger sideBarOpen={props.sideBarOpen} setSideBarOpen={props.setSideBarOpen}/>
          <NavButton to='/' name="home" />
        </Box>
        }
      </Box>
      )}
    </ResponsiveContext>
  );
}
export default NavBar
