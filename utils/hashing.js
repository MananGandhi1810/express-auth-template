import bcrypt from "bcrypt";

const saltRounds = 10;

const hash = async (str) => {
  const hashedPassword = await bcrypt.hash(str, saltRounds);
  return hashedPassword;
};

const compare = async (actualStr, expectedStr) => {
  const result = await bcrypt.compare(actualStr, expectedStr);
  return result;
};

export { hash, compare };
