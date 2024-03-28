import React, { useState } from 'react'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TablePagination from '@mui/material/TablePagination'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
import IconButton from '@mui/material/IconButton'
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined'
import ModeEditOutlineOutlinedIcon from '@mui/icons-material/ModeEditOutlineOutlined'
import { makeStyles } from '@mui/styles'
import { getTableHeaderMapper } from '../../pages/Dashboard/components/utils'

const TransportationTable = ({
   data,
   tableHeaderData,
   actionButtons,
   tableType,
}) => {
   const classes = useStyles()

   const getTableHeaders = (data) => {
      const tableHeaderMapper = getTableHeaderMapper(tableType)

      return data.map((label, index) => (
         <TableCell align="left" key={index} sx={{ padding: '13px' }}>
            {tableHeaderMapper[label]}
         </TableCell>
      ))
   }

   const getTableRow = (data) => {
      return data.map((item) => {
         return (
            <TableRow sx={{ background: '#1f2a40' }}>
               {Object.keys(item).map((data, dataIndex) => {
                  return data === 'action' ? (
                     <TableCell
                        sx={{
                           borderBottom: '1px solid rgba(81, 81, 81, 1)',
                           padding: '13px',
                        }}
                     >
                        {actionButtons(item)}
                     </TableCell>
                  ) : (
                     <TableCell
                        sx={{
                           borderBottom: '1px solid rgba(81, 81, 81, 1)',
                           color: '#d8d8d8',
                           padding: '13px',
                        }}
                     >
                        {item[data]}
                     </TableCell>
                  )
               })}
            </TableRow>
         )
      })
   }

   return (
      <div>
         <TableContainer component={Paper}>
            <Table sx={{ minWidth: 700 }} size="medium">
               <TableHead
                  sx={{
                     background: '#3e4396',
                  }}
               >
                  <TableRow
                     sx={{
                        '& .MuiTableCell-root': {
                           color: '#d8d8d8',
                           borderBottom: 'none',
                        },
                     }}
                  >
                     {getTableHeaders(tableHeaderData)}
                  </TableRow>
               </TableHead>
               <TableBody>{getTableRow(data)}</TableBody>
            </Table>
            <TablePagination
               rowsPerPageOptions={[5, 10, 25]}
               component="div"
               className={classes.tablePagination}
               count={data.length}
               rowsPerPage={10}
               page={1}
               //    onPageChange={handleChangePage}
               //    onRowsPerPageChange={handleChangeRowsPerPage}
            />
         </TableContainer>
      </div>
   )
}

const useStyles = makeStyles((theme) => ({
   tableHeader: {
      '& .MuiTableHead-root': {
         background: '#3e4396 !important',
      },
   },
   tablePagination: {
      background: '#3e4396',
      color: '#d8d8d8 !important',
      '& svg': {
         color: '#d8d8d8',
      },
   },
   deleteNotesDialogStyles: {
      width: '450%',
   },
}))

export default TransportationTable
