import {Box, Heading, Text, Button} from 'grommet'
import React from 'react'
import {Helmet} from 'react-helmet'
import {StaticImage} from 'gatsby-plugin-image'
import {Menu} from 'grommet-icons'

const AppBar = (props) => (
    <Box
        tag="header"
        direction="row"
        align="center"
        justify="between"
        background="cpp-blue"
        color="white"
        pad={{left: 'medium', right: 'small', vertical: 'small'}}
        elevation="medium"
        style={{zIndex: '1'}}
        {...props}
    />
)

export const PageHeader = ({gridArea, subtitle, showSidebar, toggleSidebar, ...props}) => {
  const title = subtitle ? `CPP Grommet - ${subtitle}` : 'CPP Grommet'
  return (
      <AppBar gridArea={gridArea}>
        <Helmet title={title} />
        <Heading level="3" margin="none"  color="white">
          <StaticImage src={'../../images/windlab-logo.png'} height={36} pad={{right: 'small'}} alt="CPP Logo"/>
         <Text as="span" size="xlarge" margin={{left: 'medium'}}>{subtitle}</Text>
        </Heading>
        <Button
            icon={<Menu color={'white'}/>}
            onClick={() => toggleSidebar(!showSidebar)}
        />
      </AppBar>
  )
}
