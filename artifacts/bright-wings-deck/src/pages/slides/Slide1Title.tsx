const base = import.meta.env.BASE_URL;

export default function Slide1Title() {
  return (
    <div style={{
      width: "100vw",
      height: "100vh",
      overflow: "hidden",
      position: "relative",
      backgroundColor: "#1A3A2A",
      fontFamily: "'Inter', sans-serif"
    }}>
      <img
        src={`${base}hero.jpg`}
        alt="Joyful child with backpack"
        crossOrigin="anonymous"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
          objectFit: "cover",
          zIndex: 0
        }}
      />
      <div style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        background: "linear-gradient(to bottom right, transparent 0%, transparent 35%, rgba(245,240,232,0.65) 58%, rgba(245,240,232,0.97) 100%)",
        zIndex: 1
      }} />

      <div style={{
        position: "absolute",
        bottom: "11vh",
        right: "7vw",
        width: "48vw",
        zIndex: 2,
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-end",
        textAlign: "right",
        color: "#1A3A2A"
      }}>
        <div style={{
          fontSize: "0.95vw",
          letterSpacing: "0.22vw",
          textTransform: "uppercase",
          fontWeight: 600,
          marginBottom: "2.2vh",
          display: "flex",
          alignItems: "center",
          gap: "0.7vw",
          opacity: 0.7
        }}>
          <span style={{
            display: "inline-block",
            width: "0.45vw",
            height: "0.45vw",
            backgroundColor: "#1A3A2A",
            borderRadius: "50%"
          }} />
          BRIGHT WINGS FOUNDATION
        </div>

        <h1 style={{
          fontFamily: "'Playfair Display', serif",
          fontSize: "5.2vw",
          fontStyle: "italic",
          fontWeight: 400,
          margin: "0 0 2.8vh 0",
          lineHeight: 1.1,
          textWrap: "balance"
        }}>
          Every Child Deserves a Chance to Shine.
        </h1>

        <p style={{
          fontSize: "1.55vw",
          fontWeight: 300,
          lineHeight: 1.55,
          margin: "0 0 3.5vh 0",
          maxWidth: "37vw",
          opacity: 0.85
        }}>
          Empowering children with disabilities through education, therapy, and hope — Lucknow, India
        </p>

        <div style={{
          fontSize: "0.9vw",
          fontFamily: "'Playfair Display', serif",
          fontStyle: "italic",
          opacity: 0.55,
          borderTop: "0.1vw solid rgba(26,58,42,0.3)",
          paddingTop: "1.4vh",
          width: "11vw",
          textAlign: "right"
        }}>
          EST. 2026
        </div>
      </div>

      <div style={{
        position: "absolute",
        bottom: "3vh",
        left: "4vw",
        right: "4vw",
        zIndex: 2,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        color: "#1A3A2A",
        fontFamily: "'Inter', sans-serif",
        fontWeight: 200,
        fontSize: "0.95vw",
        letterSpacing: "0.05vw",
        opacity: 0.55
      }}>
        <div>bright4wings@gmail.com</div>
        <div>01</div>
      </div>
    </div>
  );
}
