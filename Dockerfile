# -----------------------
# Stage 1: Development
# -----------------------
FROM node:22-alpine3.20 AS dev

WORKDIR /app
ENV NODE_ENV=development

COPY package*.json ./
RUN npm install
COPY . .

CMD ["npm", "run", "dev"]

# -----------------------
# Stage 2: Build
# -----------------------
FROM node:22-alpine3.20 AS build

WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

# -----------------------
# Stage 3: Production
# -----------------------
FROM gcr.io/distroless/nodejs22-debian12

WORKDIR /app

COPY --from=build /app/build ./build
COPY ./server.js ./

EXPOSE 3000

# Use serve directly from local install
CMD ["server.js"]
