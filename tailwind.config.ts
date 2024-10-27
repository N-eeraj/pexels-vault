import type { Config } from "tailwindcss"

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#fcfdfd",
        secondary: {
          DEFAULT: "#4a4a4a",
          variant: "#2c343e",
        },
        accent: "#01a081",
      },
    },
  },
  plugins: [],
}

export default config
