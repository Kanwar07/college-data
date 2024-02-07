import CoursePage from "./components/coursePage/CoursePage";
import Dashboard from "./components/dashboard/Dashboard";
import DetailsPage from "./components/detailsPage/DetailsPage";
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/navbar/NavBar";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<CoursePage />} />
        <Route path="/details" element={<DetailsPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </>
  );
}

export default App;
