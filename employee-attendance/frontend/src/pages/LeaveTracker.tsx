import React from "react";

const LeaveTracker: React.FC = () => {
  return (
    <div style={styles.wrapper}>
      {/* Notice */}
      <div style={styles.notice}>
        <strong>Important:</strong> Office will remain closed on April 14 for Ambedkar Jayanti.
      </div>

      {/* Heading */}
      <h1 style={styles.title}>Leave Tracker</h1>
      <p style={styles.subtitle}>Track your leave balance and history.</p>

      {/* Cards */}
      <div style={styles.cardRow}>
        <LeaveCard title="Sick Leave" used={7} total={10} usedLabel="3 used" />
        <LeaveCard title="Casual Leave" used={6} total={8} usedLabel="2 used" />
        <LeaveCard title="Earned Leave" used={11} total={12} usedLabel="1 used" />
      </div>

      {/* History */}
      <div style={styles.historyBox}>
        <h2 style={styles.historyTitle}>Leave History</h2>

        <table style={styles.table}>
          <thead>
            <tr>
              <th style={styles.th}>Type</th>
              <th style={styles.th}>From</th>
              <th style={styles.th}>To</th>
              <th style={styles.th}>Days</th>
              <th style={styles.th}>Status</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td style={styles.td}>Sick Leave</td>
              <td style={styles.td}>Mar 10, 2026</td>
              <td style={styles.td}>Mar 12, 2026</td>
              <td style={styles.td}>3</td>
              <td style={styles.td}><Status label="Approved" color="#4CAF50" /></td>
            </tr>

            <tr>
              <td style={styles.td}>Casual Leave</td>
              <td style={styles.td}>Feb 14, 2026</td>
              <td style={styles.td}>Feb 15, 2026</td>
              <td style={styles.td}>2</td>
              <td style={styles.td}><Status label="Approved" color="#4CAF50" /></td>
            </tr>

            <tr>
              <td style={styles.td}>Earned Leave</td>
              <td style={styles.td}>Jan 26, 2026</td>
              <td style={styles.td}>Jan 26, 2026</td>
              <td style={styles.td}>1</td>
              <td style={styles.td}><Status label="Approved" color="#4CAF50" /></td>
            </tr>

            <tr>
              <td style={styles.td}>Casual Leave</td>
              <td style={styles.td}>Apr 20, 2026</td>
              <td style={styles.td}>Apr 21, 2026</td>
              <td style={styles.td}>2</td>
              <td style={styles.td}><Status label="Pending" color="#f59e0b" /></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default LeaveTracker;

/* 🔹 CARD */
const LeaveCard = ({ title, used, total, usedLabel }: any) => {
  const percent = (used / total) * 100;

  return (
    <div style={styles.card}>
      <h3 style={styles.cardTitle}>{title}</h3>

      <div style={styles.cardTop}>
        <h1 style={styles.cardValue}>{used}</h1>
        <span style={styles.cardTotal}>/ {total} remaining</span>
      </div>

      <div style={styles.progressBar}>
        <div style={{ ...styles.progressFill, width: `${percent}%` }} />
      </div>

      <p style={styles.used}>{usedLabel}</p>
    </div>
  );
};

/* 🔹 STATUS */
const Status = ({ label, color }: any) => (
  <span style={{ ...styles.status, background: color }}>{label}</span>
);

/* ✅ FINAL STYLES */
const styles: any = {
  wrapper: {
    maxWidth: "800px",          // ✅ MATCH OTHER PAGES
    width: "100%",
    margin: "0 auto",
    padding: "20px 16px",
  },

  notice: {
    background: "#e9efff",
    padding: "10px",
    borderRadius: "8px",
    fontSize: "14px",
  },

  title: {
    marginTop: "20px",
    fontSize: "26px",
    fontWeight: "600",
  },

  subtitle: {
    color: "#6b7280",
    fontSize: "14px",
  },

  /* CARDS */
  cardRow: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", // ✅ RESPONSIVE
    gap: "16px",
    marginTop: "20px",
  },

  card: {
    background: "#fff",
    padding: "16px",
    borderRadius: "14px",
    boxShadow: "0 2px 6px rgba(0,0,0,0.05)",
  },

  cardTitle: {
    fontSize: "15px",
    marginBottom: "10px",
  },

  cardTop: {
    display: "flex",
    alignItems: "center",
    gap: "8px",
  },

  cardValue: {
    fontSize: "22px",
    margin: 0,
  },

  cardTotal: {
    color: "#6b7280",
    fontSize: "13px",
  },

  progressBar: {
    height: "6px",
    background: "#e5e7eb",
    borderRadius: "10px",
    marginTop: "10px",
  },

  progressFill: {
    height: "100%",
    background: "#4f7cff",
    borderRadius: "10px",
  },

  used: {
    fontSize: "12px",
    color: "#6b7280",
    marginTop: "6px",
  },

  /* TABLE */
  historyBox: {
    background: "#fff",
    padding: "18px",
    borderRadius: "14px",
    marginTop: "20px",
  },

  historyTitle: {
    fontSize: "18px",
    marginBottom: "10px",
  },

  table: {
    width: "100%",
    borderCollapse: "collapse",
  },

  th: {
    textAlign: "left",
    padding: "12px 10px",
    fontSize: "13px",
    color: "#6b7280",
    borderBottom: "1px solid #eee",
  },

  td: {
    padding: "14px 10px",     // ✅ MORE ROW SPACE (FIX)
    borderBottom: "1px solid #f3f4f6",
    fontSize: "14px",
  },

  status: {
    color: "#fff",
    padding: "6px 14px",
    borderRadius: "20px",
    fontSize: "12px",
    display: "inline-block",
    minWidth: "90px",         // ✅ FIX COLLAPSE ISSUE
    textAlign: "center",
  },
};