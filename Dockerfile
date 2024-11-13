# Stap 1: Gebruik een Node image om de app te bouwen
FROM node:18 AS build

WORKDIR /app
COPY . .

RUN npm install
RUN npm run build

# Stap 2: Gebruik een Nginx image om de app te hosten
FROM nginx:alpine

COPY --from=build /app/build /usr/share/nginx/html

# Zorg ervoor dat Nginx draait op poort 80
EXPOSE 8080
CMD ["nginx", "-g", "daemon off;"]
