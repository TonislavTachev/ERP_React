import './App.css'
import { Provider } from 'react-redux'
import reduxStore from './store'
import { ThemeProvider } from '@mui/styles'
import {
   BrowserRouter as Router,
   Routes,
   Route,
   Redirect,
} from 'react-router-dom'
import { createTheme } from '@mui/material/styles'
import PrivateRoute from './routes/PrivateRoute'
import { ToastContainer } from 'react-toastify'
import LoginPage from './pages/Auth/Login'
import Dashboard from './pages/Dashboard/Dashboard'

const BREAKPOINTS = {
   xs: 0,
   sm: 768,
   md: 960,
   lg: 1280,
   xl: 1920,
}

const breakpointsValues = {
   breakpoints: {
      values: BREAKPOINTS,
   },
}

const theme = createTheme({ ...breakpointsValues })

function App() {
   return (
      <Provider store={reduxStore}>
         <ThemeProvider theme={theme}>
            <ToastContainer />
            <Router>
               <div className="container-main">
                  <Routes>
                     <Route path="/" exact element={<LoginPage />} />
                     <Route path="/dashboard" exact element={<Dashboard />} />
                     {/* PROTECTED ROUTES */}
                     {/* <PrivateRoute path="/" exact>
                <CreateListing />
              </PrivateRoute> */}
                  </Routes>
               </div>
            </Router>
         </ThemeProvider>
      </Provider>
   )
}

export default App
