const base = import.meta.env.BASE_URL;

export default function Slide9HowToHelp() {
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
        src={`${base}celebrate.jpg`}
        alt="Children celebrating"
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
        background: "linear-gradient(to right, rgba(26,58,42,0.97) 0%, rgba(26,58,42,0.88) 45%, rgba(26,58,42,0.5) 70%, transparent 100%)",
        zIndex: 1
      }} />

      <div style={{
        position: "absolute",
        top: "11vh",
        left: "7vw",
        width: "52vw",
        zIndex: 2,
        color: "#F5F0E8"
      }}>
        <div style={{
          fontSize: "0.9vw",
          letterSpacing: "0.22vw",
          textTransform: "uppercase",
          fontWeight: 600,
          marginBottom: "2.5vh",
          color: "rgba(245,240,232,0.55)"
        }}>
          HOW YOU CAN HELP
        </div>

        <h2 style={{
          fontFamily: "'Playfair Display', serif",
          fontSize: "4vw",
          fontStyle: "italic",
          fontWeight: 400,
          margin: "0 0 2vh 0",
          lineHeight: 1.1
        }}>
          Every Contribution Creates a Ripple of Change
        </h2>

        <p style={{
          fontSize: "1.45vw",
          fontWeight: 300,
          lineHeight: 1.55,
          marginBottom: "4.5vh",
          opacity: 0.75,
          maxWidth: "44vw"
        }}>
          There are many ways to stand with children who need us most.
        </p>

        <div style={{ display: "flex", flexDirection: "column", gap: "2.2vh" }}>
          <div style={{
            display: "flex",
            alignItems: "flex-start",
            gap: "2.5vw",
            borderTop: "0.1vw solid rgba(245,240,232,0.18)",
            paddingTop: "2vh"
          }}>
            <div style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "2.2vw",
              fontStyle: "italic",
              opacity: 0.4,
              flexShrink: 0,
              lineHeight: 1
            }}>01</div>
            <div>
              <div style={{ fontSize: "1.4vw", fontWeight: 600, marginBottom: "0.5vh" }}>Donate</div>
              <div style={{ fontSize: "1.2vw", fontWeight: 300, opacity: 0.7, lineHeight: 1.4 }}>Fund education, therapy, and mobility aids for children</div>
            </div>
          </div>
          <div style={{
            display: "flex",
            alignItems: "flex-start",
            gap: "2.5vw",
            borderTop: "0.1vw solid rgba(245,240,232,0.18)",
            paddingTop: "2vh"
          }}>
            <div style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "2.2vw",
              fontStyle: "italic",
              opacity: 0.4,
              flexShrink: 0,
              lineHeight: 1
            }}>02</div>
            <div>
              <div style={{ fontSize: "1.4vw", fontWeight: 600, marginBottom: "0.5vh" }}>Volunteer</div>
              <div style={{ fontSize: "1.2vw", fontWeight: 300, opacity: 0.7, lineHeight: 1.4 }}>Share your time and skills with children who need you</div>
            </div>
          </div>
          <div style={{
            display: "flex",
            alignItems: "flex-start",
            gap: "2.5vw",
            borderTop: "0.1vw solid rgba(245,240,232,0.18)",
            paddingTop: "2vh"
          }}>
            <div style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "2.2vw",
              fontStyle: "italic",
              opacity: 0.4,
              flexShrink: 0,
              lineHeight: 1
            }}>03</div>
            <div>
              <div style={{ fontSize: "1.4vw", fontWeight: 600, marginBottom: "0.5vh" }}>Partner</div>
              <div style={{ fontSize: "1.2vw", fontWeight: 300, opacity: 0.7, lineHeight: 1.4 }}>Collaborate as a corporate partner or NGO ally</div>
            </div>
          </div>
          <div style={{
            display: "flex",
            alignItems: "flex-start",
            gap: "2.5vw",
            borderTop: "0.1vw solid rgba(245,240,232,0.18)",
            paddingTop: "2vh"
          }}>
            <div style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "2.2vw",
              fontStyle: "italic",
              opacity: 0.4,
              flexShrink: 0,
              lineHeight: 1
            }}>04</div>
            <div>
              <div style={{ fontSize: "1.4vw", fontWeight: 600, marginBottom: "0.5vh" }}>Spread the Word</div>
              <div style={{ fontSize: "1.2vw", fontWeight: 300, opacity: 0.7, lineHeight: 1.4 }}>Raise awareness for inclusion in your community</div>
            </div>
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
        <div>09</div>
      </div>
    </div>
  );
}
