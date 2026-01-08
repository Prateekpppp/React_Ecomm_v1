import React from 'react'
import { Outlet, Routes } from 'react-router-dom'
import Product from './Product'
import Masterbanner from '../includes/Masterbanner'

function Masterpage() {
  return (
    <>
        <Masterbanner />
        <Outlet />
    </>
  )
}

export default Masterpage