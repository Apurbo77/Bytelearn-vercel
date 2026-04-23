#!/bin/bash

# Build and start the Bytelearn application

echo "Setting up Bytelearn..."

# Check if PHP is available
if ! command -v php &> /dev/null; then
    echo "PHP is not installed or not in PATH. Please install PHP."
    exit 1
fi

# Install backend dependencies
cd backend
composer install --no-dev --optimize-autoloader

# Run database migrations (assuming DB is set up)
php artisan migrate --force

# Build frontend assets for backend
npm install
npm run build

# Go back to root
cd ..

# Build frontend
cd frontend
npm install
npm run build

# For deployment, you might need to serve the frontend separately or integrate with backend
# For now, let's assume backend serves the built frontend

cd ../backend

# Start the Laravel server
php artisan serve --host=0.0.0.0 --port=8000