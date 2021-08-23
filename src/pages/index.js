import React, {useState} from 'react'
import {
  Box,
  Heading,
  Grommet,
  Grid,
  Card, CardHeader, CardBody, CardFooter
} from 'grommet'
import {ProjectTable} from '../components/ProjectTable'
import {graphql} from 'gatsby'
import {PageHeader} from '../components/PageHeader'
import {Sidebar} from '../components/Sidebar'
import {MainNavigation} from '../components/MainNavigation'

const theme = {
  global: {
    colors: {
      brand: '#228BE6',
      'cpp-blue-dark': '#16549d',
      'cpp-blue-light': '#c5d4e6',
      'cpp-blue': '#5b87ba',
      'cpp-orange-light': '#f69c00',
      'cpp-orange-dark': '#d48c00',
    },
    font: {
      family: 'Roboto',
      size: '14px',
      height: '20px',
    },
  },
}

export const App = props => {
  console.log('App.props', props)
  const [showSidebar, toggleSidebar] = useState(false)
  const data = props.data.allProjectDataJson.nodes
  return (
      <Grommet theme={theme} full>
        <Grid rows={['xxsmall', 'auto']}
              columns={['auto', 'medium']}
              areas={[
                {name: 'header', start: [0, 0], end: [1, 0]},
                {name: 'main', start: [0, 1], end: [0, 1]},
                {name: 'sidebar', start: [1, 1], end: [1, 1]}
              ]}
              gap={'small'}
              overflow={{ horizontal: 'hidden' }}
        >
          <PageHeader gridArea={'header'} subtitle="Main Page" showSidebar={showSidebar} toggleSidebar={toggleSidebar}/>
          <ProjectTable gridArea={'main'} data={data} pad="small" showSidebar={showSidebar} />
          <Sidebar gridArea={'sidebar'} data={data} />
          <MainNavigation showSidebar={showSidebar} closeSidebar={() => toggleSidebar(false)} />
        </Grid>
      </Grommet>
  )
}

export const query = graphql`
  query HomePageQuery {
    allProjectDataJson {
      nodes {
        name
        office_location_type
        id
        itar_flag
        status
      }
    }
  }
`

export default App
