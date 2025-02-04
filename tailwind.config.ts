import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			colors: {
				background: 'var(--background)',
				foreground: 'var(--foreground)'
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			backgroundImage: {
				'bg-img-1': "url('/img1.jpg')",
				'bg-img-2': "url('/img2.jpg')",
				'bg-img-3': "url('/img3.jpg')",
				'bg-img-4': "url('/img4.jpg')",
			},
			screens: {
				'sm': '640px',
				'lt': '768px',
				'md': '800px',
				'lg': '1024px',
				'xl': '1280px',
				'2xl': '1300px',
				'3xl': '1430px',
				'4xl': '1536px',
				'5xl': '2500px',
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
