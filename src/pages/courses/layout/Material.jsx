import React from "react";
import { useNavigate } from "react-router-dom";
import { styled } from "styled-components";

const materialData = [
  {
    title: "Material 1",
    id: 1,
  },
  {
    title: "Material 2",
    id: 1,
  },
];

export const Material = () => {
  const navigate = useNavigate();
  const materialHandl = (el) => {
    navigate(`${el.id}/details`,);
  };

  return (
    <Container>
      <>
        <button> Add new material</button>
      </>
      {materialData.map((item) => {
        return (
          <>
            <h3>{item.title}</h3>
            <button onClick={() => materialHandl(item.id)} key={item.id}>
              Detalis
            </button>
          </>
        );
      })}
    </Container>
  );
};
const Container = styled.div`
  width: 600px;
  height: 400px;
  position: absolute;
  left: 350px;
  bottom: 200px;
`;