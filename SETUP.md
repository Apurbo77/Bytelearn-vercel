# ByteLearn - Frontend & Backend Separation Setup

This document explains how to run ByteLearn with separate frontend and backend applications.

## Project Structure

```
bytelearn-me/
├── backend/               # Laravel API (keep existing structure)
│   ├── app/
│   ├── config/
│   ├── database/
│   ├── routes/
│   ├── .env               # Backend environment
│   └── ...
│
├── frontend/              # React SPA
│   ├── src/
│   │   ├── api/          # API client & endpoints
│   │   ├── components/   # React components
│   │   ├── types/        # TypeScript types
│   │   └── ...
│   ├── index.html
│   ├── vite.config.ts
│   ├── package.json
│   ├── .env              # Frontend environment
│   └── ...
│
├── BACKEND.md            # Backend setup guide
├── FRONTEND.md           # Frontend setup guide
└── SETUP.md              # This file
```

## Quick Start

### 1. Backend Setup

```bash
cd backend/

# Install dependencies
composer install

# Configure environment
cp .env.example .env
php artisan key:generate

# Setup database
php artisan migrate
php artisan db:seed  # Optional

# Start server (port 8000)
php artisan serve --host=127.0.0.1 --port=8000
```

Backend will be available at: **http://127.0.0.1:8000**

### 2. Frontend Setup

```bash
cd frontend/

# Install dependencies
npm install

# Configure environment
cp .env.example .env
# Update .env with API_BASE_URL if needed

# Start development server (port 5173)
npm run dev
```

Frontend will be available at: **http://127.0.0.1:5173**

## Development Workflow

### Option 1: Run Both Separately (Recommended)

**Terminal 1 - Backend:**
```bash
cd backend/
php artisan serve --host=127.0.0.1 --port=8000
```

**Terminal 2 - Frontend:**
```bash
cd frontend/
npm run dev
```

### Option 2: Run Both with One Command

From root directory:
```bash
npm install concurrently

# Add to root package.json:
"scripts": {
  "dev": "concurrently \"cd backend && php artisan serve\" \"cd frontend && npm run dev\""
}

npm run dev
```

## Configuration

### Backend (.env)

```env
# Database
DB_CONNECTION=mysql
DB_DATABASE=bytelearn
DB_USERNAME=root
DB_PASSWORD=

# API & CORS
APP_URL=http://127.0.0.1:8000

# Enable debug for development
APP_DEBUG=true

# Mail (optional)
MAIL_MAILER=log  # For development, use 'log' to see emails in console
```

### Frontend (.env)

```env
# Point to your backend API
VITE_API_BASE_URL=http://127.0.0.1:8000
VITE_APP_NAME=ByteLearn
VITE_DEBUG=true
```

## API Communication

The frontend communicates with the backend via REST API at `/api/*` endpoints.

**Key Features:**
- Automatic CSRF token handling
- Bearer token authentication (Sanctum)
- CORS enabled for `http://localhost:5173`
- Error interceptors (auto-redirect to login on 401)

See `frontend/src/api/` for API utilities and endpoints.

## Building for Production

### Backend

```bash
cd backend/
# Standard Laravel deployment
# Set .env to production, optimize for production:
php artisan optimize:all
```

### Frontend

```bash
cd frontend/
npm run build
# Creates optimized build in dist/ directory
# Deploy dist/ contents to static host (CDN, nginx, etc.)
```

## Environment URLs

| Environment | Backend | Frontend |
|---|---|---|
| Local Development | `http://127.0.0.1:8000` | `http://127.0.0.1:5173` |
| Production | `https://api.yourdomain.com` | `https://yourdomain.com` |

Update CORS in `backend/config/cors.php` for production URLs.

## API Endpoints

All API endpoints are prefixed with `/api/`:

- `/api/auth/*` - Authentication
- `/api/courses/*` - Course management
- `/api/lessons/*` - Lesson management
- `/api/quizzes/*` - Quiz management
- `/api/enrollments/*` - Enrollment management
- `/api/dashboard/*` - Dashboard data
- `/api/certificates/*` - Certificates
- `/api/notifications/*` - Notifications

See `BACKEND.md` for complete API documentation.

## Troubleshooting

### CORS Errors

If you see CORS errors, check:
1. Backend is running on `http://127.0.0.1:8000`
2. `VITE_API_BASE_URL` in frontend `.env` points to correct backend URL
3. `allowed_origins` in `backend/config/cors.php` includes frontend URL

### API Connection Failed

1. Verify backend is running: `curl http://127.0.0.1:8000/api/courses`
2. Check VITE_API_BASE_URL in frontend .env
3. Check browser console for actual errors
4. Ensure both are on same network (if using IP)

### Database Connection Error

```bash
# Check MySQL is running
# Update DB_* variables in backend/.env
# Run migrations:
php artisan migrate
```

### Port Already in Use

Change ports in:
- **Backend:** `php artisan serve --port=8001`
- **Frontend:** `npm run dev -- --port=5174` or update `vite.config.ts`

## Additional Resources

- [Backend Setup](./BACKEND.md)
- [Frontend Setup](./frontend/README.md)
- [Laravel Documentation](https://laravel.com/docs)
- [React Documentation](https://react.dev)
- [Vite Documentation](https://vitejs.dev)

## Support

For issues or questions, please check the documentation or create an issue in the repository.
