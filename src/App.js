import { useEffect, useState } from "react";
import apiRequest from "./services/axios/config";
import { BiSolidToggleRight } from "react-icons/bi";
import { BiToggleLeft } from "react-icons/bi";
import { FiMoon } from "react-icons/fi";
import { IoSunnyOutline } from "react-icons/io5";
import { ThemeProvider } from "styled-components";
import {
  StyledDiv,
  Title,
  Desc,
  Icon,
  lightTheme,
  darkTheme,
  
} from "./styled-components/styles";
import Login from "./components/Login";


function App() {
  const [products, setProducts] = useState([]);
  const [projectTheme, SetProjectTheme] = useState(lightTheme);
  useEffect(() => {
    apiRequest.get("products?limit=4").then((res) => setProducts(res.data));
  }, []);

  return (
    <ThemeProvider theme={projectTheme}>
      <StyledDiv>
        <Icon>
          <FiMoon />
          {projectTheme === lightTheme ? (
            <BiSolidToggleRight onClick={() => SetProjectTheme(darkTheme)} />
          ) : (
            <BiToggleLeft onClick={() => SetProjectTheme(lightTheme)} />
          )}
          <IoSunnyOutline />
        </Icon>
        <Title>hi there </Title>
        <Desc> welcome here ... </Desc>
<Login/>
        

      </StyledDiv>
    </ThemeProvider>
  );
}

export default App;
