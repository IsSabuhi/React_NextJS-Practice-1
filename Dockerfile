FROM node:lts as dependencies
WORKDIR /my-app
COPY package.json ./
RUN npm install --frozen-lockfile

FROM node:lts as builder
WORKDIR /my-app
COPY . .
COPY --from=dependencies /my-app/node_modules ./node_modules
RUN npm build

FROM node:lts as runner
WORKDIR /my-app
ENV NODE_ENV production

COPY --from=builder /my-app/public ./public
COPY --from=builder /my-app/package.json ./package.json
COPY --from=builder /my-app/.next ./.next
COPY --from=builder /my-app/node_modules ./node_modules

EXPOSE 3030
CMD ["npm", "start"]