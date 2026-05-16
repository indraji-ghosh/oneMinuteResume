#build stage

FROM node:18-alpine AS builder
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci
COPY . .
RUN npm run build


#production stage
FROM node:18-alpine
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm install -g serve
COPY --from=BUILDER /app/dist ./dist
CMD ["serve", "-s", "dist", "-l", "80"]