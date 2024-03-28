import { Skeleton } from '@mui/material'
import React from 'react'

const TableSkeleton = () => {
   return (
      <Skeleton
         variant="rounded"
         width={'100%'}
         height={600}
         sx={{ background: '#fffafa1c', borderRadius: '13px' }}
      />
   )
}

export default TableSkeleton
