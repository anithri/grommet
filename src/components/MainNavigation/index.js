import React from 'react'
import {Accordion, AccordionPanel, List, Box, Button, Collapsible, Text, Layer} from 'grommet'
import {FormClose} from 'grommet-icons'

const projects = [
  {name: 'Home', url: '/'},
  {name: 'Project Request', url: '/'},
  {name: 'Pending Requests', url: '/'},
  {name: 'Advanced Search', url: '/'},
]

const reports = [
  {name: 'Financial', url: '/'},
  {name: 'Contracts', url: '/'},
  {name: 'Hit Rate', url: '/'},
  {name: 'KPI', url: '/'},
  {name: 'All', url: '/'},
]

const ActionUrl = ({name, url, idx}) => {
  return (<a href={url}>{name}</a>)
}

export const MainNavigation = ({showSidebar, closeSidebar}) => {
  return (
      <Collapsible direction="horizontal" open={showSidebar}>
        <Layer animate={true}
               full="vertical"
               background="dark-3"
               modal={false}
               onEsc={closeSidebar}
               position="right">
          <Box
              flex
              width="medium"
              background="light-2"
              elevation="small"
              align="center"
              justify="center"
              height="100%"
          >
            <Button onClick={closeSidebar} icon={<FormClose />} />
            <Accordion>
              <AccordionPanel label="Projects">
                <Box>
                  <List primaryKey="name" data={projects} children={ActionUrl} />
                </Box>
              </AccordionPanel>
              <AccordionPanel label="Reports">
                <Box>
                  <List primaryKey="name" data={reports} action={ActionUrl} />
                </Box>
              </AccordionPanel>
            </Accordion>
            sidebar - Hidden
          </Box>
        </Layer>
      </Collapsible>
  )
}
