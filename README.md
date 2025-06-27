# Fastify Minimal Example


## Includes

- Fastify server
- tRPC
  
## Performance issue

Fastify is 4x faster than tRPC-fastify.

## Usage

Run the server:

```bash
pnpm dev
```

To reproduce the issue, follow these steps:

```bash
autocannon -c 200 -d 10 -p 10 http://localhost:3001/api/trpc/greeting 

autocannon -c 200 -d 10 -p 10 http://localhost:3001/api/fastify
```

autocannon is a npm package to test the api performance.


## Performance

### fastify

```
autocannon -c 200 -d 10 -p 50 http://localhost:3001/api/fastify
```

| Stat    | 2.5%   | 50%    | 97.5%  | 99%    | Avg     | Stdev    | Max     |
|---------|--------|--------|--------|---------|----------|---------|---------|
| Latency | 67 ms  | 84 ms  | 170 ms | 176 ms | 94.11 ms| 102.84 ms| 3862 ms |


| Stat    | 1%      | 2.5%    |50%    |97.5%  |Avg      |Stdev    |Min     |
|---------|---------|---------|---------|---------|---------|---------|---------|
| Req/Sec | 95,099 | 95,099 | 106,751 | 107,455 | 105,282.91 | 3,424.55 | 95,099 |
| Bytes/Sec | 19.6 MB | 19.6 MB | 22 MB   | 22.1 MB | 21.7 MB    | 704 kB   | 19.6 MB |


1168k requests in 11.03s, 239 MB read


### tRPC-fastify

```
autocannon -c 200 -d 10 -p 50 http://localhost:3001/api/trpc/greeting 
```

| Stat    | 2.5%   | 50%    | 97.5%  | 99%    | Avg     | Stdev    | Max     |
|---------|--------|--------|--------|--------|---------|----------|---------|
| Latency | 195 ms | 340 ms | 371 ms | 492 ms | 362.77 ms | 404.64 ms | 9758 ms |


| Stat    | 1%     | 2.5%   |50%     |97.5%   |Avg      |Stdev     |Min     |
|---------|--------|--------|--------|--------|---------|----------|---------|
| Req/Sec | 23,711 | 23,711 | 25,615 | 25,807 | 25,424   | 597.23   | 23,701  |
| Bytes/Sec | 5.43 MB | 5.43 MB | 5.87 MB | 5.91 MB | 5.82 MB    | 136 kB   | 5.43 MB |

264k requests in 10.03s, 58.2 MB read

200 errors (200 timeouts)

