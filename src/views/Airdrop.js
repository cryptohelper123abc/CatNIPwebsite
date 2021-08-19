import React, {useState, useEffect} from 'react'
import { 
  Image,
  Heading,
  Paragraph,
  ResponsiveContext,
  Box,
  Stack,
} from 'grommet';
import BackgroundBox from '../components/Background';
import PrimaryButton from '../components/PrimaryButton';
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import lepCat from '../assets/lepurrchaun.png';
import leaf from '../assets/leafTeal.png';
import Menu from '../components/Menu';
import { Scrollbars } from 'react-custom-scrollbars';

import detectEthereumProvider from '@metamask/detect-provider'
import Web3 from 'web3';

import configData from '../config.json';

const Airdrop = (props) => {
  const [metaMaskAddress, setMetaMaskAddress] = useState(null);
  const [web3, setWeb3] = useState(null);
  const [airDropContract, setAirDropContract] = useState(null);
  const [total, setTotal] = useState(null);
  const [allClaimed, setAllClaimed] = useState(null);
  const [leftToClaim, setLeftToClaim] = useState(null);
  const [partialClaimed, setPartialClaimed] = useState(null);


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

    const contract = new web3.eth.Contract(configData.abi, configData.address);
    setAirDropContract(contract);
  }

  const connectWallet = async () => {
    // Set default account 
    let accounts = await web3.givenProvider.request({ method: 'eth_requestAccounts' });
    setMetaMaskAddress(accounts[0]);
    var catNIPContractAddress = '0x9Fa8F2418b35B7ac487604DDD00229d97f005599';
    airDropContract.methods.TotalBalanceOfAirdropTokenForUserAddressTimeSystem(accounts[0], catNIPContractAddress).call().then((result) => {setTotal((result / Math.pow(10,9)))});
    airDropContract.methods.isFullyClaimedAirDrop(accounts[0], catNIPContractAddress).call().then((result) => {setAllClaimed((result / Math.pow(10,9)))});
    airDropContract.methods.LeftBalanceOfAirdropTokenForUserAddressTimeSystem(accounts[0], catNIPContractAddress).call().then((result) => {setLeftToClaim((result / Math.pow(10,9)))});
    airDropContract.methods.AmountOfAirdropAvailableToClaim(accounts[0], catNIPContractAddress).call().then((result) => {setPartialClaimed((result / Math.pow(10,9)))});
  }

  const claimAirdrop = async () => {
    var catNIPContractAddress = '0x9Fa8F2418b35B7ac487604DDD00229d97f005599';
    await airDropContract.methods.AirDropClaimTimerSystem(catNIPContractAddress)
      .send({
        from: metaMaskAddress
      })
      .once('receipt', (receipt) => {
        const amountOfAirDropLeft = 10;
        let stringBuildForAirdropAmount = "You have claimed your airdrop! For now, you now have " + amountOfAirDropLeft + " NIP to claim."
        console.log(stringBuildForAirdropAmount);
      });
  }

  useEffect(() => {
    initWeb3();
  },[]);

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
            <Image alt="..." src={lepCat}/>
            <Heading color='white'>CATNIP AIRDROP</Heading>
            <Paragraph fill size='large' textAlign='center' color='white'>Do you have an airdrop? Click "Connect to CatNIP" to see!</Paragraph>
            <Box align='center' style={{
                padding: '15px', 
                width: `${size !== 'small' ? '40%' : '95%'}`,
                height: 600,
                borderRadius: "30px",
                background: "rgba(0, 0, 0, 0.1)",}}
            >
              <Paragraph size='xlarge' color='white'>Total Airdrop Amount: {total}</Paragraph>
              <br/>
              <Paragraph size='xlarge' color='white'>Airdrop Left to Claim: {leftToClaim}</Paragraph>
              <br/>
              <Paragraph size='xlarge' color='white'>Airdrop available to Claim: {partialClaimed} </Paragraph>
              <br/>
            </Box>
          <Box direction='row-responsive' margin='large'>
            <PrimaryButton onClick={connectWallet} greyedOut={false} image={leaf} name={metaMaskAddress ? `${metaMaskAddress.substring(0,8)}...` : 'Connect to CatNIP'}/>
            <PrimaryButton onClick={claimAirdrop} greyedOut={metaMaskAddress ? false : true} image={leaf} name='Claim Airdrop'/>
          </Box>
          <Paragraph size='large' textAlign='center' color='white'>Check back next week for more Airdrop to Claim!</Paragraph>
          </Box>
        </Stack>
        <Footer/>
      </BackgroundBox>
    )}
    </ResponsiveContext.Consumer>
  )
}

export default Airdrop