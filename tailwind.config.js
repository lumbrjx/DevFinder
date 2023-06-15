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
        verySmallFont: "1.1rem",
        smallFont: "1.2rem",
        largeFont: "1.6rem",
      },
      padding: {
        generalPad: "1.4rem",
        subPad: "1rem",
      },
      gap: {
        generalGap: "0.5rem",
        subGap: "0.3rem",
      },
      fontWeight: {
        bold: "700",
        normal: "500",
      },
    },
  },
  plugins: [],
};
