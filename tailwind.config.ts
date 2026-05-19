import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        base: "#06070a",
        panel: "#0c1018",
        line: "#1b2331",
        mist: "#c5ceda",
        silver: "#eef3f8",
        accent: "#77e0ff",
        flame: "#ff7a18"
      },
      boxShadow: {
        glow: "0 0 0 1px rgba(119,224,255,0.18), 0 24px 80px rgba(8,10,18,0.45)"
      },
      backgroundImage: {
        noise:
          "radial-gradient(circle at 20% 20%, rgba(119,224,255,0.12), transparent 30%), radial-gradient(circle at 80% 0%, rgba(255,122,24,0.16), transparent 25%), linear-gradient(180deg, rgba(255,255,255,0.03), transparent)"
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-space-grotesk)", "system-ui", "sans-serif"]
      }
    }
  },
  plugins: []
};

export default config;
