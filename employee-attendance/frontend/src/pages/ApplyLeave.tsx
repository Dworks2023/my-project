import React from "react";
import { Send } from "lucide-react";

const ApplyLeave: React.FC = () => {
  return (
    <div style={styles.wrapper}>
      {/* TITLE */}
      <h1 style={styles.title}>Apply for Leave</h1>
      <p style={styles.subtitle}>
        Fill in the form to submit a leave request.
      </p>

      {/* FORM CARD */}
      <div style={styles.card}>
        <h2 style={styles.cardTitle}>Leave Application</h2>

        {/* TO */}
        <div style={styles.formGroup}>
          <label style={styles.label}>To (Manager Email)</label>
          <input
            type="email"
            placeholder="manager@company.com"
            style={styles.input}
          />
        </div>

        {/* SUBJECT */}
        <div style={styles.formGroup}>
          <label style={styles.label}>Subject</label>
          <input
            type="text"
            placeholder="Leave request for..."
            style={styles.input}
          />
        </div>

        {/* LEAVE TYPE */}
        <div style={styles.formGroup}>
          <label style={styles.label}>Leave Type</label>
          <select style={styles.input}>
            <option>Select leave type</option>
            <option>Sick Leave</option>
            <option>Casual Leave</option>
            <option>Paid Leave</option>
          </select>
        </div>

        {/* MESSAGE */}
        <div style={styles.formGroup}>
          <label style={styles.label}>Message</label>
          <textarea
            placeholder="Describe your reason for leave..."
            style={styles.textarea}
          />
        </div>

        {/* BUTTON */}
        <button style={styles.button}>
          <Send size={18} />
          Submit Application
        </button>
      </div>
    </div>
  );
};

export default ApplyLeave;

/* ✅ FINAL RESPONSIVE STYLES */
const styles: any = {
  wrapper: {
    maxWidth: "800px",         // ✅ Reduced width
    width: "100%",
    margin: "0 auto",
    padding: "20px 16px",      // ✅ Responsive padding
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
    padding: "24px",           // ✅ Balanced spacing
    borderRadius: "16px",
    boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
  },

  cardTitle: {
    marginBottom: "18px",
    fontSize: "18px",
    fontWeight: "600",
  },

  formGroup: {
    marginBottom: "18px",
  },

  label: {
    display: "block",
    marginBottom: "6px",
    fontWeight: "500",
    fontSize: "14px",
  },

  input: {
    width: "100%",
    padding: "12px",           // ✅ Reduced height
    borderRadius: "10px",
    border: "1px solid #e5e7eb",
    fontSize: "14px",
    outline: "none",
  },

  textarea: {
    width: "100%",
    padding: "12px",
    borderRadius: "10px",
    border: "1px solid #e5e7eb",
    minHeight: "100px",        // ✅ Reduced height
    fontSize: "14px",
    outline: "none",
    resize: "none",
  },

  button: {
    marginTop: "10px",
    width: "100%",
    padding: "12px",
    borderRadius: "10px",
    border: "none",
    background: "#4f7cff",
    color: "#fff",
    fontSize: "15px",
    fontWeight: "500",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "8px",
    cursor: "pointer",
  },
};