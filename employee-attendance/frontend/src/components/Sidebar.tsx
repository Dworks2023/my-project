import React from "react";
import {
  LayoutDashboard,
  Calendar,
  FileText,
  ClipboardList,
  Megaphone,
  Menu,
} from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";

type Props = {
  collapsed: boolean;
  setCollapsed: (val: boolean) => void;
};

const Sidebar: React.FC<Props> = ({ collapsed, setCollapsed }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const menu = [
    {
      name: "Dashboard",
      icon: <LayoutDashboard size={20} />,
      path: "/dashboard",
    },
    {
      name: "Calendar",
      icon: <Calendar size={20} />,
      path: "/calendar",
    },
    {
      name: "Apply Leave",
      icon: <FileText size={20} />,
      path: "/apply-leave",
    },
    {
      name: "Leave Tracker",
      icon: <ClipboardList size={20} />,
      path: "/leave-tracker",
    },
    {
      name: "Notices",
      icon: <Megaphone size={20} />,
      path: "/notices",
    },
  ];

  return (
    <div
      style={{
        ...styles.sidebar,
        width: collapsed ? "70px" : "220px",
      }}
    >
      {/* TOP SECTION */}
      <div style={styles.top}>
        {!collapsed && (
          <div style={styles.profile}>
            <div style={styles.avatar}>JD</div>
            <div>
              <h3 style={{ margin: 0 }}>John Doe</h3>
              <p style={styles.role}>Software Engineer</p>
            </div>
          </div>
        )}

        {/* HAMBURGER */}
        <div style={styles.hamburger} onClick={() => setCollapsed(!collapsed)}>
          <Menu />
        </div>
      </div>

      {/* MENU TITLE */}
      {!collapsed && <p style={styles.menuTitle}>Menu</p>}

      {/* MENU ITEMS */}
      <div>
        {menu.map((item) => {
          const active = location.pathname.startsWith(item.path); // ✅ FIXED

          return (
            <div
              key={item.name}
              onClick={() => navigate(item.path)}
              style={{
                ...styles.menuItem,
                ...(active ? styles.activeItem : {}),
                justifyContent: collapsed ? "center" : "flex-start",
              }}
            >
              {item.icon}
              {!collapsed && <span>{item.name}</span>}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Sidebar;

/* ✅ STYLES */
const styles: any = {
  sidebar: {
    height: "100vh",
    background: "#f9fafb",
    padding: "12px",
    position: "fixed",
    top: 0,
    left: 0,
    borderRight: "1px solid #eee",
    transition: "0.3s",
    zIndex: 1000,
  },

  top: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },

  profile: {
    display: "flex",
    gap: "10px",
    alignItems: "center",
  },

  avatar: {
    width: "42px",
    height: "42px",
    borderRadius: "50%",
    background: "#5b7cfa",
    color: "#fff",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontWeight: "bold",
  },

  role: {
    fontSize: "12px",
    color: "#6b7280",
  },

  hamburger: {
    cursor: "pointer",
    padding: "6px",
    borderRadius: "8px",
  },

  menuTitle: {
    marginTop: "18px",
    fontSize: "13px",
    color: "#9ca3af",
  },

  menuItem: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
    padding: "10px",
    borderRadius: "12px",
    cursor: "pointer",
    marginTop: "6px",
    transition: "0.2s",
  },

  activeItem: {
    background: "#e0e7ff",
    color: "#4f7cff",
  },
};