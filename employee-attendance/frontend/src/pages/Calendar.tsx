import React from "react";

const Calendar: React.FC = () => {
  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const dates = Array.from({ length: 30 }, (_, i) => i + 1);

  const status: any = {
    1: "present",
    2: "present",
    3: "absent",
    4: "present",
    5: "weekoff",
    6: "present",
    7: "present",
    8: "absent",
    9: "present",
    10: "present",
    11: "present",
    12: "weekoff",
    13: "present",
    14: "holiday",
  };

  return (
    <div style={styles.wrapper}>
      {/* CENTER CONTAINER */}
      <div style={styles.container}>
        <h1 style={styles.title}>Attendance Calendar</h1>
        <p style={styles.subtitle}>
          View your monthly attendance record.
        </p>

        <div style={styles.card}>
          <h2 style={styles.month}>April 2026</h2>

          <div style={styles.grid}>
            {days.map((d) => (
              <div key={d} style={styles.dayHeader}>
                {d}
              </div>
            ))}

            {dates.map((date) => {
              const type = status[date];

              return (
                <div
                  key={date}
                  style={{
                    ...styles.dateCell,
                    ...(date === 14 ? styles.activeDate : {}),
                  }}
                >
                  {date}

                  {type && (
                    <span
                      style={{
                        ...styles.dot,
                        background:
                          type === "present"
                            ? "#f59e0b"
                            : type === "absent"
                            ? "#ef4444"
                            : type === "weekoff"
                            ? "#3b82f6"
                            : "#22c55e",
                      }}
                    />
                  )}
                </div>
              );
            })}
          </div>

          <div style={styles.legend}>
            <Legend color="#f59e0b" label="Present" />
            <Legend color="#ef4444" label="Absent" />
            <Legend color="#3b82f6" label="Week Off" />
            <Legend color="#22c55e" label="Holiday" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calendar;

/* LEGEND */
const Legend = ({ color, label }: any) => (
  <div style={styles.legendItem}>
    <span style={{ ...styles.legendDot, background: color }} />
    {label}
  </div>
);

/* ✅ FINAL PERFECT STYLES */
const styles: any = {
  wrapper: {
    width: "100%",
    display: "flex",
    justifyContent: "center",   // ✅ CENTER EVERYTHING
    padding: "16px",
  },

  container: {
    width: "100%",
    maxWidth: "850px",          // ✅ SAME AS REFERENCE
  },

  title: {
    fontSize: "26px",
    fontWeight: "600",
  },

  subtitle: {
    marginTop: "6px",
    color: "#6b7280",
    fontSize: "14px",
  },

  card: {
    marginTop: "20px",
    background: "#fff",
    padding: "20px",
    borderRadius: "16px",
    boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
  },

  month: {
    marginBottom: "16px",
    fontSize: "18px",
    fontWeight: "600",
  },

  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(7, 1fr)",
    gap: "12px",
  },

  dayHeader: {
    textAlign: "center",
    fontSize: "13px",
    color: "#6b7280",
  },

  dateCell: {
    textAlign: "center",
    padding: "10px",
    borderRadius: "10px",
    position: "relative",
    fontSize: "14px",
  },

  activeDate: {
    border: "2px solid #4f7cff",
    borderRadius: "12px",
  },

  dot: {
    width: "7px",
    height: "7px",
    borderRadius: "50%",
    position: "absolute",
    bottom: "5px",
    left: "50%",
    transform: "translateX(-50%)",
  },

  legend: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",   // ✅ CENTER LEGEND
    gap: "16px",
    marginTop: "20px",
    borderTop: "1px solid #eee",
    paddingTop: "12px",
  },

  legendItem: {
    display: "flex",
    alignItems: "center",
    gap: "6px",
    fontSize: "13px",
    color: "#6b7280",
  },

  legendDot: {
    width: "8px",
    height: "8px",
    borderRadius: "50%",
  },
};