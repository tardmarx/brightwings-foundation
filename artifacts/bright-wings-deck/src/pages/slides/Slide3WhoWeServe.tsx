const base = import.meta.env.BASE_URL;

export default function Slide3WhoWeServe() {
  return (
    <div style={{
      width: "100vw",
      height: "100vh",
      overflow: "hidden",
      position: "relative",
      backgroundColor: "#1A3A2A",
      fontFamily: "'Inter', sans-serif",
      color: "#F5F0E8"
    }}>
      <div style={{
        position: "absolute",
        top: "-8vh",
        right: "-3vw",
        width: "38vw",
        height: "38vw",
        borderRadius: "50%",
        border: "0.1vw solid rgba(245,240,232,0.08)",
        zIndex: 0
      }} />
      <div style={{
        position: "absolute",
        bottom: "-20vh",
        left: "-8vw",
        width: "55vw",
        height: "55vw",
        borderRadius: "50%",
        border: "0.1vw solid rgba(245,240,232,0.04)",
        zIndex: 0
      }} />

      <div style={{
        position: "absolute",
        top: 0,
        right: 0,
        width: "42vw",
        height: "100vh",
        zIndex: 1
      }}>
        <img
          src={`${base}children.jpg`}
          alt="Diverse children learning"
          crossOrigin="anonymous"
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
        <div style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          background: "linear-gradient(to right, rgba(26,58,42,1) 0%, rgba(26,58,42,0.4) 40%, transparent 100%)"
        }} />
      </div>

      <div style={{
        position: "absolute",
        top: "13vh",
        left: "7vw",
        width: "48vw",
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
          color: "rgba(245,240,232,0.6)"
        }}>
          <span style={{
            display: "inline-block",
            width: "0.45vw",
            height: "0.45vw",
            backgroundColor: "#F5F0E8",
            borderRadius: "50%",
            opacity: 0.6
          }} />
          WHO WE SERVE
        </div>

        <h2 style={{
          fontFamily: "'Playfair Display', serif",
          fontSize: "4vw",
          fontStyle: "italic",
          fontWeight: 400,
          margin: "0 0 2.5vh 0",
          lineHeight: 1.1
        }}>
          Children Who Need Us Most
        </h2>

        <p style={{
          fontSize: "1.5vw",
          fontWeight: 300,
          lineHeight: 1.55,
          marginBottom: "3.5vh",
          opacity: 0.75,
          maxWidth: "40vw"
        }}>
          We support children living with a range of disabilities, meeting each child where they are.
        </p>

        <div style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "1.4vh 3vw"
        }}>
          <div style={{
            display: "flex",
            alignItems: "center",
            gap: "1vw",
            borderTop: "0.1vw solid rgba(245,240,232,0.2)",
            paddingTop: "1.4vh"
          }}>
            <div style={{
              width: "0.4vw",
              height: "2.5vh",
              backgroundColor: "#F5F0E8",
              opacity: 0.5,
              flexShrink: 0
            }} />
            <span style={{ fontSize: "1.4vw", fontWeight: 400 }}>Physical disabilities</span>
          </div>
          <div style={{
            display: "flex",
            alignItems: "center",
            gap: "1vw",
            borderTop: "0.1vw solid rgba(245,240,232,0.2)",
            paddingTop: "1.4vh"
          }}>
            <div style={{
              width: "0.4vw",
              height: "2.5vh",
              backgroundColor: "#F5F0E8",
              opacity: 0.5,
              flexShrink: 0
            }} />
            <span style={{ fontSize: "1.4vw", fontWeight: 400 }}>Hearing impairments</span>
          </div>
          <div style={{
            display: "flex",
            alignItems: "center",
            gap: "1vw",
            borderTop: "0.1vw solid rgba(245,240,232,0.2)",
            paddingTop: "1.4vh"
          }}>
            <div style={{
              width: "0.4vw",
              height: "2.5vh",
              backgroundColor: "#F5F0E8",
              opacity: 0.5,
              flexShrink: 0
            }} />
            <span style={{ fontSize: "1.4vw", fontWeight: 400 }}>Intellectual disabilities</span>
          </div>
          <div style={{
            display: "flex",
            alignItems: "center",
            gap: "1vw",
            borderTop: "0.1vw solid rgba(245,240,232,0.2)",
            paddingTop: "1.4vh"
          }}>
            <div style={{
              width: "0.4vw",
              height: "2.5vh",
              backgroundColor: "#F5F0E8",
              opacity: 0.5,
              flexShrink: 0
            }} />
            <span style={{ fontSize: "1.4vw", fontWeight: 400 }}>Visual impairments</span>
          </div>
          <div style={{
            display: "flex",
            alignItems: "center",
            gap: "1vw",
            borderTop: "0.1vw solid rgba(245,240,232,0.2)",
            paddingTop: "1.4vh"
          }}>
            <div style={{
              width: "0.4vw",
              height: "2.5vh",
              backgroundColor: "#F5F0E8",
              opacity: 0.5,
              flexShrink: 0
            }} />
            <span style={{ fontSize: "1.4vw", fontWeight: 400 }}>Multiple &amp; complex needs</span>
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
        <div>03</div>
      </div>
    </div>
  );
}
