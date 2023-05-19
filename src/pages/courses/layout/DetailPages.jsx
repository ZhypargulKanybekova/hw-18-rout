import { NavLink, Outlet, useLocation, useParams } from "react-router-dom";
import { styled } from "styled-components";

export const DetailPages = () => {
  const {id}= useParams();
  console.log(id,"state")
  return (
    <>
      <Container>
        <h2> Material Details Pages</h2>
        <h3> detail id:{id}</h3>
        <NavLink to="waiting">Wating</NavLink>
        <NavLink to="submited">Submited</NavLink>
        <NavLink to="late">Link</NavLink>
      </Container>
      <Outlet />
    </>
  );
};

const Container = styled.div`
  box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.5);
  width: 900px;
  height: 200px;
  text-align: center;
  position: absolute;
  bottom: 300px;
  left: 250px;
  z-index: 5;
  margin: 3rem 0px 0px 3rem;
  line-height: 4rem;
`;
