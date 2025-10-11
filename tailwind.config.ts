import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            // Font families
            fontFamily: {
                sans: ["var(--font-en)", "sans-serif"],
                thai: ["var(--font-th)", "var(--font-en)", "sans-serif"],
            },
            borderRadius: {
                "20": "20px",
            },
            boxShadow: {
                "port-card": "0 2px 10px 0 rgba(0, 0, 0, 0.15);",
            },
        },
    },
    plugins: [
        require("@tailwindcss/forms"),
        require("@tailwindcss/typography"),
        require("@tailwindcss/aspect-ratio"),
    ],
};

export default config;
