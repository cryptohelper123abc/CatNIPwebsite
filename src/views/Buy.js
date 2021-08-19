import React from 'react'
import { 
  Heading,
  Image,
  Stack,
  ResponsiveContext,
  Box
} from 'grommet';
import BackgroundBox from '../components/Background';
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import pancakeCat from '../assets/pancake_flip.png';
import pcsLogo from '../assets/pcsLogo.png';
import PrimaryButton from '../components/PrimaryButton';
import Menu from '../components/Menu';

const Buy = (props) => {
  return (
    <ResponsiveContext.Consumer>
    {size => (
      <BackgroundBox>
        <NavBar sideBarOpen={props.sideBarOpen} setSideBarOpen={props.setSideBarOpen}/>
        <Stack>
          <Menu sideBarOpen={props.sideBarOpen}/>
          <Box
            direction='column'
            align='center'
            overflow={{ horizontal: 'hidden' }}
            height='100vh'
          >
            <Image style={{margin: '24px', width: `${size !== 'small' ? 'auto' : '50%'}`, height: 'auto'}} alt="..." src={pancakeCat}/>
            <Heading textAlign='center' color='white'>Coming soon to PancakeSwap!</Heading>
            <Heading textAlign='center' color='white'>Contract: <a  target="_blank" href="https://bscscan.com/address/0x9Fa8F2418b35B7ac487604DDD00229d97f005599" rel="noreferrer">0x9Fa8F2418b35B7ac487604DDD00229d97f005599</a></Heading>
            <PrimaryButton image={pcsLogo} name='Buy'/>
          </Box>
        </Stack>
        <Footer/>
      </BackgroundBox>
    )}
    </ResponsiveContext.Consumer>
  )
}

export default Buy
