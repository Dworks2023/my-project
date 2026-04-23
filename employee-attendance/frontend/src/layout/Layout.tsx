import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";

const Layout: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div style={styles.wrapper}>
      {/* SIDEBAR */}
      <Sidebar collapsed={collapsed} setCollapsed={setCollapsed} />

      {/* MAIN */}
      <div
        style={{
          ...styles.main,
          marginLeft: collapsed ? "70px" : "220px", // ✅ EXACT MATCH
        }}
      >
        <div style={styles.content}>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Layout;

/* ✅ FINAL CLEAN STYLES */
const styles: any = {
  wrapper: {
    display: "flex",
    width: "100%",
  },

  main: {
    flex: 1,
    minHeight: "100vh",
    background: "#f5f7fb",
    transition: "margin-left 0.3s ease", // ✅ smooth collapse
  },

  content: {
    padding: "16px",          // ✅ reduced padding (less gap)
    width: "100%",
    maxWidth: "100%",         // ✅ prevent centering issue
    margin: 0,                // ✅ remove auto center
  },
};