import { Button, Typography } from '@mui/material'
import { makeStyles } from '@mui/styles'
import React, { useEffect, useState } from 'react'
import TransportationTable from '../../../../reusable-components/tables/TransportationTable'
import TransportionModalWrapper from '../../../../reusable-components/modals/TransportionModalWrapper'
import DeleteNotesModal from '../../../../reusable-components/modals/DeleteNotes'
import {
   cancelButtonStyles,
   confirmDeleteButtonStyles,
   confirmButtonStyles,
   deleteNotesDialogStyles,
} from '../utils'
import TableButtons from './TableButtons'
import ActionButtons from './ActionButtons'
import TableSkeleton from '../Skeletons/TableSkeleton'
import EditNotes from '../../../../reusable-components/modals/EditNotes'
import CreateNotes from '../../../../reusable-components/modals/CreateNotes'
import TableButtonsSkeleton from '../Skeletons/TableButtonsSkeleton'

const Notes = () => {
   const classes = useStyles()

   const [openDeleteNotesModal, setOpenDeleteNotesModal] = useState(false)
   const [openEditNotesModal, setOpenNotesModal] = useState(false)
   const [openCreateNotesModal, setOpenCreateNotesModal] = useState(false)
   const [itemToEdit, setItemToEdit] = useState(null)
   const [itemToDelete, setItemToDelete] = useState(null)
   const [tableData, setTableData] = useState(null)

   const getTableHeaderData = (data) => {
      return Object.keys(data[0])
   }

   const openCreateNotes = () => {
      setOpenCreateNotesModal(true)
   }

   const setItemToBeDelete = (item) => {
      setOpenDeleteNotesModal(true)
      setItemToDelete(item)
   }

   const cancelItemDeletion = () => {
      setItemToDelete(null)
      setOpenDeleteNotesModal(false)
   }

   const setEditItem = (item) => {
      setOpenNotesModal(true)
      setItemToEdit(item)
   }

   const closeModalBasedOnType = () => {
      const actionsWrappers = {
         edit: () => {
            setItemToEdit(null)
            setOpenNotesModal(false)
         },
         create: () => {
            setOpenCreateNotesModal(false)
         },
      }

      if (openEditNotesModal) {
         actionsWrappers['edit']()
      }

      if (openCreateNotesModal) {
         actionsWrappers['create']()
      }
   }

   const actionButtons = (item) => {
      return (
         <ActionButtons
            setItemToBeDelete={setItemToBeDelete}
            item={item}
            setEditItem={setEditItem}
         />
      )
   }

   useEffect(() => {
      setTimeout(() => {
         setTableData([
            {
               serialNumber: '1',
               name: 'ACH WILL BE ISSUED',
               notes: 'ACH WILL BE ISSUED',
               action: '',
            },
            {
               serialNumber: '2',
               name: 'ACH ISSUED',
               notes: 'ACH ISSUED',
               action: '',
            },
            {
               serialNumber: '3',
               name: 'CHECK WILL BE MAILED',
               notes: 'CHECK WILL BE MAILED',
               action: '',
            },
            {
               serialNumber: '1',
               name: 'ACH WILL BE ISSUED',
               notes: 'ACH WILL BE ISSUED',
               action: '',
            },
            {
               serialNumber: '2',
               name: 'ACH ISSUED',
               notes: 'ACH ISSUED',
               action: '',
            },
            {
               serialNumber: '3',
               name: 'CHECK WILL BE MAILED',
               notes: 'CHECK WILL BE MAILED',
               action: '',
            },
            {
               serialNumber: '2',
               name: 'ACH ISSUED',
               notes: 'ACH ISSUED',
               action: '',
            },
         ])
      }, 2000)
   }, [])

   return (
      <div className={classes.container}>
         <div className={classes.titleAndButton}>
            <Typography
               sx={{ color: '#d8d8d8', fontSize: '30px', marginBottom: '20px' }}
            >
               Notes
            </Typography>
            <Button
               variant="contained"
               disableElevation
               size="small"
               onClick={openCreateNotes}
            >
               Create Notes
            </Button>
         </div>
         {tableData !== null && tableData.length > 0 ? (
            <TableButtons tableDataToExport={tableData} tableType={'notes'} />
         ) : (
            <TableButtonsSkeleton />
         )}
         {tableData !== null && tableData.length > 0 ? (
            <TransportationTable
               data={tableData}
               tableHeaderData={getTableHeaderData(tableData)}
               actionButtons={actionButtons}
               tableType={'notes'}
            />
         ) : (
            <TableSkeleton />
         )}
         <TransportionModalWrapper
            title={'Delete note'}
            dialogStyles={deleteNotesDialogStyles}
            modalContent={
               <DeleteNotesModal
                  removeText={'Are you sure you want to delete this note?'}
                  subText={'This cannot be undone'}
               />
            }
            confirmButtonText={'Delete'}
            disableeButtonText={'Cancel'}
            open={openDeleteNotesModal}
            cancelButtonStyles={cancelButtonStyles}
            confirmButtonStyles={confirmDeleteButtonStyles}
            handleCloseModal={cancelItemDeletion}
         />
         <TransportionModalWrapper
            title={
               openEditNotesModal
                  ? 'Edit note'
                  : openCreateNotesModal
                  ? 'Create note'
                  : ''
            }
            dialogStyles={deleteNotesDialogStyles}
            modalContent={
               openEditNotesModal ? (
                  <EditNotes item={itemToEdit} />
               ) : openCreateNotesModal ? (
                  <CreateNotes />
               ) : null
            }
            confirmButtonText={'Confirm'}
            disableeButtonText={'Cancel'}
            open={openEditNotesModal || openCreateNotesModal}
            cancelButtonStyles={cancelButtonStyles}
            confirmButtonStyles={confirmButtonStyles}
            handleCloseModal={closeModalBasedOnType}
         />
      </div>
   )
}

const useStyles = makeStyles((theme) => ({
   container: {
      flex: 1,
      padding: '20px 50px 20px 50px',
      flexDirection: 'column',
   },
   titleAndButton: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      height: '40px',
      marginBottom: '20px',
   },
}))

export default Notes
