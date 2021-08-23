import {Box, DataTable, Text, Main} from 'grommet'
import {Checkmark} from 'grommet-icons'
import {columns} from './columns'
import React from 'react'


export const ProjectTable = ({data, showSidebar, ...props}) => {
  return (
      <Main {...props}>
        <DataTable
            columns={columns}
            background={['white', 'light-2']}
            data={data}
            sortable={true}
        />
        <Text as="p">Sidebar? {showSidebar ? 'true' : 'false'}</Text>
      </Main>
  )
}
