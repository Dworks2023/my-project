import React from "react";
import {
  CheckCircle,
  XCircle,
  Coffee,
  Clock,
} from "lucide-react";

const Dashboard: React.FC = () => {
  return (
    <div style={styles.wrapper}>
      {/* Notice */}
      <div style={styles.notice}>
        <strong>Important:</strong> Office will remain closed on April 14 for
        Ambedkar Jayanti.
      </div>

      {/* Greeting */}
      <h1 style={styles.greeting}>Good Morning, John! 👋</h1>
      <p style={styles.subText}>
        Here's your attendance overview for today.
      </p>

      {/* Cards */}
      <div style={styles.cardRow}>
        <Card title="Present Days" value="18" icon={<CheckCircle color="#22c55e" />} bg="#eafaf1" />
        <Card title="Absent Days" value="2" icon={<XCircle color="#ef4444" />} bg="#fdecec" />
        <Card title="Leaves Used" value="3" icon={<Coffee color="#f59e0b" />} bg="#fff7ed" />
        <Card title="Avg Hours" value="8.5h" icon={<Clock color="#3b82f6" />} bg="#eef4ff" />
      </div>

      {/* Bottom Section */}
      <div style={styles.bottomSection}>
        <div style={styles.attendanceBox}>
          <h3>Today's Attendance</h3>
          <p>Tuesday, April 14, 2026</p>

          <div style={styles.checkInBtn}>IN</div>

          <div style={styles.timeRow}>
            <div style={styles.timeBox}>Login --:--</div>
            <div style={styles.timeBox}>Logout --:--</div>
          </div>
        </div>

        <div style={styles.calendarBox}>
          <h3>April 2026</h3>

          <div style={styles.calendarGrid}>
            {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((d) => (
              <div key={d} style={styles.dayHeader}>{d}</div>
            ))}

            {Array.from({ length: 30 }, (_, i) => (
              <div
                key={i}
                style={{
                  ...styles.dateCell,
                  ...(i + 1 === 14 ? styles.activeDate : {}),
                }}
              >
                {i + 1}
              </div>
            ))}
          </div>

          <div style={styles.legend}>
            <span>🟡 Present</span>
            <span>🔴 Absent</span>
            <span>🔵 Week Off</span>
            <span>🟢 Holiday</span>
          </div>
        </div>
      </div>
    </div>
  );
};

/* CARD */
const Card = ({ title, value, icon, bg }: any) => (
  <div style={styles.card}>
    <div style={{ ...styles.iconWrapper, background: bg }}>{icon}</div>
    <div>
      <h2 style={styles.cardValue}>{value}</h2>
      <p style={styles.cardTitle}>{title}</p>
    </div>
  </div>
);

export default Dashboard;

/* ✅ FINAL PERFECT STYLES */
const styles: any = {
  wrapper: {
    maxWidth: "1000px",
    margin: "0 auto",
    padding: "10px 20px",
  },

  notice: {
    marginTop: "8px",
    background: "#e9efff",
    padding: "10px",
    borderRadius: "8px",
    fontSize: "14px",
  },

  greeting: {
    marginTop: "18px",
    fontSize: "26px",
  },

  subText: {
    color: "#777",
    marginTop: "4px",
  },

  /* 🔥 KEY FIX: EQUAL SMALL CARDS */
  cardRow: {
    display: "grid",
    gridTemplateColumns: "repeat(4, 1fr)", // ✅ equal width
    gap: "14px",
    marginTop: "16px",
  },

  card: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
    background: "#fff",
    padding: "12px",
    borderRadius: "14px",
    boxShadow: "0 2px 6px rgba(0,0,0,0.05)",
  },

  iconWrapper: {
    width: "40px",
    height: "40px",
    borderRadius: "10px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },

  cardValue: {
    margin: 0,
    fontSize: "18px",
    fontWeight: "600",
  },

  cardTitle: {
    margin: 0,
    fontSize: "13px",
    color: "#6b7280",
  },

  bottomSection: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "16px",
    marginTop: "16px",
  },

  attendanceBox: {
    background: "#fff",
    padding: "16px",
    borderRadius: "12px",
  },

  checkInBtn: {
    width: "90px",
    height: "90px",
    borderRadius: "50%",
    background: "#4f7cff",
    color: "#fff",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    margin: "18px auto",
  },

  timeRow: {
    display: "flex",
    gap: "8px",
  },

  timeBox: {
    flex: 1,
    background: "#f3f3f3",
    padding: "8px",
    borderRadius: "8px",
    textAlign: "center",
    fontSize: "13px",
  },

  calendarBox: {
    background: "#fff",
    padding: "16px",
    borderRadius: "12px",
  },

  calendarGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(7, 1fr)",
    gap: "8px",
    marginTop: "10px",
  },

  dayHeader: {
    textAlign: "center",
    fontSize: "11px",
  },

  dateCell: {
    textAlign: "center",
    padding: "8px",
    fontSize: "13px",
  },

  activeDate: {
    border: "2px solid #4f7cff",
    borderRadius: "6px",
  },

  legend: {
    display: "flex",
    justifyContent: "space-between",
    marginTop: "10px",
    fontSize: "11px",
  },
};