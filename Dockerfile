# Stage 1: Build the app
FROM cgr.dev/chainguard/node:latest AS build

WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

# Stage 2: Serve the app
FROM cgr.dev/chainguard/node:latest

WORKDIR /app
# Copy the build output from the first stage
COPY --from=build /app/node_modules /app/node_modules
COPY --from=build /app/package*.json ./

COPY --from=build /app/build /app/build

RUN npm install -g serve

USER 1001

EXPOSE 3000
ENTRYPOINT ["serve", "-s", "build"]
