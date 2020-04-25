FROM node:10 AS client-build
# Create app directory for build
WORKDIR /app
# Copy all contents into new directory
COPY . .
# Install all dependencies and build for production
RUN npm install
RUN npm run build

# Prepare new base image for server
FROM nginx:alpine
# Ensure nginx conf is included from root
COPY nginx.conf /etc/nginx/conf.d/default.conf
# Copy over the app build to nginx specific dir
COPY --from=client-build /app/build /usr/share/nginx/html
# Expose port 80
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
