import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontSize: {
        h1: [
          '36px',
          {
            lineHeight: '48px',
            fontWeight: '900',
          },
        ],
        h2: [
          '26px',
          {
            lineHeight: '36px',
            fontWeight: '900',
          },
        ],
        h3: [
          '20px',
          {
            lineHeight: '32px',
            fontWeight: '900',
          },
        ],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'primary-color': 'var(--primary-color)',
        'error-color': 'var(--error-color)',
        'border-color': 'var(--border-color)',
        'disabled-color': 'var(--disabled-color)',
      },
    },
  },
  plugins: [],
};
export default config;
