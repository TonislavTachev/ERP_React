import { TextField } from '@mui/material'
import { makeStyles } from '@mui/styles'
import React from 'react'

const EditNotes = ({ item }) => {
   const classes = useStyles()

   return (
      <div className={classes.removeWrapper}>
         <TextField
            placeholder="Name"
            size="small"
            value={item.name}
            sx={{
               background: '#24313f',
               borderRadius: '7px',
               marginBottom: '13px',
               '& .MuiOutlinedInput-notchedOutline': {
                  border: 'none',
               },
            }}
            className={classes.input}
            fullWidth
         />
         <TextField
            placeholder="Note"
            size="small"
            value={item.notes}
            sx={{
               background: '#24313f',
               borderRadius: '7px',
               '& .MuiOutlinedInput-notchedOutline': {
                  border: 'none',
               },
            }}
            className={classes.input}
            fullWidth
         />
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
   input: {
      '& .MuiInputBase-root': {
         color: '#FFF !important',
      },
   },
}))

export default EditNotes
