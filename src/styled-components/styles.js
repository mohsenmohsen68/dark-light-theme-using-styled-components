import styled from "styled-components";



export const StyledDiv = styled.div`
  text-align: center;
  padding-top: 7rem;
  min-height: 100vh;
  background-color: ${(props) => props.theme.body};
`;
export const Title = styled.h1`
  font-size: 42px;
  font-weight: 500;
  color: ${(props) => props.theme.title};
`;
export const Desc = styled.p`
  font-size: 20px;
  font-weight: 200;
  color : ${(props) => props.theme.desc};
`;
export const Icon = styled.p`
  font-size: 27px;
  font-weight: 400;
  color : ${(props) => props.theme.icon};
`;

export const lightTheme = {
  body: "#fff",
  desc: "#000",
  icon: "#000",
  title: "#000"
};

export const darkTheme = {
  body: "#000",
  desc: "#fff",
  icon: "#fff",
  title: "#fff"
};