import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Layout from "./layout/Layout";

// Pages
import Dashboard from "./pages/Dashboard";
import Calendar from "./pages/Calendar";
import ApplyLeave from "./pages/ApplyLeave";
import LeaveTracker from "./pages/LeaveTracker";
import Notices from "./pages/Notices";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Layout Wrapper */}
        <Route path="/" element={<Layout />}>

          {/* Default Redirect */}
          <Route index element={<Navigate to="/dashboard" />} />

          {/* Main Pages */}
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="calendar" element={<Calendar />} />
          <Route path="apply-leave" element={<ApplyLeave />} />
          <Route path="leave-tracker" element={<LeaveTracker />} />
          <Route path="notices" element={<Notices />} />

        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;