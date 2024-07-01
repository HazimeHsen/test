/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#000000",
          "primary-content": "#ffffff",
          secondary: "#F7F7F7",
          accent: "#37cdbe",
          neutral: "#3d4451",
          info: "#29AEF8",
          "info-content": "#ffffff",
          "base-100": "#ffffff",
          error: "#eb3626",
          "error-content": "#ffffff",
        },
      },
      "winter",
    ],
  },
};
