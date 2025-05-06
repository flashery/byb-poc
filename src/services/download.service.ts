import { users } from "../__mocks__/user";
import { reports } from "../__mocks__/report";

export function validateDownload(userId: string, properName: string) {
  const user = users.find(u => u.id === userId);

  if (!user) throw new Error("Unauthorized or data not found");

  const report = reports.find(r => r.propertyName === properName);
  if (!report) throw new Error("Report not found");
  return report?.file;
}
