import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import AppHeader from "./Components/AppHeader";
import AppRoutes from "./Components/AppRoutes";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { Container } from "react-bootstrap";
import { Provider } from "use-http";

function App() {
  return (
    <div className="App">
      <AppHeader />
      <Container>
        <Provider url={process.env.REACT_APP_API_URL}>
          <AppRoutes />
        </Provider>
      </Container>
      <ToastContainer />
    </div>
  );
}

export default App;
