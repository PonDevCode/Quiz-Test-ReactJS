import React from 'react'
import SidebarAdmin from './SidebarAdmin'
import './admin.scss'
import { GoSidebarCollapse } from "react-icons/go";
import { useState } from 'react'
import { Outlet } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Admin = () => {

  const [collapsed, setCollapsed] = useState(false)
  return (
    <div className='admin-container'>
      <div className='admin-sidebar'>
        <SidebarAdmin collapsed={collapsed} />
      </div>
      <div className='admin-content'>
        <div className='admin-header'>
          <GoSidebarCollapse onClick={() => setCollapsed(!collapsed)} />
        </div>
        <div className='admin-main'>
          <Outlet />
        </div>
      </div>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  )
}

export default Admin