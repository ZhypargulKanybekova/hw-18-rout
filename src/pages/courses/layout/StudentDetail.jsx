import React from "react";
import {  useParams } from "react-router-dom";
import { styled } from "styled-components";

export const StudentDetail = () => {
  const {id} =useParams();
  console.log(id,"state")
  return (
    <DetailCon>
      <h2>detail id:{id}</h2>
     
    </DetailCon>
  );
};
const DetailCon = styled.div`
  box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.5);
  width: 900px;
  height: 430px;
  text-align: center;
  margin: 3rem 0px 0px 3rem;
  line-height: 4rem;
  position: absolute;
  bottom: 600px;
  left: 300px;
  z-index: 6;


`;
