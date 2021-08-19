import React from 'react'
import { 
  Box,
  ResponsiveContext,
  Image,
  Heading,
  Stack,
} from 'grommet';

import BackgroundBox from '../components/Background';
import Footer from '../components/Footer';
import NavBar from "../components/NavBar";
import CatNIPLogo from '../assets/CatNIPlogoIcon.png';
import Menu from '../components/Menu';

import WhitepaperPDF from '../assets/documents/CatNIPWhitepaper.pdf';

const Home = (props) => {
  return (
    <ResponsiveContext.Consumer>
      {size => (
        <BackgroundBox >
          <NavBar sideBarOpen={props.sideBarOpen} setSideBarOpen={props.setSideBarOpen}/>
          <Stack>
            <Menu sideBarOpen={props.sideBarOpen}/>
            <Box
              direction='column'
              align='center'
              overflow={{ horizontal: 'hidden' }}
              height='100vh'
            >

              <Image style={{margin: '24px', width: `${size !== 'small' ? 'auto' : '50%'}`, height: 'auto'}} src={CatNIPLogo}/>
              
              <Heading className="styleOutlineHome" margin='small' color='white' >WELCOME TO CATNIP!</Heading>
              
              <Heading className="styleOutlineHome" margin='none' color='white' level='3' textAlign='center'>CatNIP is a Cryptocurrency with an NFT Battler game.</Heading>

              <br></br>

              <Heading className="styleOutlineHome" margin='none' color='white' level='3' textAlign='center'>Please read our Whitepaper <a style={{ color: "yellow" }} target="_blank" href={WhitepaperPDF} rel="noreferrer">here</a></Heading>

              <br></br>

              <Heading className="styleOutlineHome" margin='none' color='white' level='3' textAlign='center'><a style={{color: "yellow"}} target="_blank" href="https://www.youtube.com/watch?v=uAQQfSardZ4" rel="noreferrer" >Watch</a>  the Game Demo!</Heading>
              
              <br></br>

              <Heading className="styleOutlineHome" margin='none' color='white' level='3' textAlign='center'>Play the <a style={{color: "yellow"}} target="_blank" href="https://catnip.world/game" rel="noreferrer" >Game </a>Now!</Heading>

              <br></br>

              <Heading className="styleOutlineHome" margin='none' color='white' level='3' textAlign='center'>NIP Contract: <a style={{color: "yellow"}} target="_blank" href="https://bscscan.com/address/0x9Fa8F2418b35B7ac487604DDD00229d97f005599" rel="noreferrer" >0x9Fa8F2418b35B7ac487604DDD00229d97f005599</a></Heading>
              
              <br></br>

              <Heading className="styleOutlineHome" margin='none' color='white' level='3' textAlign='center'>NFT Contract: <a style={{color: "yellow"}} target="_blank" href="https://bscscan.com/address/0xd48E6504874FAd77FF01352112Dbc699698651E0" rel="noreferrer" >0xd48E6504874FAd77FF01352112Dbc699698651E0</a></Heading>

              <Footer/>
            </Box>
          </Stack>
        </BackgroundBox>
      )}
    </ResponsiveContext.Consumer>
  )
}

export default Home