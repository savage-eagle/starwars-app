# Stage 1: Build the frontend
FROM node:latest as frontend-build
WORKDIR /app/frontend

COPY frontend/package*.json ./

RUN npm install
COPY frontend/ .

# Stage 2: Build the backend

# Set working directory
WORKDIR /var/www/html

FROM php:latest as backend-build

# Add composer
COPY --from=composer:latest /usr/bin/composer /usr/local/bin/composer

# Required apt stuff
RUN apt-get update && \
    apt-get -y install mariadb-client zlib1g-dev libpng-dev libjpeg-dev sudo libzip-dev libfreetype-dev libicu-dev

# PHP Extensions
RUN docker-php-ext-configure gd --with-jpeg --enable-gd --with-freetype && \
    docker-php-ext-install sockets mysqli pdo_mysql zip gd intl bcmath

# Copy application files
COPY backend/composer.* ./
RUN composer install --no-interaction --no-dev --prefer-dist
COPY backend/ ./tmp-backend

# Set permissions for storage and bootstrap/cache
RUN mkdir -p storage/framework/{cache,views,sessions} && \
    chown -R www-data:www-data storage bootstrap/cache

# Generate application key
RUN cd tmp-backend && php artisan key:generate

# Stage 2: Create the final container
FROM php:latest

# Copy application files from the build stage
COPY --from=backend-build /var/www/html/tmp-backend/ ./

EXPOSE 8000 3000

CMD npm start
CMD php artisan serve --host=0.0.0.0 --port=8000