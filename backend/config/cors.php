<?php

return [
    /*
    |--------------------------------------------------------------------------
    | Cross-Origin Resource Sharing (CORS) Configuration
    |--------------------------------------------------------------------------
    |
    | Here you may configure CORS settings for your API. The paths specified
    | here will be allowed to make CORS requests to this API.
    |
    */

    'paths' => ['api/*', 'sanctum/csrf-cookie'],

    'allowed_methods' => ['*'],

    'allowed_origins' => [
        env('FRONTEND_URL', 'http://localhost:5173'), // Accept Vercel frontend
        'http://127.0.0.1:5173',      // Local Vite dev server
        'http://localhost:5173',       // Local development
        'http://127.0.0.1:8000',       // Laravel dev server
        'http://localhost:8000',       // Laravel dev server
    ],

    'allowed_origins_patterns' => [
        '#^http://192\.168\..*#',     // Local network development
    ],

    'allowed_headers' => ['*'],

    'exposed_headers' => ['X-Total-Count', 'X-Page-Count'],

    'max_age' => 0,

    'supports_credentials' => true,

];
