FROM node:24-alpine AS builder

WORKDIR /app

COPY package*.json ./

RUN HUSKY=0 npm ci

COPY . .

RUN npm run build

FROM node:24-alpine AS production

WORKDIR /app

ENV NODE_ENV=production

COPY package*.json ./

RUN npm ci --omit=dev --ignore-scripts

COPY --from=builder /app/dist ./dist

USER node

EXPOSE 3000

CMD ["npm","start"]