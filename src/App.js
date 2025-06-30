import { BrowserRouter } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import 'bootstrap-icons/font/bootstrap-icons.css';
import AppRoutes from "./routes/AppRoutes";
import './App.css';
import { ToastContainer } from "react-bootstrap";
function App() {
  return (
    <>
      <BrowserRouter>
      <AppRoutes />
      </BrowserRouter>
      <ToastContainer />
    </>
  );
}

export default App;
