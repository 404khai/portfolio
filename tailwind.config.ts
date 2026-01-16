import type { Config } from "tailwindcss";

export default {
  theme: {
    extend: {
      fontFamily: {
        figtree: ["var(--font-figtree)", "sans-serif"],
        doto: ["var(--font-doto)", "sans-serif"],
        micro_5: ["var(--font-micro-5)", "sans-serif"],
        irishGrover: ["var(--font-irish-grover)", "sans-serif"],
        calistoga: ["var(--font-calistoga)", "sans-serif"],
        denkOne: ["var(--font-denk-one)", "sans-serif"],
        hennyPenny: ["var(--font-henny-penny)", "sans-serif"],
        exo2: ["var(--font-exo-2)", "sans-serif"],
      },
    },
  },
} satisfies Config;
