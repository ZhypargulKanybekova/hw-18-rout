import React from "react";
import { useNavigate } from "react-router-dom";

export const Schedule = () => {
  const navigate = useNavigate()
  return (
    <>
    <h2>Shudle</h2>
    <button onClick={()=> navigate("/notification")}>Go to natification page</button>
    </>
  )
};
