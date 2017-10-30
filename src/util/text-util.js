export function splitTextByWordCount(text, wordCount) {
  const result = [];
  if (typeof text !== "string") {
    throw new Error("splitTextByWordCount accepts string text argument only");
  }
  const words = text.split(" ");
  for (let i = 0; i < words.length; i += wordCount) {
    const wordsSubSelection = words.slice(i, Math.min(i + wordCount, words.length))
    result.push(wordsSubSelection.join(" "))
  }

  return result
}
