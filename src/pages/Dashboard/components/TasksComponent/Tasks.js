import { LinearProgress, Typography } from '@mui/material'
import { makeStyles } from '@mui/styles'
import React from 'react'

const Tasks = () => {
   const classes = useStyles()

   return (
      <div className={classes.container}>
         <Typography
            sx={{ color: '#d8d8d8', fontSize: '30px', marginBottom: '20px' }}
         >
            Tasks
         </Typography>
         <div className={classes.tasksWrapper}>
            <div className={classes.totalTask}>
               <Typography sx={{ fontSize: '26px', color: '#70d8bd' }}>
                  Total
               </Typography>
               <div className={classes.taskCounter}>
                  <Typography sx={{ fontSize: '50px', color: '#70d8bd' }}>
                     29
                  </Typography>
                  <Typography
                     sx={{
                        color: '#d8d8d8',
                        marginTop: '32px',
                        fontSize: '20px',
                     }}
                  >
                     tasks are due
                  </Typography>
               </div>
               <LinearProgress variant="determinate" value={75} />
            </div>
            <div className={classes.totalTask}>
               <Typography sx={{ fontSize: '26px', color: '#70d8bd' }}>
                  Today
               </Typography>
               <div className={classes.taskCounter}>
                  <Typography sx={{ fontSize: '50px', color: '#70d8bd' }}>
                     3
                  </Typography>
                  <Typography
                     sx={{
                        color: '#d8d8d8',
                        marginTop: '32px',
                        fontSize: '20px',
                     }}
                  >
                     tasks are due
                  </Typography>
               </div>
               <LinearProgress variant="determinate" value={90} />
               <div
                  className={classes.taskCounter}
                  style={{ marginTop: '10px' }}
               >
                  <Typography sx={{ fontSize: '50px', color: '#70d8bd' }}>
                     16
                  </Typography>
                  <Typography
                     sx={{
                        color: '#d8d8d8',
                        marginTop: '32px',
                        fontSize: '20px',
                     }}
                  >
                     tasks were performed today
                  </Typography>
               </div>
            </div>
         </div>
      </div>
   )
}

const useStyles = makeStyles((theme) => ({
   container: {
      flex: 1,
      padding: '20px 50px 0px 50px',
      flexDirection: 'column',
   },
   tasksWrapper: {
      display: 'flex',
      gap: '20px',
   },
   totalTask: {
      flex: '1',
      background: '#1f2a40',
      padding: '40px',
      borderRadius: '10px',
      height: '220px',
   },
   taskCounter: {
      display: 'flex',
      gap: '10px',
      marginTop: '30px',
   },
}))

export default Tasks
