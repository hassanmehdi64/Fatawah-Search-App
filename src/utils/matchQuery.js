export function matchQuery(userQuery, storedQuery) {
  const normalize = (text) =>
    text
      .replace(/[؟،۔]/g, "")
      .trim()
      .toLowerCase()
      .split(" ")
      .filter((w) => w.length > 2);

  const userWords = normalize(userQuery);
  const storedWords = normalize(storedQuery);

  let matches = 0;

  userWords.forEach((word) => {
    if (storedWords.includes(word)) {
      matches++;
    }
  });

  // Match if at least 40% words overlap
  return matches / storedWords.length >= 0.4;
}
