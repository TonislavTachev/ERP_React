import React, { useState } from 'react'
import {
   Sidebar,
   Menu,
   MenuItem,
   sidebarClasses,
   SubMenu,
} from 'react-pro-sidebar'
import { GrNotes } from 'react-icons/gr'
import { Box, IconButton, Typography } from '@mui/material'
import PersonOutlineIcon from '@mui/icons-material/PersonOutline'
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined'
import TextSnippetOutlinedIcon from '@mui/icons-material/TextSnippetOutlined'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined'
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined'
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined'
import InsertChartOutlinedIcon from '@mui/icons-material/InsertChartOutlined'
import { useDispatch, useSelector } from 'react-redux'
import { setDashBoardComponent } from '../../../actions/sidebarActions'
const SidebarMenuItem = ({ title, icon, onClick, index, isActive }) => {
   return (
      <MenuItem icon={icon} onClick={() => onClick(index)} active={isActive}>
         {title}
      </MenuItem>
   )
}

const SidebarComp = () => {
   const [isCollapsed, setIsCollapsed] = useState(false)

   const sidebarComponentIndex = useSelector(
      ({ sidebar }) => sidebar.sidebarComponentIndex
   )

   const dispatch = useDispatch()

   const sidebarItems = [
      {
         title: 'Dashboard',
         icon: <InsertChartOutlinedIcon sx={{ color: '#b5bdc3' }} />,
      },
      {
         title: 'Notes',
         icon: <TextSnippetOutlinedIcon sx={{ color: '#b5bdc3' }} />,
      },
      {
         title: 'All passwords',
         icon: <LockOutlinedIcon sx={{ color: '#b5bdc3' }} />,
      },
      {
         title: 'All operations',
         icon: <SearchOutlinedIcon sx={{ color: '#b5bdc3' }} />,
      },
   ]

   const onChangeSidebarComponent = (index) => {
      dispatch(setDashBoardComponent(index))
   }

   return (
      <Sidebar
         rootStyles={{
            [`.${sidebarClasses.container}`]: {
               background: '#223440',
               minHeight: '100vh',
               maxHeight: '100%',
            },
         }}
         collapsed={isCollapsed}
      >
         <Menu
            menuItemStyles={{
               label: {
                  color: '#d8d8d8',
               },
               root: {
                  '& .ps-menu-button:hover': {
                     background: 'transparent !important',
                     '& .MuiSvgIcon-root': {
                        color: '#868dfb !important',
                     },
                     '& .ps-menu-label': {
                        color: '#868dfb !important',
                     },
                  },

                  '& .ps-active': {
                     '& .MuiSvgIcon-root': {
                        color: '#868dfb !important',
                     },
                     '& .ps-menu-label': {
                        color: '#868dfb !important',
                     },
                  },
               },
            }}
         >
            <MenuItem
               onClick={() => setIsCollapsed(!isCollapsed)}
               icon={
                  isCollapsed ? (
                     <MenuOutlinedIcon sx={{ color: '#d8d8d8' }} />
                  ) : undefined
               }
            >
               {!isCollapsed && (
                  <Box
                     display="flex"
                     justifyContent="space-between"
                     alignItems="center"
                  >
                     <Typography>Avion</Typography>
                     <IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
                        <MenuOutlinedIcon sx={{ color: '#d8d8d8' }} />
                     </IconButton>
                  </Box>
               )}
            </MenuItem>
            {sidebarItems.map((item, index) => {
               return (
                  <SidebarMenuItem
                     title={item.title}
                     icon={item.icon}
                     index={index}
                     onClick={onChangeSidebarComponent}
                     isActive={sidebarComponentIndex === index}
                  />
               )
            })}
            <SidebarMenuItem
               title={'Voen LLC'}
               icon={<LocalShippingOutlinedIcon sx={{ color: '#d8d8d8' }} />}
            />
            <SidebarMenuItem
               title={'Ideal Standard LLC'}
               icon={<LocalShippingOutlinedIcon sx={{ color: '#d8d8d8' }} />}
            />
         </Menu>
      </Sidebar>
   )
}

export default SidebarComp
