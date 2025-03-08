ARG NODE_VERSION

# Build stage
FROM node:${NODE_VERSION}-alpine AS build

WORKDIR /app

# Copy configuration files first
COPY mise.toml ./
COPY package*.json ./

# Install dependencies
RUN npm ci

# Copy source code
COPY . .

# Build application
RUN npm run build

# Production stage
FROM node:${NODE_VERSION}-alpine

WORKDIR /app

# Copy package files and built code
COPY --from=build /app/package*.json ./
COPY --from=build /app/dist ./dist
COPY --from=build /app/node_modules ./node_modules

# Expose port
EXPOSE 3000

# Set NODE_ENV
ENV NODE_ENV=production

# Start application
CMD ["node", "dist/main"]