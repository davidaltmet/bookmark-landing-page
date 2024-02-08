/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        SoftBlue: "hsl(231, 69%, 60%)",
        SoftRed: " hsl(0, 94%, 66%)",
        GrayishBlue: "hsl(229, 8%, 60%)",
        VeryDarkBlue: "hsl(229, 31%, 21%)",
      },
      textColor: {
        SoftBlue: "hsl(231, 69%, 60%)",
        SoftRed: "hsl(0, 94%, 66%)",
        GrayishBlue: "hsl(229, 8%, 60%)",
        VeryDarkBlue: "hsl(229, 31%, 21%)",
      },
      fontSize: {
        18: "18px",
      },
      borderColor: {
        SoftRed: " hsl(0, 94%, 66%)",
        SoftBlue: "hsl(231, 69%, 60%)",
        GrayishBlue: "hsl(229, 8%, 60%)",
        VeryDarkBlue: "hsl(229, 31%, 21%)",
      },
    },
  },
  plugins: [],
};
