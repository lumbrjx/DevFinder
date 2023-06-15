/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primaryClr: "hsl(var(--primary-clr) / <alpha-value>)",
        secondaryClr: "hsl(var(--secondary-cl) / <alpha-value>)",
        layoutClr: "hsl(var(--layout-clr) / <alpha-value>)",
        fontClr: "hsl(var(--font-clr) / <alpha-value>)",
        disabledClr: "hsl(var(--disabled-clr) / <alpha-value>)",
      },
      fontSize: {
        smallFont: "1rem",
        largeFont: "2rem",
      },
      padding: {
        generalPad: "0.5rem",
        subPad: "0.3rem",
      },
      gap: {
        generalGap: "0.5rem",
        subGap: "0.3rem",
      },
      fontWeight: {
        bold: "700",
        normal: "400",
      },
    },
  },
  plugins: [],
};
