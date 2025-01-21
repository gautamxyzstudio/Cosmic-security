/* eslint-disable @typescript-eslint/no-require-imports */
import type { Config } from 'tailwindcss';

export default {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/appComponents/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        guardingGradientOne:
          'linear-gradient(180deg, #FFF -50%, #7D090D 136.89%)',
        guardingGradientTwo:
          'linear-gradient(180deg, #FFF -50%, #135A95 136.89%)',
        guardingGradientThree:
          'linear-gradient(180deg, #FFF -50%, #383838 136.89%)',
        buttonGradient:
          ' linear-gradient(180deg, #C1272D -13.16%, rgba(56, 56, 56, 0.00) 184.21%);',
        serviceCarGradient:
          ' linear-gradient(0deg, #121212 0.03%, rgba(18, 18, 18, 0.00) 95.88%)',
        webBg: 'url(/webBg.webp)',
        contactLines: 'url(/homeContactlines.webp)',
        ourTeamTopBg: 'url(/OurTeamTopBgImage.webp)',
        servicesTopBg: 'url(/servicesTopBg.webp)',
      },
      colors: {
        background: 'var(--background)',
        primary: 'var(--primary)',
        disabled: 'var(--disabled)',
        linearStrokePrimary: 'var(--linearStrokePrimary)',
        linearStrokeSecondary: 'var(--linearStrokeSecondary)',
        linearStrokeTernary: 'var(--linearStrokeTernary)',
        black: 'var(--black)',
        borderStroke: 'var(--borderStroke)',
        stroke: 'var(--stroke)',
        lightGrey: 'var(--lightGrey)',
        lightDisabled: 'var(--lightDisabled)',
        ceoMessageBg: 'var(--ceoMessageBg)',
        overlayTeamBg: 'var(--overlayTeamBg)',
      },
      fontSize: {
        'heading-80': [
          '5rem',
          {
            lineHeight: '5.5rem',
          },
        ],
        'heading-56': [
          '3.5rem',
          {
            lineHeight: '4rem',
          },
        ],
        'heading-40': [
          '2.5rem',
          {
            lineHeight: '3rem',
          },
        ],
        'text-12': [
          '0.75rem',
          {
            lineHeight: '1.25rem',
          },
        ],
      },
      clipPath: {
        mypolygon: 'polygon(0 18%, 18% 0, 100% 0%, 100% 100%, 0 100%)',
        mypolygonImage: 'polygon(0 45%, 17.5% 0, 100% 0%, 100% 100%, 0 100%)',
      },
    },
  },
  plugins: [require('tailwind-clip-path')],
} satisfies Config;
