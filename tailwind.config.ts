import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      typography: {
        blogTitle: {
          fontSize: "3rem",
          fontWeight: "bold",
          color: "#FFFFFF",
        },
        blogDescription: {
          fontSize: "1.25rem",
          fontWeight: "bold",
          color: "#96979A",
        },
        blogPictureDescription: {
          fontSize: "1.25rem",
          fontWeight: "regular",
          color: "#96979A",
        },
        blogHeading: {
          fontSize: "1.25rem",
          fontWeight: "bold",
          color: "#E95278",
          textTransform: "uppercase",
        },
        blogParagraph: {
          fontSize: "1.25rem",
          color: "#FFFFFF",
        },
        highlight: {
          backgroundColor: "yellow",
          color: "#000",
        },
      },
    },
  },
  plugins: [],
};
export default config;
