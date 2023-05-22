// Fibonacci sequence is 0 1 1 2 3 5 8 13 21
// 0 + 1 = 1
// 1 + 1 = 2
// 1 + 2 = 3
// 2 + 3 = 5

function getFibonacciByForce(n: number) : number {
    let prev = 0, next = 1, result = 0;
    if (n === 0) return 0;
    if (n <= 2) return 1;
    
    for (let i = 2; i <= n; i++) {
        result = prev + next;
        prev = next;
        next = result;
    }
    return result;
}

function getFibonacciByRecursion(n: number) : number {
    if (n <= 0) {
        return 0;
    } else if (n === 1) {
        return 1;
    } else {
        return getFibonacciByRecursion(n-1) + getFibonacciByRecursion(n-2);
    }
}

const n = 10;
const resultByRecursion = getFibonacciByRecursion(n);
const resultByForce = getFibonacciByForce(n);

console.log(`[recursion] The Fibonacci number at position ${n} is: ${resultByRecursion}`);
console.log(`[force] The Fibonacci number at position ${n} is: ${resultByForce}`);