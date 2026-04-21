# ByteLearn Backend

Laravel REST API backend for ByteLearn learning platform.

## Setup

### Prerequisites
- PHP 8.2+
- MySQL 8.0+
- Composer

### Installation

```bash
# Install dependencies
composer install

# Configure environment
cp .env.example .env
php artisan key:generate

# Setup database
php artisan migrate
php artisan seed:run  # Optional: seed sample data

# Start development server
php artisan serve --host=127.0.0.1 --port=8000
```

## Project Structure

```
backend/
├── app/
│   ├── Http/
│   │   ├── Controllers/      # API controllers
│   │   ├── Middleware/       # Custom middleware
│   │   └── Kernel.php        # HTTP kernel configuration
│   ├── Models/               # Eloquent models
│   ├── Services/             # Business logic services
│   ├── Mail/                 # Mail templates
│   └── Console/              # Artisan commands
├── config/
│   ├── cors.php             # CORS configuration
│   ├── database.php         # Database configuration
│   ├── mail.php             # Mail configuration
│   └── ...
├── database/
│   ├── migrations/          # Database migrations
│   ├── seeders/            # Database seeders
│   └── factories/           # Model factories
├── routes/
│   ├── api.php             # API routes (v1/v2 prefixed)
│   ├── web.php             # Web routes
│   └── console.php         # Console routes
├── storage/                # Application storage
├── bootstrap/              # Framework bootstrap
├── public/
│   └── index.php           # Application entry point
└── composer.json
```

## API Routes

### Authentication
- `POST /api/auth/login` - User login
- `POST /api/auth/register` - User registration
- `POST /api/auth/logout` - User logout (requires token)
- `GET /api/auth/me` - Get current user (requires token)

### Courses
- `GET /api/courses` - List all courses
- `POST /api/courses` - Create course (instructor only)
- `GET /api/courses/{id}` - Get course details
- `PUT /api/courses/{id}` - Update course (instructor only)
- `DELETE /api/courses/{id}` - Delete course (instructor only)
- `GET /api/courses/categories` - List course categories

### Lessons
- `GET /api/courses/{courseId}/lessons` - List course lessons
- `POST /api/courses/{courseId}/lessons` - Create lesson
- `GET /api/courses/{courseId}/lessons/{lessonId}` - Get lesson details
- `PUT /api/courses/{courseId}/lessons/{lessonId}` - Update lesson
- `DELETE /api/courses/{courseId}/lessons/{lessonId}` - Delete lesson
- `POST /api/lessons/{lessonId}/chat` - AI lesson chat

### Quizzes
- `GET /api/lesson/{lessonId}/quiz` - Get lesson quiz
- `POST /api/lesson/{lessonId}/quiz/submit` - Submit quiz

### Enrollments
- `GET /api/enrollments` - List user enrollments
- `POST /api/enrollments` - Enroll in course
- `DELETE /api/enrollments/{id}` - Unenroll from course
- `GET /api/enrollments/{id}/progress` - Get enrollment progress

### Dashboard
- `GET /api/dashboard/student` - Student dashboard data
- `GET /api/dashboard/instructor` - Instructor dashboard data
- `GET /api/dashboard/analytics` - Analytics data

### Certificates
- `GET /api/certificates` - List user certificates
- `GET /api/certificates/{id}` - Get certificate details
- `GET /api/certificates/{id}/download` - Download certificate

### Notifications
- `GET /api/notifications` - List user notifications
- `POST /api/notifications/{id}/read` - Mark notification as read
- `POST /api/notifications/read-all` - Mark all notifications as read

## Environment Variables

See `.env.example` for all configuration options. Key variables:

```env
# Database
DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=bytelearn
DB_USERNAME=root
DB_PASSWORD=

# Mail (SMTP)
MAIL_MAILER=smtp
MAIL_HOST=smtp.gmail.com
MAIL_PORT=587
MAIL_USERNAME=your-email@gmail.com
MAIL_PASSWORD=your-app-password
MAIL_ENCRYPTION=tls

# AI Services
GEMINI_API_KEY=your-key
OPENROUTER_API_KEY=your-key
```

## Development Commands

```bash
# Run migrations
php artisan migrate

# Rollback migrations
php artisan migrate:rollback

# Seed database
php artisan db:seed

# Clear cache
php artisan cache:clear

# Generate API documentation
php artisan api:generate

# Run tests
php artisan test

# Run tests with coverage
php artisan test --coverage
```

## CORS Configuration

CORS is configured in `config/cors.php`. Allowed origins:
- `http://127.0.0.1:5173` (Vite dev server)
- `http://localhost:5173`
- Local network (192.168.*)
- Production domains

Update `allowed_origins` for your deployment URLs.

## Authentication

API uses Laravel Sanctum for token-based authentication. Authenticated requests must include:

```
Authorization: Bearer {token}
```

CSRF token from Laravel session is also required:

```
X-CSRF-TOKEN: {token}
```

## Error Handling

API returns JSON error responses:

```json
{
    "message": "Error message",
    "errors": {
        "field": ["Error details"]
    }
}
```

HTTP Status Codes:
- `200` - Success
- `201` - Created
- `400` - Bad Request
- `401` - Unauthorized
- `403` - Forbidden
- `404` - Not Found
- `422` - Validation Error
- `500` - Server Error

## Database Models

- **User** - Application users (students, instructors)
- **Course** - Learning courses
- **Lesson** - Course lessons with content
- **Quiz** - Assessments with questions
- **QuizAttempt** - User quiz attempts
- **Enrollment** - Course enrollment records
- **Certificate** - User certificates
- **Discussion** - Course discussions
- **Notification** - User notifications
- **AIChatInteraction** - AI chat history

## Services

- **NotificationService** - Handles user notifications
- **QuizAIService** - AI-powered quiz generation and evaluation

## Testing

Run tests with:

```bash
php artisan test
php artisan test --filter=CourseTest
php artisan test Feature/CourseTest.php
```

## Deployment

See project README for deployment instructions.
