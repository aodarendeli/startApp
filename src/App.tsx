import { Container, CssBaseline, ThemeProvider} from "@mui/material";
import Header from "./components/Header/Header";

import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import Footer from "./components/Footer/Footer";
import './main.scss';
import { useThemeContext } from "./theme/ThemeContextProvider";
// import HomePage from "./pages/HomePage/HomePage";
interface IRootRoute {
  outlet?: any;
}
function App(props: IRootRoute) {
  const { theme } = useThemeContext();

  return (
    <ThemeProvider theme={theme}>
      <ToastContainer position="bottom-right" hideProgressBar theme="colored" />
      <CssBaseline />
      <Header />
      <Container maxWidth="lg">
        <main className="main">
          {props.outlet ? props.outlet : <Outlet />}
        </main>
      </Container>
      <Footer />
    </ThemeProvider>
  )
}

export default App
