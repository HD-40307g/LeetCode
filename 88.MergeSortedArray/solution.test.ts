import { merge } from './solution';

describe('merge function', () => {
    test('merges two arrays with equal lengths', () => {
        const nums1 = [1, 2, 3, 0, 0, 0];
        const m = 3;
        const nums2 = [2, 5, 6];
        const n = 3;

        merge(nums1, m, nums2, n);
        expect(nums1).toEqual([1, 2, 2, 3, 5, 6]);
    });

    test('handles nums2 being empty', () => {
        const nums1 = [1];
        const m = 1;
        const nums2: number[] = [];
        const n = 0;

        merge(nums1, m, nums2, n);
        expect(nums1).toEqual([1]);
    });

    test('handles nums1 being empty (filled with zeros)', () => {
        const nums1 = [0];
        const m = 0;
        const nums2 = [1];
        const n = 1;

        merge(nums1, m, nums2, n);
        expect(nums1).toEqual([1]);
    });

    test('handles nums1 and nums2 being interleaved', () => {
        const nums1 = [4, 5, 6, 0, 0, 0];
        const m = 3;
        const nums2 = [1, 2, 3];
        const n = 3;

        merge(nums1, m, nums2, n);
        expect(nums1).toEqual([1, 2, 3, 4, 5, 6]);
    });

    test('handles nums1 with duplicates', () => {
        const nums1 = [1, 3, 3, 0, 0, 0];
        const m = 3;
        const nums2 = [2, 3, 4];
        const n = 3;

        merge(nums1, m, nums2, n);
        expect(nums1).toEqual([1, 2, 3, 3, 3, 4]);
    });
});
