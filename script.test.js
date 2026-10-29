const { formatUptime } = require("./script.js");

describe("formatUptime", () => {
  test("formats 0 seconds correctly", () => {
    expect(formatUptime(0)).toBe("0m 0s");
  });

  test("formats seconds within a single minute", () => {
    expect(formatUptime(45)).toBe("0m 45s");
  });

  test("formats multi-minute intervals correctly", () => {
    expect(formatUptime(125)).toBe("2m 5s");
  });

  test("handles negative or invalid inputs gracefully", () => {
    expect(formatUptime(-10)).toBe("0m 0s");
    expect(formatUptime("invalid")).toBe("0m 0s");
  });
});