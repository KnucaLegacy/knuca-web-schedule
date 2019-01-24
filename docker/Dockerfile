FROM nginx

COPY nginx.conf /etc/nginx/nginx.conf
COPY app.tgz knuca-web/app.tar

RUN tar -xvf knuca-web/app.tar --strip-components=1 -C knuca-web

EXPOSE 80