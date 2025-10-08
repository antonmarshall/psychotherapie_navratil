import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: '#fff8ed', // Creme (wird ersetzt durch bg-creme)
				foreground: '#222222', // Dunkel
				
				// === ZENTRALE FARBEN - MIT CSS-VARIABLEN VERKNÜPFT ===
				
				// Primärfarben
				primary: {
					DEFAULT: 'var(--color-primary)',     // #F6A81A
					hover: 'var(--color-primary-hover)', // #F6C544
					light: 'var(--color-primary-light)', // #F9E79F
					dark: '#D4A017',                     // Dunkleres Gold
					foreground: '#222222',
				},
				
				// Abschnitt-Hintergründe
				'section-light': 'var(--section-bg-light)', // Warmes Leinen-Weiß
				'section-dark': 'var(--section-bg-dark)',   // Sandbeige
				
				// Komponenten-Hintergründe
				'bg-creme': 'var(--bg-creme)',              // Legacy Creme
				'bg-card-warm': 'var(--bg-card)',           // Warmes Card-Weiß
				
				// Textfarben (semantisch)
				'text-primary': 'var(--text-primary)',      // Haupt-Text
				'text-secondary': 'var(--text-secondary)',  // Sekundär-Text
				'text-muted': 'var(--text-muted)',          // Gedämpft
				'text-heading': 'var(--text-heading)',      // Überschriften
				
				// Akzentfarben
				'accent2-custom': 'var(--color-accent2)',   // Blaugrün
				'blue-custom': 'var(--color-blue)',         // Blau
				
				// Rahmen
				'border-default': 'var(--border-default)',  // Standard
				'border-light': 'var(--border-light)',      // Hell
				secondary: {
					DEFAULT: '#E4572E', // Orange-Rot
					dark: '#C13D1A',
					light: '#F28C28',
					foreground: '#fff8ed',
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: '#7B4F6A', // Violett
					dark: '#4B3B5A',
					light: '#BFA2C5',
					foreground: '#fff8ed',
				},
				accent2: {
					DEFAULT: '#4A6A7B', // Blaugrün
					dark: '#3B5A5A',
					light: '#7BA6B6',
					foreground: '#fff8ed',
				},
				accent3: {
					DEFAULT: '#2F7D52', // Waldgrün (waldiger, mellow)
					dark: '#1F6D42',
					light: '#6FA085',
					foreground: '#fff8ed',
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: '#fefcf9', // Wärmeres Creme-Weiß statt reines Weiß
				paper: '#fefcf9', // Warmes Weiß für Seiten-Hintergründe (DEPRECATED - nutze section-light)
				text: {
					DEFAULT: '#222222',
					light: '#fff8ed',
				},
				success: {
					DEFAULT: '#7ec850',
					foreground: '#fff8ed',
				},
				link: {
					DEFAULT: '#E4572E',
					hover: '#C13D1A',
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
