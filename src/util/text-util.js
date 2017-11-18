// eslint-disable-next-line
const PUNCTUATION_REGEX = /^[\‒\–\—\―|$&~=\\\/⁄@+*!?({[\]})<>‹›«».;:^‘’“”'",،、`·\•†‡°″¡¿※#№÷×%‰\−‱¶′‴§_‖¦]+$/;

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


export function countWords(text) {
  if(Array.isArray(text)) {
    return text
      .reduce((acc, curr) => acc + countWordsInSentence(curr), 0)
  }
  return countWordsInSentence(text)
}

export function countWordsInSentence(sentence) {
  return sentence
    .split(' ')
    .filter(isNotPunctuation)
    .reduce((acc, curr) => acc + 1, 0)
}

function isNotPunctuation(word) {
  if (typeof word !== 'string') {
    return false;
  }
  return !PUNCTUATION_REGEX.test(word);
}