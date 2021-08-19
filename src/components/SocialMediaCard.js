import React from 'react'
import { 
  Box,
  Image,
  Paragraph,
  Heading,
} from 'grommet';
import {
  Link
} from "react-router-dom";
import styled from 'styled-components';


const StyledLink = styled.a`
    width: 180px;
    padding: 15px;
    border-radius: 30px;
    background: rgba(0, 0, 0, 0.1);
    text-decoration: none;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
    transition: all 0.3s ease-in-out;

    &:hover {
      transform: scale(0.9);
    }
    
`
const SocialMediaCard = (props) => {
  return (
    <StyledLink href={props.to}>
      <Box width='xsmall'>
        <Image src={props.image}/>
      </Box>
      <Heading color='white' level={2}>{props.name}</Heading>
    </StyledLink>
  )
}

export default SocialMediaCard
