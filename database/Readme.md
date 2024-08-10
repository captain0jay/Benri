There will be 2 database option
1. Supabase normally
2. Heavy stuff Requires PostgreSQL + Drizzle orm

## supbase has its own hosting way here is it

```
# Get the code
git clone --depth 1 https://github.com/supabase/supabase

# Go to the docker folder
cd supabase/docker

# Copy the fake env vars
cp .env.example .env

# Pull the latest images
docker compose pull

# Start the services (in detached mode)
docker compose up -d

```