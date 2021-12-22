import "./App.css";
import { Routes, Route, Link, BrowserRouter } from "react-router-dom";
import { MenuLogin, PageDashboardStaff, PageAdminManageAccount } from "./pages";
import "bootstrap/dist/css/bootstrap.min.css";
import { Sidebar } from "./components";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        {/* <Sidebar/> */}
        <Routes>
          <Route path="/" element={<MenuLogin />} />
          <Route path="/dashboardStaff" element={<PageDashboardStaff />} />
          <Route
            path="/dashboardStaff/manageAccount"
            element={<PageAdminManageAccount />}
          />
        </Routes>
        {/* <MenuLogin /> */}
      </BrowserRouter>
    </div>
  );
}

export default App;
