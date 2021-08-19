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
const DXSale = (props) => {
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
              <Heading margin='small' color='white'>COMING SOON!</Heading>
              <Footer/>
            </Box>
          </Stack>
        </BackgroundBox>
      )}
    </ResponsiveContext.Consumer>
  )
}

export default DXSale