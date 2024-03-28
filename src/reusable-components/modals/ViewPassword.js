import { Typography } from '@mui/material'
import { makeStyles } from '@mui/styles'
import React from 'react'

const ViewPassword = ({ company }) => {
   const classes = useStyles()

   return (
      <div className={classes.modalWrapper}>
         <div className={classes.columnWrapper}>
            <div className={classes.leftColumn}>
               <div className={classes.row}>
                  <Typography className={classes.label}>Name</Typography>
                  <Typography className={classes.value}>
                     ALK Logistics LLC
                  </Typography>
               </div>
               <div className={classes.row}>
                  <Typography className={classes.label}>Phone</Typography>
                  <Typography className={classes.value}>
                     (691) 252 - 3535
                  </Typography>
               </div>
               <div className={classes.row}>
                  <Typography className={classes.label}>Address</Typography>
                  <Typography className={classes.value}>
                     Gutenbergstrasse 6
                  </Typography>
               </div>
               <div className={classes.row}>
                  <Typography className={classes.label}>City</Typography>
                  <Typography className={classes.value}>Ulm</Typography>
               </div>
               <div className={classes.row}>
                  <Typography className={classes.label}>State</Typography>
                  <Typography className={classes.value}>
                     Baden Württemberg
                  </Typography>
               </div>
               <div className={classes.row}>
                  <Typography className={classes.label}>Zip</Typography>
                  <Typography className={classes.value}>89705</Typography>
               </div>
               <div className={classes.row}>
                  <Typography className={classes.label}>
                     Contact Name
                  </Typography>
                  <Typography className={classes.value}>Alim Mahon</Typography>
               </div>
               <div className={classes.row}>
                  <Typography className={classes.label}>Ein</Typography>
                  <Typography className={classes.value}>76543332</Typography>
               </div>
            </div>
            <div className={classes.rightColumn}>
               <div className={classes.row}>
                  <Typography className={classes.label}>Fax</Typography>
                  <Typography className={classes.value}>N/A</Typography>
               </div>
               <div className={classes.row}>
                  <Typography className={classes.label}>U.S.Dot</Typography>
                  <Typography className={classes.value}>76655</Typography>
               </div>
               <div className={classes.row}>
                  <Typography className={classes.label}>MC</Typography>
                  <Typography className={classes.value}>65644</Typography>
               </div>
               <div className={classes.row}>
                  <Typography className={classes.label}>FEIN</Typography>
                  <Typography className={classes.value}>665654</Typography>
               </div>
               <div className={classes.row}>
                  <Typography className={classes.label}>Bank name</Typography>
                  <Typography className={classes.value}>BOA</Typography>
               </div>
               <div className={classes.row}>
                  <Typography className={classes.label}>
                     Account number
                  </Typography>
                  <Typography className={classes.value}>787864648</Typography>
               </div>
               <div className={classes.row}>
                  <Typography className={classes.label}>
                     Routing number
                  </Typography>
                  <Typography className={classes.value}>995368</Typography>
               </div>
               <div className={classes.row}>
                  <Typography className={classes.label}>Adress</Typography>
                  <Typography className={classes.value}>
                     Pritt-Writz Strasse
                  </Typography>
               </div>
            </div>
         </div>
      </div>
   )
}

const useStyles = makeStyles((theme) => ({
   modalWrapper: {
      display: 'flex',
      flexDirection: 'column',
   },
   columnWrapper: {
      display: 'flex',
   },
   leftColumn: {
      flex: '1',
   },
   rightColumn: {
      flex: '1',
   },
   label: {
      marginBottom: '5px !important',
      fontSize: '15px !important',
      color: '#8c51fd !important',
   },
   value: {
      fontSize: '18px !important',
      color: '#d8d8d8 !important',
      marginBottom: '5px !important',
   },
}))

export default ViewPassword
