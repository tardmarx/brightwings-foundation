const base = import.meta.env.BASE_URL;

export default function Slide2Mission() {
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
          src={`${base}children.jpg`}
          alt="Children in classroom"
          crossOrigin="anonymous"
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
        <div style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(26,58,42,0.35)"
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
          borderBottom: "0.1vw solid rgba(26,58,42,0.2)",
          paddingBottom: "1.2vh",
          width: "100%",
          opacity: 0.7
        }}>
          <span style={{
            display: "inline-block",
            width: "0.45vw",
            height: "0.45vw",
            backgroundColor: "#1A3A2A",
            borderRadius: "50%"
          }} />
          OUR MISSION
        </div>

        <h2 style={{
          fontFamily: "'Playfair Display', serif",
          fontSize: "4.2vw",
          fontStyle: "italic",
          fontWeight: 400,
          margin: "0 0 3.5vh 0",
          lineHeight: 1.1
        }}>
          A Brighter Future for Every Child
        </h2>

        <p style={{
          fontSize: "1.55vw",
          fontWeight: 300,
          lineHeight: 1.6,
          marginBottom: "3vh",
          opacity: 0.85
        }}>
          Bright Wings Foundation is dedicated to empowering children with physical, intellectual, hearing, visual, and developmental disabilities.
        </p>

        <div style={{ display: "flex", flexDirection: "column", gap: "1.6vh" }}>
          <div style={{ display: "flex", alignItems: "flex-start", gap: "1vw" }}>
            <span style={{
              display: "inline-block",
              width: "0.35vw",
              height: "0.35vw",
              backgroundColor: "#1A3A2A",
              borderRadius: "50%",
              marginTop: "0.9vh",
              flexShrink: 0,
              opacity: 0.6
            }} />
            <p style={{ fontSize: "1.45vw", fontWeight: 300, margin: 0, lineHeight: 1.5, opacity: 0.85 }}>
              We believe every child deserves education, dignity, and love
            </p>
          </div>
          <div style={{ display: "flex", alignItems: "flex-start", gap: "1vw" }}>
            <span style={{
              display: "inline-block",
              width: "0.35vw",
              height: "0.35vw",
              backgroundColor: "#1A3A2A",
              borderRadius: "50%",
              marginTop: "0.9vh",
              flexShrink: 0,
              opacity: 0.6
            }} />
            <p style={{ fontSize: "1.45vw", fontWeight: 300, margin: 0, lineHeight: 1.5, opacity: 0.85 }}>
              We create equal opportunities for every child to succeed
            </p>
          </div>
          <div style={{ display: "flex", alignItems: "flex-start", gap: "1vw" }}>
            <span style={{
              display: "inline-block",
              width: "0.35vw",
              height: "0.35vw",
              backgroundColor: "#1A3A2A",
              borderRadius: "50%",
              marginTop: "0.9vh",
              flexShrink: 0,
              opacity: 0.6
            }} />
            <p style={{ fontSize: "1.45vw", fontWeight: 300, margin: 0, lineHeight: 1.5, opacity: 0.85 }}>
              We build inclusive communities where every child belongs
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
        opacity: 0.45
      }}>
        <div>bright4wings@gmail.com</div>
        <div>02</div>
      </div>
    </div>
  );
}
