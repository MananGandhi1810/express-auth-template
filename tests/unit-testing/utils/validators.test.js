const { test, expect } = require("vitest");
const {
  validateEmail,
  validatePassword,
} = require("../../../utils/validators");

test("Validate Email", () => {
  expect(validateEmail("user@gmail.com"), true);
  expect(validateEmail("abcd@google.com"), true);
  expect(validateEmail("haha@example.com"), true);
  expect(validateEmail("invalid-email"), false);
  expect(validateEmail("invalid-google.com"), false);
  expect(validateEmail("invalid@.com"), false);
  expect(validateEmail("invalid@com"), false);
  expect(validateEmail("invalid.com"), false);
  expect(validateEmail("invalid@.com"), false);
});
