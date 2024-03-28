import React, { Suspense, useEffect, useState } from 'react'
import Sidebar from './components/Sidebar'
import { makeStyles } from '@mui/styles'
import Topbar from './components/Topbar'
import { useSelector } from 'react-redux'

const Dashboard = () => {
   const classes = useStyles()

   const [sidebarComponent, setSidebarComponent] = useState(null)

   const sidebarComponentIndex = useSelector(
      ({ sidebar }) => sidebar.sidebarComponentIndex
   )

   const components = {
      0: {
         title: 'Tasks',
      },
      1: {
         title: 'Notes',
      },
      2: {
         title: 'AllPasswords',
      },
   }

   const loadComponent = async (step) => {
      try {
         const Component = React.lazy(() =>
            import(
               `./components/${components[step].title}Component/${components[step].title}`
            )
         )
         setSidebarComponent(<Component />)
      } catch (error) {}
   }

   useEffect(() => {
      //initial load to load the tasks component
      loadComponent(0)
   }, [])

   useEffect(() => {
      if (sidebarComponentIndex !== undefined) {
         loadComponent(sidebarComponentIndex)
      }
   }, [sidebarComponentIndex])

   return (
      <div className={classes.container}>
         <Sidebar />
         <div className={classes.mainContainer}>
            <Topbar />
            <Suspense fallback={<div>Loading...</div>}>
               {sidebarComponent}
            </Suspense>
         </div>
      </div>
   )
}

const useStyles = makeStyles((theme) => ({
   container: {
      display: 'flex',
      flexDirection: 'row',
   },
   mainContainer: {
      display: 'flex',
      flex: '1',
      flexDirection: 'column',
   },
}))

export default Dashboard
