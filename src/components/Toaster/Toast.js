import React from 'react'
import {Validate} from 'grommet-icons'
import {Grid, Header, Heading, Text, Box} from 'grommet'

const areas = []

const toastGridOpts = {
  rows: ['small', 'small'],
  columns: ['small', 'auto'],
  gap: 'xxsmall',
  areas: [
    {name: 'title', start: [1, 0], end: [1, 0]},
    {name: 'icon', start: [0, 0], end: [0, 1]},
    {name: 'message', start: [1, 1], end: [1, 1]},
  ]
}

export const Toast = ({status = 'info', size = 'medium', title, message, icon, ...props}) => {
  return (
      <Box background="status-ok"  width="large" height="medium">
        <Grid pad="small" background="status-ok" {...toastGridOpts} >
          <Box gridArea="icon" align="center" justify="center">
            <Validate size="xlarge" />
          </Box>
          <Header gridArea="title" background="status-ok">
            <Heading level="4">{title}</Heading>
          </Header>
          <Box background="status-ok" gridArea="message">
            <Text>{message}</Text>
          </Box>
        </Grid>
      </Box>
  )
}


const mkToast = (overrideOpts = {}) => {
  return props => {
    const opts = {...overrideOpts, ...props}
    return (
        <Toast {...opts} />
    )
  }
}

const standardToast = {
  success: mkToast({status: 'ok', icon: Validate})
}
