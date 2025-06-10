/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: "#e9a132",
        secondary: "#141824",
        tryary: "#0F111A",
        tertiary: '#fea316',
        accent: '#F59E0B',
        neutral: '#374151',
        'base-100': '#FFFFFF',
        info: '#2563EB',
        success: '#16A34A',
        warning: '#F59E0B',
        error: '#EF4444',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Merriweather', 'serif'],
        mono: ['Fira Code', 'monospace'],
      },
    },
  },
  plugins: [require("daisyui"), require("flowbite/plugin")],
};
