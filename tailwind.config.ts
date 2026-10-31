import type { Config } from "tailwindcss";

const config: Config = {
    darkMode: ["class"],
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: "#0A2540",       // Navy (Easy)
                secondary: "#0070F3",     // Vibrant Blue (Property)
                background: "#F8FAFC",
                foreground: "#0F172A",
                card: "#FFFFFF",
                border: "#E2E8F0",
                muted: "#F1F5F9",
                "muted-foreground": "#64748B",
            },
        },
    },
    plugins: [],
};
export default config;