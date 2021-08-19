import React from 'react'
import { 
  Box,
  Heading,
  Paragraph,
  Image,
  ResponsiveContext,
} from 'grommet';

const TeamMember = (props) => {
  return (
    <ResponsiveContext.Consumer>
      {size => (
        <Box className="styleOutlineHome" direction='column' align='center' pad='xxsmall'>
          <Image style={{ width: `${size !== 'small' ? '50%' : '50%'}`, height: 'auto'}} src={props.image}/>
          <Heading style={{margin: '8px'}} color='white' level='3'>{props.name}</Heading>
          <Paragraph style={{margin: '8px'}} textAlign='center' color='white'>{props.description}</Paragraph>
        </Box>
      )}
    </ResponsiveContext.Consumer>
  )
}

export default TeamMember
