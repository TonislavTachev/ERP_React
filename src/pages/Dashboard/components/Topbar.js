import { PersonOutlineOutlined } from '@mui/icons-material'
import { IconButton, Typography } from '@mui/material'
import { makeStyles } from '@mui/styles'
import React from 'react'

const Topbar = () => {
   const classes = useStyles()

   return (
      <div className={classes.container}>
         <div className={classes.upperHeader}>
            <div style={{ display: 'flex' }}>
               <Typography
                  sx={{
                     color: '#d8d8d8',
                     marginTop: '8px',
                     marginRight: '8px',
                  }}
               >
                  Dashboard
               </Typography>
            </div>
            <div style={{ display: 'flex' }}>
               <Typography
                  sx={{
                     color: '#d8d8d8',
                     marginTop: '8px',
                     marginRight: '8px',
                  }}
               >
                  Hi, Tonislav
               </Typography>
               <IconButton>
                  <PersonOutlineOutlined sx={{ color: '#d8d8d8' }} />
               </IconButton>
            </div>
         </div>
      </div>
   )
}

const useStyles = makeStyles((theme) => ({
   container: {
      width: '100%',
      height: '60px',
      paddingLeft: '50px',
      paddingRight: '50px',
      boxSizing: 'border-box',
      background: '#1f2a40',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
   },
   upperHeader: {
      display: 'flex',
      justifyContent: 'space-between',
   },
}))

export default Topbar
