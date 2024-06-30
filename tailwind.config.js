/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        black: "#000",
        gray: {
          "100": "#1f2937",
          "200": "#111827",
          "300": "rgba(0, 0, 0, 0.3)",
        },
        white: "#fff",
        mediumspringgreen: "#22c55e",
        darkgray: {
          "100": "#b2b2b2",
          "200": "#9ca3af",
        },
        forestgreen: "#08ab45",
        darkslategray: "#374151",
      },
      spacing: {},
      fontFamily: {
        roboto: "Roboto",
      },
      borderRadius: {
        "9980xl": "9999px",
      },
    },
    fontSize: {
      lg: "18px",
      base: "16px",
      "11xl": "30px",
      xl: "20px",
      sm: "14px",
      "5xl": "24px",
      inherit: "inherit",
    },
    screens: {
      mq750: {
        raw: "screen and (max-width: 750px)",
      },
      mq675: {
        raw: "screen and (max-width: 675px)",
      },
      mq450: {
        raw: "screen and (max-width: 450px)",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
