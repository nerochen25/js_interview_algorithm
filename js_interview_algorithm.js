// 1. Check Prime
// Question: How would you verify a prime number?

// Answer: a prime number is only divisible by itself and 1. So, i will run a while loop and increase by 1. (look at the code example. If you dont get it. this is not your cake. do learn javaScript basics and come back.)

const isPrime = (n) => {
    var divisor = 2;

    //1 is not prime;
    if (n < 2) {
        return false;
    }

    while (n > divisor) {
        if (n % divisor === 0) {
            return false;
        } else if (divisor >= 3) {
            divisor += 2;
        } else {
            divisor++;
        }
    }

    return true;
}

console.log(isPrime(1));


// 2. Prime Factors
// Question: How could you find all prime factors of a number?

// Answer: Run a while loop. start dividing by two and if not divisible increase divider until u r done.

const primeFactors = (n) => {
    //divisible factors that are primes
    var factors = [],
        divisor = 2;

    while (n >= 2) {
        if (n % divisor === 0) {
            factors.push(divisor);
            n = n / divisor;
        } else {
            divisor++;
        }
    }

    return factors;
}

// console.log(primeFactors(8));

const fibonacci = (n) => {
    var fibo = [0,1];

    if (n <= 2) {
        return 1;
    }

    for (let i = 2; i <= n; i++) {
        fibo[i] = fibo[i - 1] + fibo[i - 2];
    }

    return fibo[n];
}

console.log(fibonacci(5))