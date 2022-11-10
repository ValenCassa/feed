/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				bodyBackground: '#FCFCFC',
				textPrimary: '#333333',
				darkGray: '#bbbbbb',
				gray: '#f5f5f5',
				danger: '#f07878',
				lightDanger: '#ffdfdf',
				success: '#4BDE48',
				lightSuccess: '#E3FFDE',
				warning: '#edd391',
				lightWarning: '#fff9ea',
				borderGray: '#EAEAEA'
			},
			backgroundImage: {
				profileHeader: "url('/img/profileBackground.jpg')",
				profilePic: "url('/img/profilePic.png')"
			},
			padding: {
				defaultX: '1em'
			}
		},
		fontFamily: {
			sans: ['Satoshi', 'sans-serif']
		},
		fontWeight: {
			normal: 400,
			bold: 600,
			medium: 500
		}
	},
	plugins: [require('@tailwindcss/typography')]
};
