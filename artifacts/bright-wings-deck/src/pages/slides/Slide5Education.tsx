const base = import.meta.env.BASE_URL;

export default function Slide5Education() {
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
        left: "-5vw",
        width: "40vw",
        height: "40vw",
        borderRadius: "50%",
        border: "0.1vw solid rgba(245,240,232,0.06)",
        zIndex: 0
      }} />

      <div style={{
        position: "absolute",
        top: 0,
        right: 0,
        width: "43vw",
        height: "100vh",
        zIndex: 1
      }}>
        <img
          src={`${base}education.jpg`}
          alt="Child reading in classroom"
          crossOrigin="anonymous"
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
        <div style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          background: "linear-gradient(to right, rgba(26,58,42,1) 0%, rgba(26,58,42,0.3) 50%, transparent 100%)"
        }} />
      </div>

      <div style={{
        position: "absolute",
        top: "12vh",
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
          color: "rgba(245,240,232,0.55)"
        }}>
          INCLUSIVE EDUCATION
        </div>

        <h2 style={{
          fontFamily: "'Playfair Display', serif",
          fontSize: "4vw",
          fontStyle: "italic",
          fontWeight: 400,
          margin: "0 0 2.5vh 0",
          lineHeight: 1.1
        }}>
          Education That Leaves No Child Behind
        </h2>

        <p style={{
          fontSize: "1.5vw",
          fontWeight: 300,
          lineHeight: 1.6,
          marginBottom: "4vh",
          opacity: 0.75,
          maxWidth: "42vw"
        }}>
          Tailored learning that meets each child's unique needs, ensuring every student can participate and thrive.
        </p>

        <div style={{ display: "flex", flexDirection: "column", gap: "2vh" }}>
          <div style={{
            display: "flex",
            alignItems: "flex-start",
            gap: "1.2vw",
            borderTop: "0.1vw solid rgba(245,240,232,0.15)",
            paddingTop: "1.8vh"
          }}>
            <div style={{ width: "0.4vw", height: "2.5vh", backgroundColor: "#F5F0E8", opacity: 0.5, flexShrink: 0, marginTop: "0.3vh" }} />
            <p style={{ fontSize: "1.4vw", fontWeight: 300, margin: 0, lineHeight: 1.5 }}>
              Accessible learning materials tailored to each child's needs
            </p>
          </div>
          <div style={{
            display: "flex",
            alignItems: "flex-start",
            gap: "1.2vw",
            borderTop: "0.1vw solid rgba(245,240,232,0.15)",
            paddingTop: "1.8vh"
          }}>
            <div style={{ width: "0.4vw", height: "2.5vh", backgroundColor: "#F5F0E8", opacity: 0.5, flexShrink: 0, marginTop: "0.3vh" }} />
            <p style={{ fontSize: "1.4vw", fontWeight: 300, margin: 0, lineHeight: 1.5 }}>
              Trained educators and special educators
            </p>
          </div>
          <div style={{
            display: "flex",
            alignItems: "flex-start",
            gap: "1.2vw",
            borderTop: "0.1vw solid rgba(245,240,232,0.15)",
            paddingTop: "1.8vh"
          }}>
            <div style={{ width: "0.4vw", height: "2.5vh", backgroundColor: "#F5F0E8", opacity: 0.5, flexShrink: 0, marginTop: "0.3vh" }} />
            <p style={{ fontSize: "1.4vw", fontWeight: 300, margin: 0, lineHeight: 1.5 }}>
              Scholarships for underprivileged families
            </p>
          </div>
          <div style={{
            display: "flex",
            alignItems: "flex-start",
            gap: "1.2vw",
            borderTop: "0.1vw solid rgba(245,240,232,0.15)",
            paddingTop: "1.8vh"
          }}>
            <div style={{ width: "0.4vw", height: "2.5vh", backgroundColor: "#F5F0E8", opacity: 0.5, flexShrink: 0, marginTop: "0.3vh" }} />
            <p style={{ fontSize: "1.4vw", fontWeight: 300, margin: 0, lineHeight: 1.5 }}>
              Partnerships with mainstream schools for integrated learning
            </p>
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
        <div>05</div>
      </div>
    </div>
  );
}
