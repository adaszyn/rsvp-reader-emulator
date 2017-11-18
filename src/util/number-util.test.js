import { roundNumber } from './number-util'
describe("number util:roundNumer", () => {
  it('should round a number to two digits', () => {
    expect(roundNumber(12.121212)).toEqual(12.12)
    expect(roundNumber(12.121212, 2)).toEqual(12.12)
  })
})