import React from 'react'
import { 
  Box,
  ResponsiveContext,
  Stack,
  Heading,
} from 'grommet';
import BackgroundBox from '../components/Background';
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import Menu from '../components/Menu';
import SocialMediaCard from '../components/SocialMediaCard';
import discordLogo from '../assets/discordLogo.png';
import twitterLogo from '../assets/twitterLogo.png';
import telegramLogo from '../assets/telegramLogo.png';

const Socials = (props) => {
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
              justify='center'
              overflow={{ horizontal: 'hidden' }}
              height='100vh'
            >
              <Heading color='white'>Join our community!</Heading>
              <Box direction='row' gap='small'>
                <SocialMediaCard to='https://discord.gg/wDqrC88QJW' name='discord' image={discordLogo}/>
                <SocialMediaCard to='https://twitter.com/CatnipToken' name='twitter' image={twitterLogo}/>
                <SocialMediaCard to='https://t.me/CatNIPen' name='telegram' image={telegramLogo}/>
              </Box>
            </Box>
          </Stack>
          <Footer/>
        </BackgroundBox>
      )}
    </ResponsiveContext.Consumer>
  )
}

export default Socials