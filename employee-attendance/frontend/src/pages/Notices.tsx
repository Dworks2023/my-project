import React from "react";
import { AlertTriangle, PartyPopper, Info, Megaphone } from "lucide-react";

const Notices: React.FC = () => {
  return (
    <div style={styles.wrapper}>
      {/* NOTICE BAR */}
      <div style={styles.noticeBar}>
        <strong>Important:</strong> Office will remain closed on April 14 for Ambedkar Jayanti.
        <span style={styles.close}>✕</span>
      </div>

      {/* HEADER */}
      <h1 style={styles.title}>Notices & Announcements</h1>
      <p style={styles.subtitle}>
        Stay updated with the latest company announcements.
      </p>

      {/* LIST */}
      <div style={styles.list}>
        <NoticeCard
          icon={<AlertTriangle color="#ef4444" />}
          title="Office Closed - Ambedkar Jayanti"
          desc="The office will remain closed on April 14, 2026 on account of Ambedkar Jayanti. Regular operations will resume on April 15."
          date="Apr 7, 2026"
          tag="important"
          color="#ef4444"
        />

        <NoticeCard
          icon={<PartyPopper color="#22c55e" />}
          title="Annual Team Outing"
          desc="We are excited to announce the annual team outing scheduled for May 2-3. Registrations are open. Please confirm your participation by April 20."
          date="Apr 5, 2026"
          tag="event"
          color="#22c55e"
        />

        <NoticeCard
          icon={<Info color="#3b82f6" />}
          title="Updated Leave Policy"
          desc="Please review the updated leave policy effective from April 1, 2026."
          date="Apr 1, 2026"
          tag="info"
          color="#3b82f6"
        />

        <NoticeCard
          icon={<Megaphone color="#6b7280" />}
          title="Server Maintenance Scheduled"
          desc="IT infrastructure maintenance is scheduled for April 12, 2026 from 10 PM to 2 AM."
          date="Mar 28, 2026"
          tag="general"
          color="#9ca3af"
        />
      </div>
    </div>
  );
};

export default Notices;

/* CARD */
const NoticeCard = ({ icon, title, desc, date, tag, color }: any) => {
  return (
    <div style={styles.card}>
      <div style={styles.iconBox}>{icon}</div>

      <div style={{ flex: 1 }}>
        <div style={styles.row}>
          <h3 style={{ margin: 0 }}>{title}</h3>
          <span style={{ ...styles.badge, background: color }}>{tag}</span>
        </div>

        <p style={styles.desc}>{desc}</p>
        <p style={styles.date}>{date}</p>
      </div>
    </div>
  );
};

/* STYLES */
const styles: any = {
  wrapper: {
    maxWidth: "1000px",
    margin: "0 auto",
    padding: "10px 20px",
  },

  noticeBar: {
    background: "#e9efff",
    padding: "10px",
    borderRadius: "8px",
    display: "flex",
    justifyContent: "space-between",
  },

  close: {
    cursor: "pointer",
  },

  title: {
    marginTop: "20px",
  },

  subtitle: {
    color: "#6b7280",
  },

  list: {
    display: "flex",
    flexDirection: "column",
    gap: "18px",
    marginTop: "20px",
  },

  card: {
    display: "flex",
    gap: "16px",
    background: "#fff",
    padding: "18px",
    borderRadius: "14px",
    boxShadow: "0 2px 6px rgba(0,0,0,0.05)",
  },

  iconBox: {
    width: "45px",
    height: "45px",
    borderRadius: "12px",
    background: "#f3f4f6",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },

  row: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },

  badge: {
    color: "#fff",
    padding: "5px 12px",
    borderRadius: "20px",
    fontSize: "12px",
  },

  desc: {
    color: "#6b7280",
    marginTop: "6px",
  },

  date: {
    fontSize: "12px",
    color: "#9ca3af",
    marginTop: "8px",
  },
};