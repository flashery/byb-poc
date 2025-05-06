import type { JestConfigWithTsJest } from "ts-jest";

const config: JestConfigWithTsJest = {
  preset: "ts-jest",
  testEnvironment: "node",
  roots: ["<rootDir>/tests"],
  testMatch: ["**/*.test.ts"], // All *.test.ts files inside /tests
  moduleFileExtensions: ["ts", "js", "json", "node"],
  clearMocks: true
};

export default config;
