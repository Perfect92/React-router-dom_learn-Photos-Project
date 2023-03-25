import React from 'react'
import { Outlet,useNavigate } from 'react-router-dom'

export default function LayoutGoToBack() {
    
  const navigate = useNavigate()

  const goToBack=()=>{
     navigate(-1)
  }
  return (
    <>
      <button className='buttonBack' onClick={goToBack}>Go To Back</button>
      <Outlet/>
    </>
  )
}
