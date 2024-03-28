import { Typography } from '@mui/material'
import { makeStyles } from '@mui/styles'
import React from 'react'
import { HiOutlineTrash } from 'react-icons/hi'
const DeleteNotes = ({ removeText, subText }) => {
   const classes = useStyles()

   return (
      <div className={classes.removeWrapper}>
         <div className={classes.removeIconWrapper}>
            <HiOutlineTrash className={classes.removeIcon} />
         </div>
         <div className={classes.removeTextWrapper}>
            <Typography sx={{ fontWeight: 600, color: '#d8d8d8' }}>
               {removeText}
            </Typography>
         </div>
         <div className={classes.subRemovetext}>{subText}</div>
      </div>
   )
}

const useStyles = makeStyles((theme) => ({
   removeWrapper: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignContent: 'center',
   },
   removeIconWrapper: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      marginBottom: '10px',
   },
   removeIcon: {
      height: '80px',
      width: '80px',
      color: '#5C70C9',
   },
   removeTextWrapper: {
      textAlign: 'center',
   },
   subRemovetext: {
      marginTop: '6px',
      fontSize: '12px',
      textAlign: 'center',
      color: '#bebebe',
   },
}))

export default DeleteNotes
