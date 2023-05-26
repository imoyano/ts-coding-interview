// In mathematics, the factorial of a non-negative integer n, denoted by n!,
// is the product of all positive integers less than or equal to n.
function getFactorialByRecursion(n: number) : number {
    if (n === 0) return 1;
    return n * getFactorialByRecursion(n-1);
}

function getFactorialByIteration(n: number) : number {
    let factorial = 1;
    if (n === 0)
        return factorial;
    for (let i=1; i<=n; i++) {
        factorial *= i;
    }
    return factorial;
}

const nFactorial = 10;
const resultFactorialByRecursion = getFactorialByRecursion(nFactorial);
const resultFactorialByForce = getFactorialByIteration(nFactorial);

console.log(`[recursion] The Factorial number for ${nFactorial} is: ${resultFactorialByRecursion}`);
console.log(`[force] The Factorial number for ${nFactorial} is: ${resultFactorialByForce}`);
/*
describe('getFactorialByRecursion', () => {
    it('should return the factorial of a number', () => {
        expect(getFactorialByRecursion(0)).toBe(1);
        expect(getFactorialByRecursion(1)).toBe(1);
        expect(getFactorialByRecursion(5)).toBe(120);
        expect(getFactorialByRecursion(10)).toBe(3628800);
    });
});
*/