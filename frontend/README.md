# ByteLearn Frontend

Standalone React application for ByteLearn learning platform.

## Setup

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run preview
```

## Environment Variables

Configure `.env` with your API backend URL:

```env
VITE_API_BASE_URL=http://127.0.0.1:8000
```

## Project Structure

```
frontend/
├── src/
│   ├── api/              # API client and endpoints
│   ├── components/       # React components
│   │   ├── auth/        # Authentication components
│   │   └── ui/          # UI components
│   ├── types/           # TypeScript type definitions
│   ├── css/             # Stylesheets
│   ├── app.tsx          # Root component
│   └── main.tsx         # Entry point
├── index.html           # HTML entry point
├── vite.config.ts       # Vite configuration
├── tsconfig.json        # TypeScript configuration
└── package.json         # Dependencies
```

## Features

- React 18 with TypeScript
- Tailwind CSS for styling
- Vite for fast development
- Axios for API calls
- Rich text editor with Tiptap
- Video player with Plyr

## API Communication

The frontend communicates with the Laravel backend via REST API. All requests:
- Include CSRF token from meta tag or localStorage
- Include Bearer token for authenticated requests
- Support CORS for cross-origin requests

See `src/api/endpoints.ts` for all available endpoints.
