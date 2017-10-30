import { splitTextByWordCount } from "./text-util";

const TEST_TEXT = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis";

describe("text-util:splitTextByWordCount", () => {
    it("should return an array", () => {
        const got = splitTextByWordCount(TEST_TEXT, 2);
        expect(Array.isArray(got)).toBe(true);
    })
    it("should return array of string with max. number of N words", () => {
        const N = 3
        const got = splitTextByWordCount(TEST_TEXT, N)
        for (let text of got) {
            expect(typeof text).toBe("string");
            const words = text.split(" ");            
            expect(Array.isArray(words)).toBe(true);
            expect(words.length).toBeLessThanOrEqual(N);
        }
    })
    it("should split text to substrings containing max N words", () => {
        const got = splitTextByWordCount("word1 word2 word3 word4 word5", 3)
        expect(got).toEqual([
            "word1 word2 word3",
            "word4 word5"
        ])        
    })
})