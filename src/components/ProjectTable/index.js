import {DataTable, Main, Box} from 'grommet'
import {columns} from './columns'
import React from 'react'
import {Toast} from '../Toaster'

export const ProjectTable = ({data, showSidebar, ...props}) => {
  return (
      <Main {...props}>
        <DataTable
            columns={columns}
            background={['white', 'light-2']}
            data={data}
            sortable={true}
        />
        <Box fill flex>
        <Toast status="ok"
               message="This is the message"
               title="It Worked!" />
        </Box>
      </Main>
  )
}
