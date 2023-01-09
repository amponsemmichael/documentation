import React from 'react'
import Appbar from '../components/Appbar'
import { Outlet } from 'react-router-dom';
const Layout = () => {
  return (
    <>
    <Appbar />
    <hr />
    <Outlet />
     </>
      
  );
}
  
export default Layout