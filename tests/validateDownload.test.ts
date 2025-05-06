import { validateDownload } from "../src/services/download.service";
import { users } from "../src/__mocks__/user";
import { reports } from "../src/__mocks__/report";

describe("validateDownload", () => {
  it("should return the correct file if user and report exist", () => {
    const userId = users[0].id;
    const propertyName = reports[0].propertyName;

    const result = validateDownload(userId, propertyName);
    expect(result).toBe(reports[0].file);
  });

  it("should throw error if user does not exist", () => {
    expect(() => {
      validateDownload("nonexistent-user", reports[0].propertyName);
    }).toThrow("Unauthorized or data not found");
  });

  it("should throw error if report does not exist", () => {
    expect(() => {
      validateDownload(users[0].id, "Unknown Property");
    }).toThrow("Report not found");
  });
});
