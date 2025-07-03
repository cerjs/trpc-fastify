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
autocannon -c 200 -d 10 -p 100 http://localhost:3001/api/trpc/greeting 

autocannon -c 200 -d 10 -p 100 http://localhost:3001/api/json
```

autocannon is a npm package to test the api performance.


## Performance

### fastify
memory using ≈ 180m

```
autocannon -c 200 -d 10 -p 100 http://localhost:3001/api/json
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
memory using ≈ 400m

```
autocannon -c 200 -d 10 -p 100 http://localhost:3001/api/trpc/hello 
```

| Stat    | 2.5%   | 50%    | 97.5%  | 99%    | Avg     | Stdev    | Max     |
|---------|--------|--------|--------|--------|---------|----------|---------|
| Latency | 243 ms | 577 ms | 679 ms | 827 ms | 596 ms | 443.36 ms | 9581 ms |


| Stat    | 1%     | 2.5%   |50%     |97.5%   |Avg      |Stdev     |Min     |
|---------|--------|--------|--------|--------|---------|----------|---------|
| Req/Sec   | 21,919  | 21,919  | 23,919 | 24,351 | 23,760  | 653.67 | 21,906  |
| Bytes/Sec | 5.13 MB | 5.13 MB | 5.6 MB | 5.7 MB | 5.56 MB | 153 kB | 5.13 MB |

258k requests in 10.03s, 55.6 MB read
700 errors (700 timeouts)

### tRPC-fastify-zod
memory using ≈ 470m

```
autocannon -c 200 -d 10 -p 100 http://localhost:3001/api/trpc/greeting 
```

| Stat    | 2.5%   | 50%    | 97.5%  | 99%    | Avg     | Stdev    | Max     |
|---------|--------|--------|--------|--------|---------|----------|---------|
| Latency | 256 ms | 917 ms | 1028 ms | 1172 ms | 903.31 ms | 395.14 ms | 9510 ms |


| Stat    | 1%     | 2.5%   |50%     |97.5%   |Avg      |Stdev     |Min     |
|---------|--------|--------|--------|--------|---------|----------|---------|
| Req/Sec   | 18,911  | 18,911  | 20,591  | 20,655  | 20,380.8 | 508.24 | 18,900  |
| Bytes/Sec | 4.42 MB | 4.42 MB | 4.82 MB | 4.83 MB | 4.77 MB  | 119 kB | 4.42 MB |

225k requests in 10.04s, 47.7 MB read
700 errors (700 timeouts)