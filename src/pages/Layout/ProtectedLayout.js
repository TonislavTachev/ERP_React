import React from 'react'
import SidebarComp from '../Dashboard/components/Sidebar'

const ProtectedLayout = ({ children }) => {
   return (
      <div className="container-main">
         {/* Sidebar here */}
         <SidebarComp />

         <div className="content">{children}</div>
      </div>
   )
}

export default ProtectedLayout
