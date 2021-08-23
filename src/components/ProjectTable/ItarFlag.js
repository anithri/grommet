import {Checkmark} from 'grommet-icons'
import React from 'react'

export const ItarFlag = ({itar_flag}) => {
  console.log('ItarFlag', itar_flag)
  return itar_flag && <Checkmark size={'medium'}/>
}
