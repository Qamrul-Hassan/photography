# Photography — Next.js Portfolio

Professional, accessible, and international-ready photography portfolio built with Next.js.

This repository contains a modern portfolio website showcasing photography work, client services, and a contact flow with EmailJS and reCAPTCHA integration.

Key goals:
- Fast, SEO-friendly pages using Next.js App Router
- Lightweight components and responsive design with Tailwind CSS
- Accessible and international-friendly content structure

## Demo

- Local: run the app and open http://localhost:3000
- Production: deploy on Vercel or any platform that supports Next.js

## Features

- Home, About, Services, Portfolio, Gallery and Blog sections
- Contact form integrated with EmailJS and reCAPTCHA v2/3 support
- Simple, responsive UI components in `app/components`
- Static and server-rendered pages where appropriate

## Technologies

- Next.js 14+ (App Router)
- React
- Tailwind CSS
- EmailJS for contact form
- Google reCAPTCHA for spam protection

## Quick Start

1. Install dependencies:

```bash
npm install
```

2. Run development server:

```bash
npm run dev
```

3. Open `http://localhost:3000` in your browser.

Notes:
- Primary source files live in the `app/` directory.
- Edit the main page at `app/page.js` and component files under `app/components/`.

## Environment Variables

Create a `.env.local` file in the project root and provide the following public keys (use your own values):

- `NEXT_PUBLIC_EMAILJS_SERVICE_ID`
- `NEXT_PUBLIC_EMAILJS_TEMPLATE_OWNER_ID`
- `NEXT_PUBLIC_EMAILJS_TEMPLATE_AUTOREPLY_ID`
- `NEXT_PUBLIC_EMAILJS_PUBLIC_KEY`
- `NEXT_PUBLIC_RECAPTCHA_SITE_KEY`
- `OWNER_EMAIL` (used as contact recipient)

Do NOT commit secrets. Only public keys intended for client usage should start with `NEXT_PUBLIC_`.

## Internationalization & Accessibility

- Content is written in clear, simple English for international audiences.
- Structure pages with semantic HTML to support translation and screen readers.
- If you want to add translations, consider using `next-intl` or `react-intl` and place locale files under a `locales/` directory.

## Contributing

Contributions are welcome. For code changes:

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/my-change`
3. Commit your changes: `git commit -m "feat: short description"`
4. Push and open a pull request

Please include screenshots or a short description of behavior changes when submitting UI updates.

## Deploy

Deploy to Vercel for seamless Next.js hosting, or use any provider supporting Node.js and static exports.

## License

This project is provided under the MIT License — see the `LICENSE` file if present or add one to clarify terms.

## Contact

If you need help or want to discuss commercial use, email the owner address configured in the environment (`OWNER_EMAIL`).

---

Thank you for checking out this project. If you’d like, I can also add an automated deployment configuration or translate this README into other languages — tell me which language you prefer.
