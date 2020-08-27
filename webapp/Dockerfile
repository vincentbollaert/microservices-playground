FROM node:14.7-slim as base
LABEL org.opencontainers.image.authors=vincentbollaert@gmail.com
LABEL org.opencontainers.image.title="microservices playground - webapp"
LABEL org.opencontainers.image.licenses=MIT
LABEL com.bretfisher.nodeversion=$NODE_VERSION

ENV TINI_VERSION v0.19.0
ADD https://github.com/krallin/tini/releases/download/${TINI_VERSION}/tini /tini
RUN chmod +x /tini
ENTRYPOINT ["/tini", "--"]

ENV NODE_ENV=production
WORKDIR /app
ENV PATH=/app/node_modules/.bin:$PATH
COPY package*.json ./
RUN npm ci && npm cache clean --force
EXPOSE 3000



FROM base as dev
ENV NODE_ENV=development
RUN npm i --only=development
CMD nodemon ./bin/www



FROM base as pre-prod
COPY . .
CMD node react-scripts build
# RUN rm -rf node_modules



FROM nginx as prod
COPY --from=pre-prod /app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
