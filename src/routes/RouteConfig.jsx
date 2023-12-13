import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Index from "../pages/Index";
import Project from "../pages/Project";
import { indexPage, projectPage } from "./routes";
function RouteConfig() {
  return (
    <Router>
      <Routes>
        <Route element={<Index/>} path={indexPage} />
        <Route element={<Project/>} path={projectPage} />
      </Routes>
    </Router>
  );
}

export default RouteConfig;
