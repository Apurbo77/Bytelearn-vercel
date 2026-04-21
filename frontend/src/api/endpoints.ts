/**
 * API endpoints for ByteLearn
 * All paths are relative to the API base URL
 */

export const API_ENDPOINTS = {
    // Auth
    AUTH: {
        LOGIN: '/api/auth/login',
        REGISTER: '/api/auth/register',
        LOGOUT: '/api/auth/logout',
        ME: '/api/auth/me',
    },

    // Courses
    COURSES: {
        LIST: '/api/courses',
        GET: (id: number) => `/api/courses/${id}`,
        CREATE: '/api/courses',
        UPDATE: (id: number) => `/api/courses/${id}`,
        DELETE: (id: number) => `/api/courses/${id}`,
        CATEGORIES: '/api/courses/categories',
    },

    // Lessons
    LESSONS: {
        LIST: (courseId: number) => `/api/courses/${courseId}/lessons`,
        GET: (courseId: number, lessonId: number) =>
            `/api/courses/${courseId}/lessons/${lessonId}`,
        CREATE: (courseId: number) => `/api/courses/${courseId}/lessons`,
        UPDATE: (courseId: number, lessonId: number) =>
            `/api/courses/${courseId}/lessons/${lessonId}`,
        DELETE: (courseId: number, lessonId: number) =>
            `/api/courses/${courseId}/lessons/${lessonId}`,
        CHAT: (lessonId: number) => `/api/lessons/${lessonId}/chat`,
    },

    // Quizzes
    QUIZZES: {
        GET: (lessonId: number) => `/api/lesson/${lessonId}/quiz`,
        SUBMIT: (lessonId: number) => `/api/lesson/${lessonId}/quiz/submit`,
    },

    // Enrollments
    ENROLLMENTS: {
        LIST: '/api/enrollments',
        ENROLL: '/api/enrollments',
        UNENROLL: (enrollmentId: number) => `/api/enrollments/${enrollmentId}`,
        PROGRESS: (enrollmentId: number) =>
            `/api/enrollments/${enrollmentId}/progress`,
    },

    // User Dashboard
    DASHBOARD: {
        STUDENT: '/api/dashboard/student',
        INSTRUCTOR: '/api/dashboard/instructor',
        ANALYTICS: '/api/dashboard/analytics',
    },

    // Certificates
    CERTIFICATES: {
        LIST: '/api/certificates',
        GET: (id: number) => `/api/certificates/${id}`,
        DOWNLOAD: (id: number) => `/api/certificates/${id}/download`,
    },

    // Notifications
    NOTIFICATIONS: {
        LIST: '/api/notifications',
        MARK_READ: (id: number) => `/api/notifications/${id}/read`,
        MARK_ALL_READ: '/api/notifications/read-all',
    },
};
