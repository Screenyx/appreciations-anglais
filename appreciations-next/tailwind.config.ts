import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: { extend: { fontFamily: { serif: ['"DM Serif Display"', 'serif'] } } },
  plugins: [],
}
export default config
