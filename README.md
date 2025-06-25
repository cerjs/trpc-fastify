# Fastify Minimal Example

## Includes

- Fastify server
- trpc

## Usage

Run the server:

```bash
pnpm dev
```

Test the api:

```bash
autocannon -c 200 -d 10 -p 10 http://localhost:3001/api/trpc/greeting 
```

autocannon is a npm package to test the api performance.

