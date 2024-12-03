# Step 1: Use Node.js image to set up the backend
FROM node:18

WORKDIR /app
COPY ./backend/package.json ./backend/package-lock.json ./

RUN npm install

COPY ./backend/ ./

EXPOSE 5000

CMD ["node", "server.js"]
