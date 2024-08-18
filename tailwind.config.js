/** @type {import('tailwindcss').Config} */
export default {
  purge: {
    mode: 'all',
    preserveHtmlElements: false,
    content: [
      "./app/**/*.{js,ts,jsx,tsx,mdx}",
      "./pages/**/*.{js,ts,jsx,tsx,mdx}",
      "./components/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
      extend: {
        colors: {
          primary: "#002c3e",
        },
        borderRadius: {
          'right': '100px 100px 300px 100px',
          'left': '300px 100px 100px 100px',
        },
      },
    },
    plugins: [
      function ({ addUtilities }) {
        addUtilities(
          {
            '.max-w-8xl': {
              maxWidth: '96rem', // Same value as in theme extend
            },
          },
          {
            variants: ['responsive'], // Optional: Add variants like responsive, hover, etc.
            layer: 'utilities', // Specify the layer
          }
        );
      },
    ],
  },
};
