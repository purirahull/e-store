import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import AppHeader from "./Components/AppHeader";
import AppRoutes from "./Components/AppRoutes";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { Container } from "react-bootstrap";
import { Provider } from "use-http";
import { BrowserRouter, useLocation } from "react-router-dom";
import { useEffect } from "react";
import LoggedUser from "./Components/Views/LoggedUser";

function App() {
  useEffect(() => {
    <LoggedUser />;
  }, []);

  return (
    <div className="App">
      <Provider url={process.env.REACT_APP_API_URL}>
        <BrowserRouter>
          <AppHeader />
          <Container className="p-0">
            <AppRoutes />
          </Container>
        </BrowserRouter>
      </Provider>
      <ToastContainer />
    </div>
  );
}

export default App;
