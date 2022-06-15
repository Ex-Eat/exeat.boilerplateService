export const config = {
    SECRET_KEY: process.env.EXEAT_SECRET_KEY || '1gq684gfqsd5f4gqsdfsqdf4qse4éq6se54fqsgr',
    TOKEN_EXPIRATION: process.env.EXEAT_TOKEN_EXPIRATION || 10800,
    BASE_URL: process.env.EXEAT_BASE_URL || 'http://localhost:8080',
    APP_ENV: process.env.APP_ENV || 'PREPROD',
    DB_HOST: process.env.DB_HOST || 'localhost',
    DB_PORT: process.env.DB_PORT || '27017',
    DB_NAME: process.env.DB_NAME || 'exeat',
};