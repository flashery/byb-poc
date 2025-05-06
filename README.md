# byb-poc

A Node.js/Express application that handles protected file downloads using token authentication.

## Prerequisites

- Node.js >= 18
- pnpm >= 10.9.0

## Installation

```sh
pnpm install
```

## Development

Run the development server with hot reload:

```sh
pnpm dev
```

The server will restart automatically when files change.

## Testing

Run tests with Jest:

```sh
pnpm test
```

## Building for Production

Build the TypeScript code:

```sh
pnpm build
```

Start the production server:

```sh
pnpm start
```

## API Routes

### Download Report

```
GET /download/:token
```

Downloads a report file using a JWT token for authentication.

## Project Structure

```
├── src/
│   ├── controllers/
│   │   └── download.controller.ts
│   ├── routes/
│   │   └── download.route.ts
│   ├── services/
│   │   └── download.service.ts
│   ├── utils/
│   │   └── token.ts
│   ├── app.ts
│   └── server.ts
├── tests/
│   ├── downloadRoute.test.ts
│   └── validateDownload.test.ts
└── assets/
    └── reports.pdf
```

## License

ISC