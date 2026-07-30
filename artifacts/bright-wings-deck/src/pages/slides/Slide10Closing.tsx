const base = import.meta.env.BASE_URL;

export default function Slide10Closing() {
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
        alt="Bright Wings Foundation"
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
        background: "linear-gradient(to top right, rgba(26,58,42,0.97) 0%, rgba(26,58,42,0.82) 40%, rgba(26,58,42,0.5) 70%, transparent 100%)",
        zIndex: 1
      }} />

      <div style={{
        position: "absolute",
        bottom: "10vh",
        left: "8vw",
        width: "52vw",
        zIndex: 2,
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        color: "#F5F0E8"
      }}>
        <div style={{
          fontSize: "0.9vw",
          letterSpacing: "0.22vw",
          textTransform: "uppercase",
          fontWeight: 600,
          marginBottom: "2.5vh",
          opacity: 0.55
        }}>
          TOGETHER, WE SHINE
        </div>

        <h1 style={{
          fontFamily: "'Playfair Display', serif",
          fontSize: "5.5vw",
          fontStyle: "italic",
          fontWeight: 400,
          margin: "0 0 3vh 0",
          lineHeight: 1.1,
          textWrap: "balance"
        }}>
          Join Us in Building a More Inclusive Future.
        </h1>

        <p style={{
          fontSize: "1.5vw",
          fontWeight: 300,
          lineHeight: 1.6,
          marginBottom: "4.5vh",
          opacity: 0.75,
          maxWidth: "42vw"
        }}>
          Every child deserves a chance to shine. With your support, we can reach more children, more families, and more communities.
        </p>

        <div style={{
          display: "flex",
          gap: "4vw",
          borderTop: "0.1vw solid rgba(245,240,232,0.25)",
          paddingTop: "3.5vh",
          width: "100%"
        }}>
          <div>
            <div style={{ fontSize: "0.8vw", textTransform: "uppercase", letterSpacing: "0.12vw", opacity: 0.5, marginBottom: "0.8vh" }}>Email</div>
            <div style={{ fontSize: "1.3vw", fontWeight: 500 }}>bright4wings@gmail.com</div>
          </div>
          <div>
            <div style={{ fontSize: "0.8vw", textTransform: "uppercase", letterSpacing: "0.12vw", opacity: 0.5, marginBottom: "0.8vh" }}>Phone</div>
            <div style={{ fontSize: "1.3vw", fontWeight: 500 }}>+91 8081939363</div>
          </div>
          <div>
            <div style={{ fontSize: "0.8vw", textTransform: "uppercase", letterSpacing: "0.12vw", opacity: 0.5, marginBottom: "0.8vh" }}>Location</div>
            <div style={{ fontSize: "1.3vw", fontWeight: 500 }}>Lucknow, India</div>
          </div>
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
        color: "#F5F0E8",
        fontFamily: "'Inter', sans-serif",
        fontWeight: 200,
        fontSize: "0.9vw",
        letterSpacing: "0.05vw",
        opacity: 0.4
      }}>
        <div>bright4wings@gmail.com</div>
        <div>10</div>
      </div>
    </div>
  );
}
