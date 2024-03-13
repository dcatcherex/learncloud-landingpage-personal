# ref: https://pnpm.io/docker

FROM node:20.10.0-alpine as base

ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"

# enable corepack to install package dependencies
RUN corepack enable

COPY . /app
WORKDIR /app

# It installs only the production dependencies using pnpm install --prod --frozen-lockfile.
FROM base AS prod-deps
RUN --mount=type=cache,id=pnpm,target=/pnpm/store pnpm install --prod --frozen-lockfile

# It installs all dependencies (both production and development)
FROM base AS build
RUN --mount=type=cache,id=pnpm,target=/pnpm/store pnpm install --frozen-lockfile
RUN pnpm run build

# It copies the node_modules directory from the prod-deps stage, ensuring that only the production dependencies are included in the final image.
# It copies the built application files from the build stage to the /app/dist directory
FROM base
COPY --from=prod-deps /app/node_modules /app/node_modules
COPY --from=build /app/.next /app/.next

EXPOSE 3000

CMD [ "pnpm", "start" ]