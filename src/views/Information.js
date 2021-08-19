import React from 'react'
import { 
  Box,
  Paragraph,
  Heading,
  Image,
  ResponsiveContext,
  Stack,
} from 'grommet';
import { Scrollbars } from 'react-custom-scrollbars';

import WhitepaperPDF from '../assets/documents/CatNIPWhitepaper.pdf';

import catalystCat from '../assets/catalyst.png';

import BackgroundBox from '../components/Background';
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import Menu from '../components/Menu';

const Information = (props) => {
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
          <Image alt="..." src={catalystCat}/>
          <Heading color='white'>INFORMATION</Heading>
          <Scrollbars
            renderThumbVertical={({ style, ...props }) => 
              <div {...props} style={{ ...style, backgroundColor: 'rgba(255, 255, 255, 0.75)', right: "20px", top: "20px" }} />
            }
            style={{
                    height: 550,
                    width: `${size !== 'small' ? '40%' : '95%'}`,
                    borderRadius: "30px",
                    background: "rgba(0, 0, 0, 0.1)",
                  }}
          >
            <Box align='center' style={{padding: '30px'}}>
              <Paragraph color='white'>CatNIP is a Financial Ecosystem for NFT Games!
                <br></br>
                Please see our whitepaper <a
                  style={{
                    color: "yellow"
                  }}
                  target="_blank"
                  href={WhitepaperPDF}
                  rel="noreferrer"
                  >here</a>

                <br></br>

                NIP Contract: <a style={{color: "yellow"}} target="_blank" href="https://bscscan.com/address/0x9Fa8F2418b35B7ac487604DDD00229d97f005599" rel="noreferrer" >0x9Fa8F2418b35B7ac487604DDD00229d97f005599</a>
                <br></br>
                NFT Contract: <a style={{color: "yellow"}} target="_blank" href="https://bscscan.com/address/0xd48E6504874FAd77FF01352112Dbc699698651E0" rel="noreferrer" >0xd48E6504874FAd77FF01352112Dbc699698651E0</a>
                  
                <br></br>
              </Paragraph>
              <Paragraph
                color='white'
                style={{
                  textAlign: "left"
                }}
              >
                Total Supply: 1,000,000,000 (1 Billion) NIP
                <br></br>
                Public Supply: &nbsp;&nbsp;80% - 800,000,000 NIP
                <br></br>
                Airdrop Supply: 5% - 50,000,000 NIP
                <br></br>
                Unlocked Team Supply: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;6% - 60,000,000 NIP 
                <br></br>
                Locked Team Supply: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;9% - 90,000,000 NIP 
              </Paragraph>
              <Paragraph
                color='white'
                weight='bold'
                style={{
                  textAlign: "left"
                }}
              >
                CatNIP has a 2% Liquidity, 2% Holder, and 1% Team tax.
                <br></br>
                Whale Blocker - Max transfer of 1,000,000 NIP per 24 hours.
                <br></br>
                Bot Blocker - CatNIP uses a unique system to put an end to bot scalping.
              </Paragraph>
              <Paragraph
                color='white'
                style={{
                  textAlign: "left"
                }}
              >
                CatNIP has a small PreSale of 1 BNB with a small soft cap.
                <br></br>
                The NIP contract is safeguarded with a Gnosis Safe Multisig.
              </Paragraph>
              <Paragraph
                color='white'
                style={{
                  textAlign: "left"
                }}
              >
                The CatNIP Wave 1 Airdrop will only be available to those who
                <br></br>
                had PAW in their wallet on March 20th, 2021.
                <br></br>
                For more details please read the whitepaper.
              </Paragraph>
              <Paragraph
                color='white'
                
                style={{
                  textAlign: "left"
                }}
              >
                CatNIP Battler is a cat collection and battle game.
                <br></br>
                Players battle their NFT cats and collect more!
                <br></br>
                NIP is used to mint NFTs. The marketplace is coming later.

              </Paragraph>
              <Paragraph
                color='white'
                style={{
                  textAlign: "left"
                }}
              >
                Exchange listings are top priority for CatNIP.
                <br></br>
                The NIP team has very much planned. Please join Discord or Telegram for updates.
              </Paragraph>
            </Box>
          </Scrollbars>
          </Box>
        </Stack>
        <Footer/>
      </BackgroundBox>
    )}
    </ResponsiveContext.Consumer>
  )
}

export default Information
