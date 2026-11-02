FROM nginxinc/nginx-unprivileged:alpine

RUN rm -f /etc/nginx/conf.d/default.conf

COPY --chown=nginx:nginx nginx.conf /etc/nginx/conf.d/default.conf
COPY --chown=nginx:nginx *.html style.css main.js favicon.svg favicon.ico favicon-48.png robots.txt sitemap.xml /usr/share/nginx/html/

EXPOSE 8080

CMD ["nginx", "-g", "daemon off;"]
