import type { Config } from "tailwindcss";

const config: Config = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			backgroundImage: {
				"gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
				"gradient-conic":
					"conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
				slide01: "url('/public/images/img1.png')",
				slide02: "url('/public/images/img2.png')",
				slide03: "url('/public/images/img3.png')",
				slide04: "url('/public/images/img4.png')",
				slide05: "url('/public/images/img5.png')",
				slide06: "url('/public/images/img6.png')",
			},
		},
	},
	plugins: [],
};
export default config;
