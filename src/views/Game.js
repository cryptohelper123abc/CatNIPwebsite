import React, {useState, useEffect} from 'react'

import { 
  Box,
  ResponsiveContext,
  Image,
  Heading,
  Stack,
} from 'grommet';
import PrimaryButton from '../components/PrimaryButton';
import BackgroundBox from '../components/Background';
import Footer from '../components/Footer';
import NavBar from "../components/NavBar";
import battleLogo from '../assets/catnipbattlerlogo.png';
import leaf from '../assets/leafTeal.png';
import Menu from '../components/Menu';

import UnityGame from '../components/UnityGame';

import detectEthereumProvider from '@metamask/detect-provider'
import Web3 from 'web3';

import configFaucetData from '../faucetConfig.json';



const Game = (props) => {

  const [metaMaskAddress, setMetaMaskAddress] = useState(null);
  const [web3, setWeb3] = useState(null);
  const [faucetContract, setFaucetContract] = useState(null);

  const initWeb3 = async () => {
    console.log("[web3] getting provider...");
    const provider = await detectEthereumProvider()
    if (provider) {
      console.log('Ethereum successfully detected!');
    }else {
        alert("You have to use Trustwallet app or install Metamask extension in your browser to use this app, you can install it from :  https://metamask.io");
        return;
    }
    
    let web3 = new Web3(provider);

    console.log("[web3] got provider!");
    //set state
    setWeb3(web3);
    
    const id = await web3.eth.net.getId();

    const contract = new web3.eth.Contract(configFaucetData.abi, configFaucetData.address);
    setFaucetContract(contract);
  }

  const connectWallet = async () => {
    // Set default account 
    let accounts = await web3.givenProvider.request({ method: 'eth_requestAccounts' });
    setMetaMaskAddress(accounts[0]);
  }

  const claimFaucet = async () => {
    var catNIPContractAddress = '0xF6805C059470592B03d17d3e706B20501E7159Eb';
    await faucetContract.methods.FaucetClaim(catNIPContractAddress)
      .send({
        from: metaMaskAddress
      })
      .once('receipt', (receipt) => {
        let stringBuildForAirdropAmount = "You have claimed your 10k test CatNIP, you can only claim once per day."
        console.log(stringBuildForAirdropAmount);
      });
  }

  useEffect(() => {
    initWeb3();
  },[]);

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
              

              <UnityGame/>
              <Box direction='row-responsive' margin='none'>
                <PrimaryButton onClick={connectWallet} greyedOut={false} image={leaf} name={metaMaskAddress ? `${metaMaskAddress.substring(0,8)}...` : 'Connect to CatNIP'}/>
                <PrimaryButton onClick={claimFaucet} greyedOut={metaMaskAddress ? false : true} image={leaf} name='Get Test NIP from Faucet'/>
              </Box>
              <Footer/>
            </Box>
          </Stack>
        </BackgroundBox>
      )}
    </ResponsiveContext.Consumer>
  )
}

export default Game
