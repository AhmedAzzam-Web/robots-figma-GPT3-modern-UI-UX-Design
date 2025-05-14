# -----------------------
# Stage 1: Development
# -----------------------
FROM node:22-alpine3.20 AS dev

WORKDIR /app
ENV NODE_ENV=development

RUN apk add --no-cache curl vim
COPY package*.json ./
RUN npm install
COPY . .

CMD ["npm", "run", "dev"]

# -----------------------
# Stage 2: Build
# -----------------------
FROM node:22-alpine3.20 AS build

WORKDIR /app
ENV NODE_ENV=production
ENV NODE_OPTIONS=--openssl-legacy-provider

COPY package*.json ./
COPY . .

# Only production deps + serve
RUN npm install

# Build static React files
RUN npm run build

# -----------------------
# Stage 3: Production
# -----------------------
FROM node:22-alpine3.20 AS prod

WORKDIR /app
ENV NODE_ENV=production

RUN npm install -g serve
COPY --from=build /app/build ./build

EXPOSE 3000

# Use serve directly from local install
ENTRYPOINT ["serve", "-s", "build"]