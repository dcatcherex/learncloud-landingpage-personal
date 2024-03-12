# Use an official Node.js, and it should be version 16 and above
FROM node:20.10.0-alpine as builder

# Set the working directory in the container
WORKDIR /app

# Copy package.json and pnpm-lock.yaml
COPY package.json pnpm-lock.yaml ./

RUN corepack enable

# Install dependencies
RUN pnpm install --frozen-lockfile

# Copy the application code 
COPY . .

# Build the TypeScript code
RUN pnpm run build

FROM node:20.10.0-alpine as runner

WORKDIR /app

COPY --from=builder /app/package.json .
COPY --from=builder /app/pnpm-lock.yaml .
COPY --from=builder /app/next.config.mjs .
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static

EXPOSE 3000

CMD ["pnpm", "start"]