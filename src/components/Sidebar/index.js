import {Card, CardBody, CardFooter, CardHeader, Heading, Text, Box, Distribution} from 'grommet'
import {OfficeFlag} from '../OfficeFlag'
import React from 'react'

const colors = {AU: 'red', CA: 'blue', US: 'green'}

const makeDistroData = data => Object.entries(colors)
    .map(([office, color]) => {
      return {
        office_location_type: office,
        color,
        value: data.filter(({office_location_type}) => office_location_type == office).length
      }
    })


export const Sidebar = ({gridArea, data, ...props}) => {

  return (
      <Box pad="small">
        <Card gridArea={gridArea} width={'auto'} height="full" background="light-1">
          <CardHeader size="Medium" pad={{
            horizontal: 'small',
            vertical: 'xsmall'
          }} background="cpp-blue-dark">
            <Heading level={2} margin={'none'} size="Large">Header</Heading>

          </CardHeader>

          <CardBody background="cpp-blue-light">
            <Distribution values={makeDistroData(data)}>
              {value => (
                  <Box pad="small" background={value.color} fill>
                    <OfficeFlag {...value} size="xxlarge" />
                    <Text size="large" color="white">{value.office_location_type} - {value.value}</Text>
                  </Box>
              )}
            </Distribution>
            Body!!!
          </CardBody>

          <CardFooter background="cpp-blue" color="white"><Text color="white">Footer</Text></CardFooter>
        </Card>
      </Box>
  )
}
