import React from "react";
import { useNavigate } from "react-router-dom";
import { styled } from "styled-components";

const studenData = [
  {
    name: "Student1",
    id: 1,
    
  },
  {
    name: "Student2",
    id: 2,
    
  },
  {
    name: "Student3",
    id: 3,
    
  },
];
export const Students = () => {
  const navigate = useNavigate();
  const DetailHandler = (el) => {
    navigate(`${el.id}/details`, );
  };
  return (
    <StudentContainer>
      {studenData.map((item) => {
        return (
          <ul key={item.id}>
            <ol>{item.name}</ol>
           

            <button onClick={() => DetailHandler(item.id)} key={item.id}>
             
              Details
            </button>

            <hr />
          </ul>
        );
      })}
    </StudentContainer>
  );
};
const StudentContainer = styled.div`
  box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.5);
  width: 900px;
  height: 430px;
  text-align: center;
  margin: 3rem 0px 0px 3rem;
  display: flex;
  flex-direction: column;
  position: absolute;
  left: 300px;
  bottom: 200px;
`;
