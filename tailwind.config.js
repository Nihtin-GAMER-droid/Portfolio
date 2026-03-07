export default {
  theme: {
    extend: {
      colors: {
        primary: "#00E5FF",
        secondary: "#00FFA3",
        accent: "#FFB300",
        background: "#0A0F14"
      },
      animation: {
        pulseSlow: "pulse 4s infinite",
        float: "float 6s ease-in-out infinite"
      },
      keyframes: {
        float: {
          "0%,100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" }
        }
      }
    }
  }
}