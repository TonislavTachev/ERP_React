import { Skeleton } from '@mui/material'
import React from 'react'

const TableButtonsSkeleton = () => {
   return (
      <div
         style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginBottom: '20px',
         }}
      >
         <Skeleton
            variant="rounded"
            width={'20%'}
            height={45}
            sx={{ background: '#fffafa1c', borderRadius: '10px' }}
         />
         <Skeleton
            variant="rounded"
            width={'20%'}
            height={45}
            sx={{ background: '#fffafa1c', borderRadius: '10px' }}
         />
      </div>
   )
}

export default TableButtonsSkeleton
