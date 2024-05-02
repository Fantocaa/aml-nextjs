import type { Config } from "tailwindcss";

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
    // "node_modules/flowbite-react/lib/esm/**/*.js",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        darkpint: "#1E1E1E",
        bgwhitepint: "#F7F7F7",
        bgwhiteaml: "#FEFEFE",
        // bluepint: {
        //   100: "#7A8CFF",
        //   200: "#5873FF",
        //   300: "#355AFF",
        //   400: "#0F43FF",
        //   500: "#2145D7",
        //   600: "#0029D4",
        //   700: "#001FB9",
        //   800: "#00159E",
        //   900: "#000B82",
        // },
        blueaml: {
          100: "#7EB7E0",
          200: "#5DAFE0",
          300: "#3C98E0",
          400: "#1B80E0",
          500: "#1B6AAB",
          600: "#165E91",
          700: "#125082",
          800: "#0E4073",
          900: "#0A2E64",
        },
        redpint: {
          100: "#FEB6BA",
          200: "#F09498",
          300: "#E66E74",
          400: "#DE484F",
          500: "#DA1F26",
          600: "#C2171E",
          700: "#AD131A",
          800: "#980F16",
          900: "#830B11",
        },
        greenaml: {
          100: "#BCEEBD",
          200: "#93E49A",
          300: "#6AD976",
          400: "#41CF52",
          500: "#50B850",
          600: "#3AAC40",
          700: "#319333",
          800: "#277927",
          900: "#1E611B",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;
