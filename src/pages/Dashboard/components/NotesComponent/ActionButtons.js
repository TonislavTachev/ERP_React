import {
   DeleteOutlineOutlined,
   ModeEditOutlineOutlined,
   InfoOutlined,
} from '@mui/icons-material'
import { IconButton } from '@mui/material'
import React from 'react'
const ActionButtons = ({
   setItemToBeDelete,
   item,
   setEditItem,
   setItemToView,
}) => {
   return (
      <div style={{ display: 'flex', gap: '10px' }}>
         {setItemToView !== undefined && (
            <IconButton
               sx={{ background: '#8c51fd', borderRadius: '22%' }}
               onClick={() => setItemToView(item)}
            >
               <InfoOutlined sx={{ color: '#FFF' }} />
            </IconButton>
         )}
         <IconButton
            sx={{ background: '#70d8bd', borderRadius: '22%' }}
            onClick={() => setEditItem(item)}
         >
            <ModeEditOutlineOutlined sx={{ color: '#FFF' }} />
         </IconButton>
         <IconButton
            sx={{ background: '#EA2027', borderRadius: '22%' }}
            onClick={() => setItemToBeDelete(item)}
         >
            <DeleteOutlineOutlined sx={{ color: '#FFF' }} />
         </IconButton>
      </div>
   )
}

export default ActionButtons
