import CoursePage from "./components/coursePage/CoursePage";
import Dashboard from "./components/dashboard/Dashboard";
import DetailsPage from "./components/detailsPage/DetailsPage";
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/navbar/NavBar";
import Context from "./components/context/Context";
import { Provider } from "react-redux";
import { store } from "./app/Store";

function App() {
  return (
    <>
      <Provider store={store}>
        <Context>
          <NavBar />
          <Routes>
            <Route path="/" element={<CoursePage />} />
            <Route path="/details" element={<DetailsPage />} />
            <Route path="/dashboard" element={<Dashboard />} />
          </Routes>
        </Context>
      </Provider>
    </>
  );
}

export default App;
