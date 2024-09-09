import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'gradient-navbar': 'linear-gradient(to bottom, #fca9ca, #debbc1)',
        'gradient-toggle-menu': 'linear-gradient(rgb(77, 43, 68), rgb(77, 43, 68))', // Ensuring it's a valid CSS gradient
      },
      fontFamily: {
        'kumbh': ['"Kumbh Sans"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
export default config
