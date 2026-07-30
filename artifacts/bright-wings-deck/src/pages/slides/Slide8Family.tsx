const base = import.meta.env.BASE_URL;

export default function Slide8Family() {
  return (
    <div style={{
      width: "100vw",
      height: "100vh",
      overflow: "hidden",
      position: "relative",
      backgroundColor: "#F5F0E8",
      fontFamily: "'Inter', sans-serif",
      color: "#1A3A2A"
    }}>
      <div style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "32vw",
        height: "100vh"
      }}>
        <img
          src={`${base}community.jpg`}
          alt="Family community workshop"
          crossOrigin="anonymous"
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
        <div style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(26,58,42,0.42)"
        }} />
      </div>

      <div style={{
        position: "absolute",
        top: "14vh",
        left: "40vw",
        width: "52vw",
        zIndex: 2
      }}>
        <div style={{
          fontSize: "0.9vw",
          letterSpacing: "0.22vw",
          textTransform: "uppercase",
          fontWeight: 600,
          marginBottom: "2.5vh",
          display: "flex",
          alignItems: "center",
          gap: "0.5vw",
          borderBottom: "0.1vw solid rgba(26,58,42,0.18)",
          paddingBottom: "1.2vh",
          width: "100%",
          opacity: 0.6
        }}>
          <span style={{
            display: "inline-block",
            width: "0.45vw",
            height: "0.45vw",
            backgroundColor: "#1A3A2A",
            borderRadius: "50%"
          }} />
          FAMILY &amp; COMMUNITY
        </div>

        <h2 style={{
          fontFamily: "'Playfair Display', serif",
          fontSize: "3.8vw",
          fontStyle: "italic",
          fontWeight: 400,
          margin: "0 0 2.5vh 0",
          lineHeight: 1.15
        }}>
          Strength Starts at Home
        </h2>

        <p style={{
          fontSize: "1.5vw",
          fontWeight: 300,
          lineHeight: 1.6,
          marginBottom: "3.5vh",
          opacity: 0.8
        }}>
          A child flourishes when their family is supported. We walk alongside families every step of the way.
        </p>

        <div style={{ display: "flex", flexDirection: "column", gap: "2vh" }}>
          <div style={{
            display: "flex",
            alignItems: "flex-start",
            gap: "1.2vw",
            borderTop: "0.1vw solid rgba(26,58,42,0.15)",
            paddingTop: "1.8vh"
          }}>
            <div style={{ width: "0.4vw", height: "2.5vh", backgroundColor: "#1A3A2A", opacity: 0.4, flexShrink: 0, marginTop: "0.3vh" }} />
            <p style={{ fontSize: "1.4vw", fontWeight: 300, margin: 0, lineHeight: 1.5, opacity: 0.85 }}>
              Family counselling and emotional support
            </p>
          </div>
          <div style={{
            display: "flex",
            alignItems: "flex-start",
            gap: "1.2vw",
            borderTop: "0.1vw solid rgba(26,58,42,0.15)",
            paddingTop: "1.8vh"
          }}>
            <div style={{ width: "0.4vw", height: "2.5vh", backgroundColor: "#1A3A2A", opacity: 0.4, flexShrink: 0, marginTop: "0.3vh" }} />
            <p style={{ fontSize: "1.4vw", fontWeight: 300, margin: 0, lineHeight: 1.5, opacity: 0.85 }}>
              Awareness workshops to reduce stigma around disability
            </p>
          </div>
          <div style={{
            display: "flex",
            alignItems: "flex-start",
            gap: "1.2vw",
            borderTop: "0.1vw solid rgba(26,58,42,0.15)",
            paddingTop: "1.8vh"
          }}>
            <div style={{ width: "0.4vw", height: "2.5vh", backgroundColor: "#1A3A2A", opacity: 0.4, flexShrink: 0, marginTop: "0.3vh" }} />
            <p style={{ fontSize: "1.4vw", fontWeight: 300, margin: 0, lineHeight: 1.5, opacity: 0.85 }}>
              Community empowerment programs
            </p>
          </div>
          <div style={{
            display: "flex",
            alignItems: "flex-start",
            gap: "1.2vw",
            borderTop: "0.1vw solid rgba(26,58,42,0.15)",
            paddingTop: "1.8vh"
          }}>
            <div style={{ width: "0.4vw", height: "2.5vh", backgroundColor: "#1A3A2A", opacity: 0.4, flexShrink: 0, marginTop: "0.3vh" }} />
            <p style={{ fontSize: "1.4vw", fontWeight: 300, margin: 0, lineHeight: 1.5, opacity: 0.85 }}>
              Parent networks and peer support groups
            </p>
          </div>
        </div>
      </div>

      <div style={{
        position: "absolute",
        bottom: "3vh",
        left: "36vw",
        right: "4vw",
        zIndex: 2,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        color: "#1A3A2A",
        fontFamily: "'Inter', sans-serif",
        fontWeight: 400,
        fontSize: "0.9vw",
        letterSpacing: "0.05vw",
        opacity: 0.4
      }}>
        <div>bright4wings@gmail.com</div>
        <div>08</div>
      </div>
    </div>
  );
}
