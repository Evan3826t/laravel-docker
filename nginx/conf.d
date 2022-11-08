# dev.project.com.conf
server {
    listen 80;
    listen [::]:80;

    # Redirect all HTTP requests to HTTPS with a 301 Moved Permanently response.
    return 301 https://$host$request_uri;
}

server {
    listen 443 ssl;
    listen [::]:443 ssl;

    root /var/www/html/<laravel project name>/public;
    index index.php index.html index.htm;

    ssl_certificate /ssl/ssl.crt;
    ssl_certificate_key /ssl/ssl.key;

    server_name dev.project.com;
    
    location / {
        try_files $uri $uri/ /index.php$is_args$args;
    }

    location ~ \.php$ {
        try_files $uri /index.php =404;
        fastcgi_pass docker_env_php:9000;
        fastcgi_index index.php;
        fastcgi_param SCRIPT_FILENAME $document_root$fastcgi_script_name;
        include fastcgi_params;
    }

    location ~ /\.ht {
        deny all;
    }
}