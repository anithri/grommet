import React from 'react'
import getUnicodeFlagIcon from 'country-flag-icons/unicode'
import {Text} from 'grommet'

export const OfficeFlag = ({office_location_type, ...props}) => {
  const flag = getUnicodeFlagIcon(office_location_type)
  return (<Text as="span" {...props}>{flag}</Text>)
}
