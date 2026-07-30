export default function Slide7Impact() {
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
        right: "-4vw",
        width: "42vw",
        height: "42vw",
        borderRadius: "50%",
        border: "0.1vw solid rgba(245,240,232,0.07)",
        zIndex: 0
      }} />
      <div style={{
        position: "absolute",
        bottom: "-18vh",
        left: "-8vw",
        width: "52vw",
        height: "52vw",
        borderRadius: "50%",
        border: "0.1vw solid rgba(245,240,232,0.04)",
        zIndex: 0
      }} />

      <div style={{
        position: "absolute",
        top: "11vh",
        left: "7vw",
        right: "7vw",
        zIndex: 2
      }}>
        <div style={{
          fontSize: "0.9vw",
          letterSpacing: "0.22vw",
          textTransform: "uppercase",
          fontWeight: 600,
          marginBottom: "2vh",
          color: "rgba(245,240,232,0.55)"
        }}>
          OUR IMPACT
        </div>

        <div style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-end",
          marginBottom: "7vh",
          borderBottom: "0.1vw solid rgba(245,240,232,0.15)",
          paddingBottom: "2.5vh"
        }}>
          <h2 style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "3.8vw",
            fontStyle: "italic",
            fontWeight: 400,
            margin: 0,
            lineHeight: 1.1
          }}>
            Changing Lives, One Child at a Time
          </h2>
          <p style={{
            fontSize: "1.3vw",
            fontWeight: 300,
            maxWidth: "28vw",
            margin: 0,
            opacity: 0.65,
            lineHeight: 1.5,
            textAlign: "right"
          }}>
            Programs running across Lucknow and surrounding regions since 2026
          </p>
        </div>

        <div style={{
          display: "flex",
          justifyContent: "space-between",
          gap: "2.5vw"
        }}>
          <div style={{
            flex: 1,
            backgroundColor: "rgba(245,240,232,0.04)",
            padding: "4vh 2.2vw",
            borderTop: "0.2vw solid #F5F0E8"
          }}>
            <div style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "6vw",
              fontStyle: "italic",
              fontWeight: 300,
              marginBottom: "1.2vh",
              lineHeight: 1
            }}>
              2,500<span style={{ fontSize: "3.5vw", opacity: 0.6 }}>+</span>
            </div>
            <div style={{
              fontSize: "1vw",
              fontWeight: 600,
              letterSpacing: "0.1vw",
              textTransform: "uppercase",
              marginBottom: "1.2vh"
            }}>
              Children Supported
            </div>
            <p style={{ fontSize: "1vw", fontWeight: 300, opacity: 0.55, margin: 0, lineHeight: 1.5 }}>
              Lives transformed through education, therapy, and care
            </p>
          </div>

          <div style={{
            flex: 1,
            backgroundColor: "rgba(245,240,232,0.04)",
            padding: "4vh 2.2vw",
            borderTop: "0.2vw solid #F5F0E8"
          }}>
            <div style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "6vw",
              fontStyle: "italic",
              fontWeight: 300,
              marginBottom: "1.2vh",
              lineHeight: 1
            }}>
              180<span style={{ fontSize: "3.5vw", opacity: 0.6 }}>+</span>
            </div>
            <div style={{
              fontSize: "1vw",
              fontWeight: 600,
              letterSpacing: "0.1vw",
              textTransform: "uppercase",
              marginBottom: "1.2vh"
            }}>
              Dedicated Volunteers
            </div>
            <p style={{ fontSize: "1vw", fontWeight: 300, opacity: 0.55, margin: 0, lineHeight: 1.5 }}>
              Hearts and hands working together for inclusion
            </p>
          </div>

          <div style={{
            flex: 1,
            backgroundColor: "rgba(245,240,232,0.04)",
            padding: "4vh 2.2vw",
            borderTop: "0.2vw solid #F5F0E8"
          }}>
            <div style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "6vw",
              fontStyle: "italic",
              fontWeight: 300,
              marginBottom: "1.2vh",
              lineHeight: 1
            }}>
              40<span style={{ fontSize: "3.5vw", opacity: 0.6 }}>+</span>
            </div>
            <div style={{
              fontSize: "1vw",
              fontWeight: 600,
              letterSpacing: "0.1vw",
              textTransform: "uppercase",
              marginBottom: "1.2vh"
            }}>
              Communities Reached
            </div>
            <p style={{ fontSize: "1vw", fontWeight: 300, opacity: 0.55, margin: 0, lineHeight: 1.5 }}>
              Building inclusion across Lucknow and beyond
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
        <div>07</div>
      </div>
    </div>
  );
}
