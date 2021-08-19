import React from 'react'
import styled from 'styled-components';
import {
    Link
  } from "react-router-dom";

const StyledLink = styled(Link)`
  text-decoration: none;
`;

const LinkNoUnderline = () => {
    return (
        <StyledLink/>
    )
}

export default LinkNoUnderline
