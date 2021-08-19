import React from 'react'
import backgroundImage from '../assets/menu_background.png'

import styled from 'styled-components';

const Background = styled.div`
  background-image: url(${backgroundImage});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  top:0px;
  right:0px;
  bottom:0px;
  left:0px;
`;

const BackgroundBox = (props) => {
  return (
    <Background
      overflow={{ horizontal: 'hidden' }}
      {...props}
    />
  );
}

export default BackgroundBox
