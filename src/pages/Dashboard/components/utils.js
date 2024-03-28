export const deleteNotesDialogStyles = {
   width: '450px',
   borderRadius: '13px',
   background: '#2c3e50',
}

export const cancelButtonStyles = {
   background: '#24313f',
   color: '#d8d8d8',
   borderRadius: '8px',
}

export const confirmDeleteButtonStyles = {
   background: '#EA2027',
   color: '#d8d8d8',
   borderRadius: '8px',
}

export const confirmButtonStyles = {
   color: '#d8d8d8',
   borderRadius: '8px',
   background: '#1976d2',
}

export const allPasswordsDialogStyle = {
   width: '550px',
   borderRadius: '13px',
   background: '#2c3e50',
}

const notesTableHeaderMapper = {
   serialNumber: 'SN',
   name: 'Name',
   notes: 'Notes',
   action: 'Action',
}

const passwordsTableHeaderMapper = {
   serialNumber: 'SN',
   name: 'Name',
   login: 'Login',
   password: 'Password',
   company: 'Company',
   dispatcher: 'Dispatcher',
   notes: 'Notes',
   action: 'Action',
}

export const getTableHeaderMapper = (tableType) => {
   const tableHeaders = {
      notes: notesTableHeaderMapper,
      passwords: passwordsTableHeaderMapper,
   }

   return tableHeaders[tableType]
}

export const getExportHeaderData = (tableType) => {
   const exportHeaders = []

   let headers = getTableHeaderMapper(tableType)

   Object.keys(headers).map((key, index) => {
      if (key !== 'action') {
         let obj = {
            label: headers[key],
            key: key,
         }
         exportHeaders.push(obj)
      }
   })

   return exportHeaders
}
