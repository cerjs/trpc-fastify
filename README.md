# Fastify Minimal Example


## Includes

- Fastify server
- tRPC
  
## Reproduce this issue

``` 
(node:97455) MaxListenersExceededWarning: Possible EventEmitter memory leak detected. 11 close listeners added to [Socket]. MaxListeners is 10. Use emitter.setMaxListeners() to increase limit
```

### History Issues

- https://github.com/trpc/trpc/pull/6482
- https://github.com/trpc/trpc/issues/6455


## Usage

Run the server:

```bash
pnpm dev
```

To reproduce the issue, follow these steps:

```bash
autocannon -c 200 -d 10 -p 10 http://localhost:3001/api/trpc/greeting 
```

autocannon is a npm package to test the api performance.

