import { Button, Typography } from '@mui/material'
import { makeStyles } from '@mui/styles'
import React, { useEffect, useState } from 'react'
import TransportationTable from '../../../../reusable-components/tables/TransportationTable'
import TableButtons from '../NotesComponent/TableButtons'
import TableSkeleton from '../Skeletons/TableSkeleton'
import TableButtonsSkeleton from '../Skeletons/TableButtonsSkeleton'
import ActionButtons from '../NotesComponent/ActionButtons'
import TransportionModalWrapper from '../../../../reusable-components/modals/TransportionModalWrapper'
import {
   cancelButtonStyles,
   confirmButtonStyles,
   allPasswordsDialogStyle,
} from '../utils'
import ViewPassword from '../../../../reusable-components/modals/ViewPassword'
const AllPasswords = () => {
   const classes = useStyles()

   const [tableData, setTableData] = useState(null)
   const [itemToEdit, setItemToEdit] = useState(null)
   const [itemToDelete, setItemToDelete] = useState(null)
   const [openViewModal, setViewModal] = useState(false)

   const getTableHeaderData = (data) => {
      return Object.keys(data[0])
   }

   const setItemToBeDelete = () => {}
   const setEditItem = () => {}

   const closeViewModal = () => {
      setViewModal(false)
   }

   const setItemToView = () => {
      setViewModal(true)
   }

   useEffect(() => {
      setTimeout(() => {
         setTableData([
            {
               serialNumber: '1',
               name: 'ALK Logistics LLC',
               login: 'alklogistics@gmail.com',
               password: '123456',
               company: 'ALK Logistics LLC',
               dispatcher: 'Nate Magazini',
               notes: 'No notes supplied',
               action: '',
            },
            {
               serialNumber: '2',
               name: 'T&D Solutions LLC',
               login: 't&dsol@gmail.com',
               password: 'eX-sda8a923@5',
               company: 'T&D Solutions LLC',
               dispatcher: 'Nate Magazini',
               notes: 'No notes supplied',
               action: '',
            },
         ])
      }, 2000)
   }, [])

   const actionButtons = (item) => {
      return (
         <ActionButtons
            setItemToBeDelete={setItemToBeDelete}
            item={item}
            setEditItem={setEditItem}
            setItemToView={setItemToView}
         />
      )
   }

   return (
      <div className={classes.container}>
         <div className={classes.titleAndButton}>
            <Typography
               sx={{ color: '#d8d8d8', fontSize: '30px', marginBottom: '20px' }}
            >
               All passwords
            </Typography>
            <Button variant="contained" disableElevation size="small">
               Create password
            </Button>
         </div>
         {tableData !== null && tableData.length > 0 ? (
            <TableButtons
               tableDataToExport={tableData}
               tableType={'passwords'}
            />
         ) : (
            <TableButtonsSkeleton />
         )}
         {tableData !== null && tableData.length > 0 ? (
            <TransportationTable
               data={tableData}
               tableHeaderData={getTableHeaderData(tableData)}
               actionButtons={actionButtons}
               tableType={'passwords'}
            />
         ) : (
            <TableSkeleton />
         )}
         <TransportionModalWrapper
            title={'Company information'}
            dialogStyles={allPasswordsDialogStyle}
            modalContent={<ViewPassword />}
            disableeButtonText={'Close'}
            open={openViewModal}
            cancelButtonStyles={cancelButtonStyles}
            handleCloseModal={closeViewModal}
            showConfirmButton={false}
         />
         {/* <TransportionModalWrapper
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
         /> */}
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

export default AllPasswords
