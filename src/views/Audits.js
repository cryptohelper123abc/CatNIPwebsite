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

import BlockAuditCertImg from '../assets/audits/BlockAuditCert.jpg';
import BlockAuditCertPDF from '../assets/audits/BlockAuditCatNIP.pdf';

import Menu from '../components/Menu';
const Audits = (props) => {
  return (
    <ResponsiveContext.Consumer>
      {size => (
        <BackgroundBox >
          <NavBar sideBarOpen={props.sideBarOpen} setSideBarOpen={props.setSideBarOpen} />
          <Stack>
            <Menu sideBarOpen={props.sideBarOpen} />
            <Box
              direction='column'
              align='center'
              overflow={{ horizontal: 'hidden' }}
              height='100vh'
            >
              <Heading margin='small' color='white'>Audits:</Heading>
              <a style={{color: "yellow"}} target="_blank" href={BlockAuditCertPDF} rel="noreferrer" >
              <Box height="xlarge" width="xlarge" margin="none">
              
              
                <Image
                  fit="contain"
                  src={BlockAuditCertImg}
                  margin="none"
                  
                />
                
              </Box>
              </a>



              <Footer />
            </Box>
          </Stack>
        </BackgroundBox>
      )}
    </ResponsiveContext.Consumer>
  )
}

export default Audits