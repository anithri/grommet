import {Card, CardBody, CardFooter, CardHeader, Heading, Text, Box, Distribution} from 'grommet'
import {OfficeFlag} from '../OfficeFlag'
import React from 'react'

const officeColors = {AU: 'red', CA: 'blue', US: 'green'}
const statusColors = {active: 'green', proposal: 'blue', preliminary: 'red'}

const makeOfficeDistroData = data => Object.entries(officeColors)
    .map(([office, color]) => {
      return {
        office_location_type: office,
        color,
        value: data.filter(({office_location_type}) => office_location_type === office).length
      }
    })

const makeStatusDistroData = data => Object.entries(statusColors)
    .map(([statusStr, color]) => {
      return {
        status: statusStr,
        color,
        value: data.filter(({status}) => status === statusStr).length
      }
    })

export const Sidebar = ({gridArea, data, ...props}) => {
  const d = makeOfficeDistroData(data)
  console.log(d)
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
            <Distribution values={d}>
              {value => (
                  <Box pad="small" background={value.color} fill>
                    <Text size="large" color="white">{value.status} - {value.value}</Text>
                  </Box>
              )}
            </Distribution>
            Body!!!
          </CardBody>

          <CardFooter background="cpp-blue" color="white">

          </CardFooter>
        </Card>
      </Box>
  )
}
