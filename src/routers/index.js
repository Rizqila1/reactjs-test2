import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import App from "../App";
import LandingPage from "../pages/landingpage";
import LayoutLandingPage from "../layouts/landingpage";
import LoginPage from "../pages/login";
import "../App.css";

export default createBrowserRouter(
  createRoutesFromElements(
    <Route element={<App />}>
      <Route element={<LayoutLandingPage />}>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Route>
    </Route>
  )
);
