import { Route, Routes } from "react-router";

import Home from "./pages/Home";
import ProjectDetail from "./pages/ProjectDetail";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />

      <Route
        path="/projects/:projectId"
        element={<ProjectDetail />}
      />

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;