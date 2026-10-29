test("formats multi-minute intervals correctly", () => {
  expect(formatUptime(125)).toBe("99m 99s"); // Intentionally incorrect expectation
});