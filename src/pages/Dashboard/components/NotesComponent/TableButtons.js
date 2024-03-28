import {
   ContentCopyOutlined,
   ExitToAppOutlined,
   LocalPrintshopOutlined,
} from '@mui/icons-material'
import { Button, ButtonGroup, TextField } from '@mui/material'
import { makeStyles } from '@mui/styles'
import { format } from 'date-fns'
import React, { useEffect, useState } from 'react'
import { CSVLink } from 'react-csv'
import { getExportHeaderData } from '../utils'

const TableButtons = ({ tableDataToExport, tableType }) => {
   const [headerDataForCSV, setHeaderDataForCSV] = useState([])
   const [csvData, setCSVData] = useState([])

   const classes = useStyles()
   const fileName = `${format(new Date(), 'dd.MM.yyy')}-${tableType}.csv`

   const downloadCSV = (event, done) => {
      const csvData = tableDataToExport.map((item) => {
         const { action, ...restOfItem } = item
         return restOfItem
      })
      setCSVData(csvData)
      done(true)
   }

   useEffect(() => {
      if (tableType !== undefined) {
         let headers = getExportHeaderData(tableType)
         setHeaderDataForCSV(headers)
      }
   }, [])

   return (
      <div className={classes.exportAndSearch}>
         <ButtonGroup
            sx={{
               '& button': {
                  background: '#2C3E50',
               },
            }}
         >
            <Button
               size="small"
               variant="contained"
               startIcon={<ContentCopyOutlined />}
               disableElevation
            >
               Copy
            </Button>
            <Button
               size="small"
               variant="contained"
               startIcon={<ExitToAppOutlined />}
               disableElevation
            >
               <CSVLink
                  data={csvData}
                  headers={headerDataForCSV || []}
                  filename={fileName}
                  asyncOnClick={true}
                  onClick={downloadCSV}
                  style={{ textDecoration: 'none', color: '#FFF' }}
               >
                  Export csv
               </CSVLink>
            </Button>
            <Button
               size="small"
               variant="contained"
               startIcon={<LocalPrintshopOutlined />}
               disableElevation
            >
               Print
            </Button>
         </ButtonGroup>
         <TextField
            placeholder="Search"
            size="small"
            sx={{
               background: '#2C3E50',
               borderRadius: '10px',
            }}
            className={classes.input}
         />
      </div>
   )
}

const useStyles = makeStyles((theme) => ({
   exportAndSearch: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginBottom: '20px',
      height: '40px',
   },
   input: {
      '& .MuiInputBase-root': {
         color: '#FFF !important',
      },
   },
}))

export default TableButtons
