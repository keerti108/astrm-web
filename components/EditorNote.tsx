export default function EditorNote({ children }: { children: React.ReactNode }) {
  return (
    <aside
      style={{
        borderLeft: "2px solid var(--signal)",
        padding: "12px 20px",
        background: "rgba(195,80,56,0.06)",
        fontFamily: "var(--font-mono)",
        fontSize: "11px",
        letterSpacing: "0.06em",
        color: "var(--signal)",
        lineHeight: 1.6,
        marginBlock: "32px",
      }}
    >
      <span style={{ opacity: 0.6 }}>◆ EDITOR NOTE: </span>
      {children}
    </aside>
  );
}
