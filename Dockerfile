# Gebruik een Node.js image voor het bouwen
FROM node:16 AS build

# Maak een werkdirectory aan in de container
WORKDIR /app

# Kopieer package.json en package-lock.json
COPY package*.json ./

# Installeer dependencies
RUN npm install

# Kopieer de rest van de applicatiecode naar de container
COPY . .

# Bouw de React-app
RUN npm run build

# Gebruik een lichtgewicht webserver om de app te serveren
FROM nginx:alpine

# Kopieer de gebuilde bestanden naar Nginx
COPY --from=build /app/build /usr/share/nginx/html

# Exposeer de poort waarop Nginx draait
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]
