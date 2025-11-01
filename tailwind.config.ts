// tailwind.config.ts
import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Montserrat: ["Montserrat", "sans-serif"],
        "Noto-Sans": ['"Noto Sans"', "sans-serif"],
        "Comforter-Brush": ['"Comforter Brush"', "cursive"],
      },
    },
  },
} satisfies Config;
