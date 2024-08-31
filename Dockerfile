# Stage 1: Build the app
FROM node:22-alpine3.20 AS build

WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

# Stage 2: Serve the app
FROM node:22-alpine3.20 as build

WORKDIR /app
# Copy the build output from the first stage
COPY --from=build /app/node_modules /app/node_modules
COPY --from=build /app/package*.json ./

COPY --from=build /app/build /app/build

RUN npm install -g serve

USER 1001

EXPOSE 3000
ENTRYPOINT ["serve", "-s", "build"]
