# ref: https://github.com/vercel/next.js/blob/canary/examples/with-docker-compose/next-app/prod.Dockerfile

###################
# BUILD FOR LOCAL DEVELOPMENT
###################

ARG NODE_VERSION=20.11.1

FROM node:${NODE_VERSION}-alpine AS development

ENV NODE_ENV development

# Uncomment the following line to disable telemetry at run time
ENV NEXT_TELEMETRY_DISABLED 1

# Set the working directory in the container
WORKDIR /usr/src/app

# Install dependencies based on the preferred package manager
# COPY --chown=node:node package.json yarn.lock* package-lock.json* pnpm-lock.yaml* ./
COPY package.json yarn.lock* package-lock.json* pnpm-lock.yaml* ./

# Omit --production flag for TypeScript devDependencies
# need devDependencies for building the app

RUN \
    if [ -f yarn.lock ]; then yarn --frozen-lockfile; \
    elif [ -f package-lock.json ]; then npm ci; \
    elif [ -f pnpm-lock.yaml ]; then corepack enable pnpm && pnpm install --frozen-lockfile; \
    # Allow install without lockfile, so example works even without Node.js installed locally
    else echo "Warning: Lockfile not found. It is recommended to commit lockfiles to version control." && yarn install; \
    fi

# if we have app folder under the src folder
# COPY app ./app public ./public next.config.mjs tsconfig.json ./

# Solution : try to copy with node user permission, but didn't work
# but we don't have src folder
# COPY --chown=node:node . .

# USER node

# Note: issue with permission on app/.next file
COPY . .

# ###################
# # BUILD FOR PRODUCTION
# ###################

FROM node:${NODE_VERSION}-alpine AS build

ENV NODE_ENV production

WORKDIR /usr/src/app

COPY --chown=node:node package.json yarn.lock* package-lock.json* pnpm-lock.yaml* tsconfig.json ./

COPY --chown=node:node --from=development /usr/src/app/node_modules ./node_modules

COPY --chown=node:node . .

# Build Next.js based on the preferred package manager
RUN \
    if [ -f yarn.lock ]; then yarn build; \
    elif [ -f package-lock.json ]; then npm run build; \
    elif [ -f pnpm-lock.yaml ]; then corepack enable && pnpm build; \
    else npm run build; \
    fi

USER node

###################
# PRODUCTION
###################

# Note: It is not necessary to add an intermediate step that does a full copy of `node_modules` here

# Step 2. Production image, copy all the files and run next
FROM node:${NODE_VERSION}-alpine AS production

ENV NODE_ENV production

WORKDIR /usr/src/app

# This minimal server does not copy the public or .next/static folders by default as these should ideally be handled by a CDN instead, 
# although these folders can be copied to the standalone/public and standalone/.next/static folders manually,
COPY --from=build /usr/src/app/public ./public

# Automatically leverage output traces to reduce image size
# https://nextjs.org/docs/advanced-features/output-file-tracing
COPY --from=build --chown=node:node /usr/src/app/ .next/standalone ./
COPY --from=build --chown=node:node /usr/src/app/.next/static ./.next/static

# Environment variables must be present at build time
# https://github.com/vercel/next.js/discussions/14030
ARG ENV_VARIABLE
ENV ENV_VARIABLE=${ENV_VARIABLE}
ARG NEXT_PUBLIC_ENV_VARIABLE
ENV NEXT_PUBLIC_ENV_VARIABLE=${NEXT_PUBLIC_ENV_VARIABLE}

ARG PORT
ENV PORT=${PORT}

# Ref: https://snyk.io/blog/10-best-practices-to-containerize-nodejs-web-applications-with-docker/
RUN apk add dumb-init

COPY --chown=node:node --from=build /usr/src/app/node_modules ./node_modules
COPY --chown=node:node --from=build /usr/src/app/dist ./dist

USER node

CMD ["dumb-init", "node", "server.js"]
# CMD ["tail", "-f", "/dev/null"]