import { nextui } from "@nextui-org/react";
import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/components/(button|checkbox|input|modal|tabs|ripple|spinner|form).js",
  ],
  theme: {
    extend: {
      screens: {
        xs: "390px", // Custom screen size for very small screens
        mlg: "1000px", // Custom screen size for very display screen
      },
      fontFamily: {
        PretendardBold: ["var(--font-PretendardBold)", "sans-serif"],
        pretendardRegular: ["var(--font-PretendardRegular)", "sans-serif"],
        PretendardMedium: ["var(--font-PretendardMedium)", "sans-serif"],
        PretendardBlack: ["var(--font-PretendardBlack)", "sans-serif"],
        PretendardExtraBold: ["var(--font-PretendardExtraBold)", "sans-serif"],
        PretendardExtraLight: [
          "var(--font-PretendardExtraLight)",
          "sans-serif",
        ],
        PretendardLight: ["var(--font-PretendardLight)", "sans-serif"],
        PretendardSemiBold: ["var(--font-PretendardSemiBold)", "sans-serif"],
        PretendardThin: ["var(--font-PretendardThin)", "sans-serif"],
      },

      colors: {
        // background: "var(--background)",
        // foreground: "var(--foreground)",
        "logo-color": "#2c49a4",
        "main-color": "#255DF9",
        "main-light-color": "#429FFF",
        "message-bubble-blue": "#4373F9",
        "red-color": "#F05858",
        "orange-color": "#FFA813",
        "purple-color": "#9761FF",
        "grey-disabled": "#ABAFB7",
        "grey-light": "#F2F3F5",
        "grey-font": "#404251",
        "grey-font-light": "#80808E",
        "grey-border": "#E4E5EA",
        "grey-modal-bg": "#626262",
        "blue-bg": "#E3F1FF",
      },
      backgroundImage: {
        "custom-gradient": "linear-gradient(to top, #255DF9, #7095FF)",
      },
      spacing: {
        safe: 'env(safe-area-inset-bottom)', // Adds safe-area padding
      },
    },
  },
  plugins: [
    nextui({
      themes: {
        dark: {
          colors: {
            primary: {
              DEFAULT: "#255DF9",
              foreground: "#FFF",
            },
            secondary: {
              DEFAULT: "#255DF9",
              foreground: "#FFF",
            },
            focus: "#255DF9",
          },
        },
      },
    }),
  ],
} satisfies Config;
