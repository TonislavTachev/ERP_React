import {
   Button,
   Container,
   Divider,
   InputAdornment,
   OutlinedInput,
   Typography,
} from '@mui/material'
import { makeStyles } from '@mui/styles'
import React, { useEffect, useState } from 'react'
import { BsEye, BsEyeSlash, BsPerson } from 'react-icons/bs'
import { useNavigate } from 'react-router-dom'

const Login = () => {
   const classes = useStyles()

   const navigate = useNavigate()

   const [enableLoginButton, setLoginButton] = useState(false)
   const [showPassword, setShowPassword] = useState(false)

   const [user, setUser] = useState({
      username: '',
      password: '',
   })

   const onChangeUser = ({ target }) => {
      setUser({ ...user, [target.name]: target.value })
   }

   const onPasswordShow = () => {
      setShowPassword((prevState) => !prevState)
   }

   const onSubmit = () => {}

   useEffect(() => {
      if (user.password !== '' && user.email !== '') {
         setLoginButton(false)
      } else {
         setLoginButton(true)
      }
   }, [user])

   return (
      <Container className={classes.root}>
         <div className={classes.loginFormActual}>
            <div className={classes.iconHeader}>Login to your account</div>
            <div className={classes.loginInputs}>
               <div className={classes.inputContainer}>
                  <OutlinedInput
                     value={user.username}
                     placeholder="Username"
                     name="username"
                     onChange={onChangeUser}
                     fullWidth
                     sx={{
                        height: '45px',
                        borderRadius: '10px',
                        boxShadow: 'rgba(0, 0, 0, 0.16) 0px 1px 4px;',
                        '& .MuiOutlinedInput-notchedOutline': {
                           border: 'none',
                        },
                        '& .MuiInputBase-input': {
                           padding: '10px',
                           '-webkit-box-shadow': '0 0 0 100px #FFF inset',
                        },
                     }}
                     startAdornment={
                        <InputAdornment position="start">
                           <BsPerson />
                        </InputAdornment>
                     }
                     autoComplete="off"
                  />
               </div>
               <div className={classes.inputContainer}>
                  <OutlinedInput
                     value={user.password}
                     placeholder="Password"
                     name="password"
                     fullWidth
                     onChange={onChangeUser}
                     type={showPassword ? 'text' : 'password'}
                     sx={{
                        height: '45px',
                        borderRadius: '10px',
                        backgroundColor: '#FFF',
                        boxShadow: 'rgba(0, 0, 0, 0.16) 0px 1px 4px;',
                        '& .MuiOutlinedInput-notchedOutline': {
                           border: 'none',
                        },
                        '& .MuiInputBase-input': {
                           padding: '10px',
                           '-webkit-box-shadow': '0 0 0 100px #FFF inset',
                        },
                     }}
                     startAdornment={
                        !showPassword ? (
                           <InputAdornment position="start">
                              <BsEyeSlash
                                 onClick={onPasswordShow}
                                 style={{ cursor: 'pointer' }}
                              />
                           </InputAdornment>
                        ) : (
                           <InputAdornment position="start">
                              <BsEye
                                 onClick={onPasswordShow}
                                 style={{ cursor: 'pointer' }}
                              />
                           </InputAdornment>
                        )
                     }
                     autoComplete="off"
                  />
               </div>
               <Divider sx={{ marginTop: '25px', background: '#FFF' }} />
               <div
                  className={classes.buttonWrapper}
                  style={{ marginTop: '25px' }}
               >
                  <Button
                     type="submit"
                     onClick={onSubmit}
                     variant="contained"
                     disabled={enableLoginButton}
                     style={
                        enableLoginButton
                           ? {
                                borderRadius: '29px',
                                width: '100%',
                             }
                           : {
                                borderRadius: '29px',
                                background: '#635BFF',
                                color: '#FFF',
                                width: '100%',
                             }
                     }
                  >
                     LOG IN
                  </Button>
               </div>
               <div className={classes.forgotContainer}>
                  <Typography
                     className={classes.forgotText}
                     onClick={() => navigate('/login/reset')}
                     sx={{
                        color: '#343B5A',
                        marginTop: '10px',
                        textAlign: 'end',
                     }}
                  >
                     Forgot password?
                  </Typography>
               </div>
            </div>
         </div>
      </Container>
   )
}

const useStyles = makeStyles((theme) => ({
   root: {
      display: 'flex !important',
      flexDirection: 'column !important',
      alignItems: 'center !important',
      justifyContent: 'center !important',
      flexGrow: '1 !important',
   },
   containerWrapper: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      paddingTop: '63px',
      position: 'relative',
   },
   loginFormActual: {
      padding: '30px',
      width: '350px',
      height: '450px',
      background: '#FFF',
      boxShadow: '0px 8px 9px #635bff12',
      borderRadius: '13px',
      marginTop: '50px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
   },
   inputContainer: {
      width: '100%',
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'start',
      marginBottom: '20px',
      '&:nth-child(1)': {
         marginTop: '20px',
      },
   },
   loginButton: {
      backgroundColor: '#E54949',
      color: '#fff',
      marginTop: '50px',
      width: '200px',
      borderRadius: '39px',
      border: 'none',
   },
}))

export default Login
