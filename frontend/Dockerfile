# Step 1: Build the React app
FROM node:18 AS build

WORKDIR /app
COPY ./my-electricity-theft-dashboard/package.json ./my-electricity-theft-dashboard/package-lock.json ./

RUN npm install

COPY ./my-electricity-theft-dashboard/ ./

RUN npm run build

# Step 2: Serve the React app using a lightweight server
FROM nginx:alpine

COPY --from=build /app/build /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
