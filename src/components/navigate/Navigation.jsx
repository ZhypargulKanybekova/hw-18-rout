import React from 'react'
import {  NavLink } from 'react-router-dom'
import { styled } from 'styled-components'

export const Navigation = () => {
  return (
    <Container>
         <h1>LOGO</h1>
        <NavlinkContainer to="/courses"
        style={({isActive})=>({
            color:isActive?"fff":"#f1f3f6",
            backgroundColor:isActive ? "#015f76" : "#4f7b67",
          })}
        >Courses</NavlinkContainer>
        <NavlinkContainer to="/anouncements" 
        style={({isActive})=>({
            color:isActive?"fff":"#ebeef3",
            backgroundColor:isActive ? "#015f76" : "#4f7b67",
          })}
        >Anouncements</NavlinkContainer>
        <NavlinkContainer to="/notification"
        style={({isActive})=>({
            color:isActive?"fff":"#ebecee",
            backgroundColor:isActive ? "#015f76" : "#4f7b67",
          })}
        >Notification</NavlinkContainer>
        <NavlinkContainer to="/schedule"
        style={({isActive})=>({
            color:isActive?"fff":"#fcfcfc",
            backgroundColor:isActive ? "#015f76" : "#4f7b67",
          })}
        >Schedule</NavlinkContainer>
       
    </Container>
  )
}
const Container = styled.span`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 30px;
    margin: 20px 20px;
    width:150px;
    height: 800px;
    position: relative;
    z-index: 1;
    max-height: 100%;
    background-color: #b4b0b0;
    width: 250px;
    text-decoration: none;

    h1{
      font-size: 44px;
      margin-left: 30px;
    }
    
`
const NavlinkContainer = styled(NavLink)`
  font-size: 28px;
  display: flex;
  gap: 30px;
  margin-left: 30px;
  text-decoration: none;
  padding: 10px;
`