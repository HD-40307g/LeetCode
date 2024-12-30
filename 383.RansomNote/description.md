# 383. Ransom Note

## Problem Description

Given two strings `ransomNote` and `magazine`, return `true` if `ransomNote` can be constructed by using the letters from `magazine` and `false` otherwise.

Each letter in `magazine` can only be used once in `ransomNote`.

---

## Examples

### Example 1:
**Input:**
```plaintext
ransomNote = "a", magazine = "b"
```
**Output:**
```plaintext
false
```

### Example 2:
**Input:**
```plaintext
ransomNote = "aa", magazine = "ab"
```
**Output:**
```plaintext
false
```

### Example 3:
**Input:**
```plaintext
ransomNote = "aa", magazine = "aab"
```
**Output:**
```plaintext
true
```

---

## Constraints

- `1 <= ransomNote.length, magazine.length <= 10^5`
- `ransomNote` and `magazine` consist of lowercase English letters.
