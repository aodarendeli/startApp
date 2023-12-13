import {useState } from "react"
import Header from "./components/Header/Header";
import { Container, CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import { Outlet} from "react-router-dom";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
// import HomePage from "./pages/HomePage/HomePage";
interface IRootRoute {
  outlet?: any;
}
function App(props: IRootRoute) {
  const [darkMode, setDarkMode] = useState<boolean>(false);
  const paletteType = darkMode ? 'dark' : 'light';
  const theme = createTheme({
    palette: {
      mode: paletteType
    }
  })
  const handleThemeChange = () => {
    setDarkMode(!darkMode);
  }
 
  return (
    <ThemeProvider theme={theme}>
      <ToastContainer position="bottom-right" hideProgressBar theme="colored" />
      <CssBaseline />
      <Header darkMode={darkMode} handleThemeChange={handleThemeChange} />
      <Container>
        {props.outlet ? props.outlet : <Outlet />}
      </Container>
    </ThemeProvider>
  )
}

export default App
