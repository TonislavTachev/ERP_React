import React from 'react'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogContentText from '@mui/material/DialogContentText'
import DialogTitle from '@mui/material/DialogTitle'
import Button from '@mui/material/Button'
import { makeStyles } from '@mui/styles'

const TransportionModalWrapper = ({
   title,
   open,
   handleCloseModal,
   handleConfirm,
   modalContent,
   disableeButtonText,
   confirmButtonText,
   dialogStyles,
   cancelButtonStyles,
   confirmButtonStyles,
   showConfirmButton = true,
}) => {
   return (
      <Dialog
         open={open}
         onClose={handleCloseModal}
         PaperProps={{
            style: dialogStyles,
         }}
         disableScrollLock
      >
         {title !== '' && (
            <DialogTitle sx={{ color: '#d8d8d8' }}>{title}</DialogTitle>
         )}
         <DialogContent>{modalContent}</DialogContent>
         <DialogActions>
            <Button
               autoFocus
               onClick={handleCloseModal}
               sx={cancelButtonStyles}
            >
               {disableeButtonText}
            </Button>
            {showConfirmButton && (
               <Button
                  autoFocus
                  onClick={handleConfirm}
                  sx={confirmButtonStyles}
               >
                  {confirmButtonText}
               </Button>
            )}
         </DialogActions>
      </Dialog>
   )
}

TransportionModalWrapper.defaultProps = {
   title: '',
   dialogStyles: {},
   confirmButtonStyles: {},
   cancelButtonStyles: {},
}

export default TransportionModalWrapper
