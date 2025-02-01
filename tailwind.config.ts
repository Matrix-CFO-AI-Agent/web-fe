import { Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme";

export default {
  darkMode: "class",
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/utils/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "zen-dots": ["ZenDots", "Inter", ...defaultTheme.fontFamily.sans],
      },
    },
  },
} satisfies Config;
