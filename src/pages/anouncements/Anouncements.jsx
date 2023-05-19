import React from 'react'
import { useNavigate } from 'react-router-dom'

export const Anouncements = () => {
  const navigate = useNavigate()
  return (
    <>
    <h2>Anouncements</h2>
    <button onClick={()=> navigate("/courses/students")}>Go to student page</button>
    </>
  )
}
