FROM nginx:latest

COPY nginx.conf /etc/nginx/nginx.conf

COPY /dist/fm-signup-form/browser /www/data
