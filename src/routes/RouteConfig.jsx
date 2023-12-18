import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Index from "../pages/Index";
import { Suspense, lazy } from "react";
const Project = lazy(()=> import("../pages/Project") )
import { indexPage, projectPage } from "./routes";


function RouteConfig() {
  return (
    <Router>
      <Routes>
        <Route element={<Index/>} path={indexPage} />
        <Route element={<Suspense><Project/></Suspense>} path={projectPage} />
      </Routes>
    </Router>
  );
}

export default RouteConfig;
