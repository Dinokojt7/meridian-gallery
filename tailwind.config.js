/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx}", "./components/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        paper: "#F6F4EF",
        "paper-2": "#EDE9E1",
        surface: "#FBFAF7",
        ink: "#1C1A17",
        "ink-soft": "#4A463F",
        muted: "#8A857B",
        line: "#DAD5CB",
        accent: "#7C2D3A",
        "accent-deep": "#5E212C",
        caption: "#A39C8F",
        "footer-text": "#C9C3B8",
        "footer-divider": "#3A352E",
      },
      fontFamily: {
        serif: ["var(--font-cormorant)", "Georgia", "serif"],
        sans: ["var(--font-poppins)", "system-ui", "sans-serif"],
      },
      maxWidth: {
        shell: "1280px",
      },
    },
  },
  plugins: [],
};
