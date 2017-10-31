import padLeft from "pad-left";

export function formatMilisecondsToText(miliseconds) {
  const seconds = Math.floor(miliseconds / 1000);
  const minutes = Math.floor(seconds / 60);
  const secondsText = padLeft(String(seconds) % 60, 2, "0");
  const minutesText = padLeft(String(minutes) % 60, 2, "0");
  return `${minutesText}:${secondsText}`
}
