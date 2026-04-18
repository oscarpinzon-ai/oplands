import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        bg: '#08090a',
        'surface-1': '#0d0e10',
        'surface-2': '#131416',
        'surface-3': '#1a1c1f',
        fg: '#f7f8f8',
        'fg-muted': '#8a8f98',
        'fg-dim': '#62676f',
        cyan: '#67e8f9',
        'cyan-hot': '#22d3ee',
        'cyan-deep': '#0891b2',
      },
      fontFamily: {
        'inter': ['Inter', 'ui-sans-serif', 'system-ui'],
        'inter-tight': ['Inter Tight', 'Inter', 'sans-serif'],
        'mono': ['JetBrains Mono', 'ui-monospace', 'monospace'],
      },
      borderRadius: {
        DEFAULT: '10px',
        lg: '14px',
      },
    },
  },
  plugins: [],
}
export default config
