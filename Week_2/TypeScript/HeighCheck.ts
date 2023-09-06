function heightChecker(heights: number[]): number {
    const expected: number[] = [...heights].sort((a, b) => a - b);
    let count: number = 0;

    for (let i = 0; i < heights.length; i++) {
        if (heights[i] !== expected[i]) {
            count++;
        }
    }

    return count;
}

const heights: number[] = [1, 1, 4, 2, 1, 3];
const result: number = heightChecker(heights);
console.log(result);  
