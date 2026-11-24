FROM node:24-bookworm-slim
WORKDIR /app
COPY server.js index.html app.js styles.css LICENSE ./
USER node
EXPOSE 8080
CMD ["node", "server.js"]
