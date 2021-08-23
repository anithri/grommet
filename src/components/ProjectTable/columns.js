import React from 'react'
import {Text} from 'grommet'
import {ItarFlag} from './ItarFlag'
import {OfficeFlag} from '../OfficeFlag'

export const columns = [
  {
    property: 'id',
    header: <Text>ID</Text>,
    primary: true,
    align: 'end'
  },
  {
    property: 'name',
    header: <Text>Name</Text>,
    primary: true
  },
  {
    property: 'status',
    header: <Text>Status</Text>,
    primary: true
  },
  {
    property: 'office_location_type',
    header: <Text>Office</Text>,
    primary: true,
    render: OfficeFlag
  },
  {
    property: 'itar_flag',
    header: <Text>ITAR</Text>,
    primary: true,
    render: ItarFlag
  }
]
