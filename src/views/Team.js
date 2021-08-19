import React from 'react'
import { 
  Grid,
  Heading,
  Box,
  ResponsiveContext,
  Stack,
} from 'grommet';
import Menu from '../components/Menu';
import BackgroundBox from '../components/Background';
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import TeamMember from '../components/TeamMember';
import nikolaiCat from '../assets/founder_nikolai.png';
import coffeeCat from '../assets/founder_coffeecat.png';
import yoshikoCat from '../assets/founder_yoshiko.png';
import raymondCat from '../assets/founder_raymond.png';
import sintCat from '../assets/founder_sint.png';
import alchymystCat from '../assets/founder_alchymyst.png';

const Team = (props) => {
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
            // missing height='100vh' caused double scroll bars. This page has enough content so no need
          >
            <Heading color='white'>THE CATNIP TEAM!</Heading>
            {size !== 'small' ?
            <Grid
              rows={['auto', 'auto']}
              columns={['medium', 'medium', 'medium']}
              
            >
              <TeamMember className="styleOutlineHome" image={nikolaiCat} name='Nikolai'
                description='Nikolai is the founder and lead game developer of the CatNIP project.'
              />
              <TeamMember className="styleOutlineHome" image={coffeeCat} name='Cat'
                description='Cat is the founder and lead manager of the CatNIP project.'
              />
              <TeamMember className="styleOutlineHome" image={yoshikoCat} name='Yoshiko'
                description='Yoshiko is the lead solidity smart contract developer of CatNIP.'
              />
              <TeamMember className="styleOutlineHome" image={raymondCat} name='Raymond'
                description='Raymond is a game artist of the CatNIP project.'
              />
              <TeamMember className="styleOutlineHome" image={sintCat} name='Sint'
                description='Sint is a game developer of the CatNIP project.'
              />
              <TeamMember className="styleOutlineHome" image={alchymystCat} name='Alchymyst'
                description='Alchymyst is a game artist powered by Coffee and Memes.'
              />
            </Grid>
            :
            <Grid
              rows={['auto', 'auto', 'auto', 'auto', 'auto', 'auto']}
              columns={['medium']}
            >
              <TeamMember className="styleOutlineHome" image={nikolaiCat} name='Nikolai'
                  description='Nikolai is the founder and lead game developer of the CatNIP project.'
                />
                <TeamMember className="styleOutlineHome" image={coffeeCat} name='Cat'
                  description='Cat is the founder and lead manager of the CatNIP project.'
                />
                <TeamMember className="styleOutlineHome" image={yoshikoCat} name='Yoshiko'
                  description='Yoshiko is the lead solidity smart contract developer of CatNIP.'
                />
                <TeamMember  className="styleOutlineHome" image={raymondCat} name='Raymond'
                  description='Raymond is a game artist of the CatNIP project.'
                />
                <TeamMember className="styleOutlineHome" image={sintCat} name='Sint'
                  description='Sint is a game developer of the CatNIP project.'
                />
                <TeamMember className="styleOutlineHome" image={alchymystCat} name='Alchymyst'
                  description='Alchymyst is a game artist powered by Coffee and Memes.'
                />
              </Grid>
            }
          </Box>
        </Stack>
        <Footer/>
      </BackgroundBox>
      )}
    </ResponsiveContext.Consumer>
  )
}

export default Team