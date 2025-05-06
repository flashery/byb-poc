# byb-poc

## 🗉 Project Overview

**byb-poc** is a secure Node.js/Express application designed to handle protected PDF report downloads using JWT-based token authentication. It includes:

* Token generation and verification utilities
* Mocked user and report data for testing
* Robust validation and error handling mechanisms
* Comprehensive unit and integration tests using Jest and Supertest

---

## 🚀 Getting Started

### Prerequisites

* Node.js ≥ 18
* pnpm ≥ 10.9.0

### Installation

```bash
pnpm install
```

### Development Server

```bash
pnpm dev
```

This command starts the development server with hot reload enabled.

### Build for Production

```bash
pnpm build
pnpm start
```

This sequence compiles the TypeScript code and starts the production server.

---

## 🔪 Testing

Run the test suite using:

```bash
pnpm test
```

This executes all unit and integration tests, ensuring code reliability.

---

## 📂 Project Structure

```
byb-poc/
├── assets/                 # Directory for downloadable PDF reports
├── src/
│   ├── controllers/        # Express route handlers
│   ├── routes/             # API route definitions
│   ├── services/           # Business logic and validation
│   ├── utils/              # Utility functions (e.g., token management)
│   ├── app.ts              # Express app configuration
│   └── server.ts           # Server entry point
├── tests/                  # Jest and Supertest test suites
├── jest.config.ts          # Jest configuration
├── tsconfig.json           # TypeScript configuration
└── README.md               # Project documentation
```

---

## 🔐 API Endpoint

### `GET /download/:token`

**Description:** Downloads a protected PDF report using a JWT token for authentication.

**Query Parameters:**

* `propertyName` (string): The name of the property associated with the report.

**Responses:**

* `200 OK`: Returns the requested PDF file.
* `400 Bad Request`: Missing or invalid token.
* `403 Forbidden`: Invalid or expired token.
* `404 Not Found`: Report not found.

---

## 🔪 Testing with Supertest

Integration tests are implemented using Supertest to validate API endpoints.

**Example Test Case:**

```ts
import request from "supertest";
import app from "../src/app";
import { generateDownloadToken } from "../src/utils/token";

describe("GET /download/:token", () => {
  it("should download the file with valid token and propertyName", async () => {
    const token = generateDownloadToken({ userId: "user1" }, 600);
    const res = await request(app)
      .get(`/download/${token}`)
      .query({ propertyName: "123 Main St" });

    expect(res.status).toBe(200);
    expect(res.header["content-type"]).toBe("application/pdf");
    expect(res.header["content-disposition"]).toMatch(/attachment/);
  });
});
```

---

## 🛠️ Configuration

Ensure that the `assets/` directory contains the PDF reports referenced in your tests and application logic.

---

# Potential Improvements
- Replace mock data with DB queries

- Add rate-limiting and audit logs

- Extend expiration rules (1 download only, IP-bound, etc.)

- Support email/SMS delivery of link



## 📄 License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
