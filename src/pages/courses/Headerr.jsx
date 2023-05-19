import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import { styled } from "styled-components";

export const Headerr = () => {
  return (
    <>
      <Headers>
        <NavkicContainer
          to="/courses/materials"
          style={({ isActive }) => ({
            color: isActive ? "fff" : "#fcfcfc",
            backgroundColor: isActive ? "#2c5249" : "#21d6b8",
          })}
        >
          materials
        </NavkicContainer>
        <NavkicContainer
          to="/courses/students"
          style={({ isActive }) => ({
            color: isActive ? "fff" : "#f5f5f7",
            backgroundColor: isActive ? "#2c5249" : "#21d6b8",
          })}
        >
          students
        </NavkicContainer>
        <NavkicContainer
          to="/courses/ratings"
          style={({ isActive }) => ({
            color: isActive ? "fff" : "#f0f0f0",
            backgroundColor: isActive ? "#2c5249" : "#21d6b8",
          })}
        >
          ratings
        </NavkicContainer>
      </Headers>
      <Outlet />
    </>
  );
};

const Headers = styled.div`
  display: flex;
  justify-content: space-around;
  gap: 200px;
  width: 1340px;
  height: 100px;
  background-color: #727579eb;
  position: absolute;
  padding: 30px;
  left: 280px;
  z-index: 4;
  bottom: 659px;
`;

const NavkicContainer = styled(NavLink)`
  font-size: 26px;
  color: white;
  padding: 18px;
  text-decoration: none;
  width: 150px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
