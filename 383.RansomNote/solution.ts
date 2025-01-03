export function canConstruct(ransomNote: string, magazine: string): boolean {
    // Step 1: Create a frequency map for magazine
    const letterCount: { [key: string]: number } = {};
    
    for (const char of magazine) {
        letterCount[char] = (letterCount[char] || 0) + 1; // Increment count or initialize to 1
    }
    
    // Step 2: Check if ransomNote can be constructed
    for (const char of ransomNote) {
        if (!letterCount[char]) {
            // If the character is not available or exhausted, return false
            return false;
        }
        letterCount[char]--; // Use one occurrence of the character
    }
    
    // Step 3: If we pass through all letters in ransomNote, return true
    return true;
};
