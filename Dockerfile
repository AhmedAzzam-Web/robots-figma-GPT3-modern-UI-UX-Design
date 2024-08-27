# Stage 1: Build the app
FROM node:22-alpine3.20 as build

WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Stage 2: Serve the app
FROM node:22-alpine3.20

WORKDIR /app
COPY --from=build /app/build /app/build

# Install only production dependencies
COPY package*.json ./
RUN npm install --production
RUN npm install -g serve

EXPOSE 3000
CMD ["serve", "-s", "build"]
