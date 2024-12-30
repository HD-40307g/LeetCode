describe("canConstruct", () => {
    test("returns false when ransomNote cannot be constructed", () => {
        expect(canConstruct("a", "b")).toBe(false);
        expect(canConstruct("aa", "ab")).toBe(false);
    });

    test("returns true when ransomNote can be constructed", () => {
        expect(canConstruct("aa", "aab")).toBe(true);
    });

    test("handles edge cases", () => {
        expect(canConstruct("", "")).toBe(true); // Empty note and magazine
        expect(canConstruct("", "abc")).toBe(true); // Empty note
        expect(canConstruct("abc", "")).toBe(false); // Empty magazine
    });
});
