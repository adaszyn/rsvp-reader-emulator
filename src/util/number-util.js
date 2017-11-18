export function roundNumber(number, digits = 2) {
  const divisionBase = 10 ** digits;
  return Math.floor(number * divisionBase) / divisionBase;
}