import React, {useState} from 'react'
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
import PrimaryButton from '../components/PrimaryButton';
import Menu from '../components/Menu';
import leaf from '../assets/leafTeal.png';

const Bundles = (props) => {
  const [pureNFT, setPureNFT] = useState(false);
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
            <Heading color='white'>Limited Time NFT Bundles!</Heading>
            <Box direction='row' style={{marginBottom: '50px'}}>
              <PrimaryButton onClick={() => setPureNFT(!pureNFT)} greyedOut={false} image={leaf} name='Claim NFT'/>
              <PrimaryButton onClick={() => setPureNFT(!pureNFT)} greyedOut={false} image={leaf} name='NFT only bundle'/>
            </Box>
            {
              pureNFT ?
              <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSdzq00ZCFhzBochnZbu_uiFcG4rjf1Xw-BYeC5HXrKFVSUSsQ/viewform?embedded=true" width="640" height="1746" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
                :
              <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSfdLwv7y_S9579ods8m9kW1NiePVn_5XC3pV9wmPCywkhugww/viewform?embedded=true" width="640" height="1454" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
            }
          </Box>
        </Stack>
        <Footer/>
      </BackgroundBox>
    )}
    </ResponsiveContext.Consumer>
  )
}

export default Bundles