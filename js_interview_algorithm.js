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


// 3. Fibonacci
// Question: How do get nth Fibonacci number?

// Answer: I create an array and start from iterate through.

// Fibonacci series is one of the most popular interview question for beginners. so, you have to learn this one.

const fibonacci = (n) => {
    var fibo = [0,1];

    //n = 0, 1, or 2 returns 1
    if (n <= 2) {
        return 1;
    }

    for (let i = 2; i <= n; i++) {
        fibo[i] = fibo[i - 1] + fibo[i - 2];
    }

    return fibo[n];
}

// console.log(fibonacci(12)) // => 144
// console.log(fibonacci(2)) // => 1

//Recursively O(n^2)

const recursiveFibonacci = (n) => {
    if (n <= 1) {
        return n;
    } else {
        return recursiveFibonacci(n - 1) + recursiveFibonacci(n - 2);
    }
}

// console.log(recursiveFibonacci(5))

// 4. Greatest Common Divisor
// Question: How would you find the greatest common divisor of two numbers?

const greatestCommonDivisor = (a, b) => {
    var divisor = 2,
        greatestDivisor = 1;
    
    if (a < 2 || b < 2) {
        return 1;
    }

    while (a >= divisor && b >= divisor) {
        if (a % divisor === 0 && b % divisor === 0) {
            greatestDivisor = divisor;
        }
        divisor++;
    }

    return greatestDivisor;
}

// console.log(greatestCommonDivisor(10,4));

// 5. remove Duplicate
// Question: How would you remove duplicate members from an array?

// Answer: will start a while looping and keep an object/ associated array. If i find an element for the first time i will set its value as true (that will tell me element added once.). if i find a element in the exists object, i will not insert it into the return array.

const removeDuplicate = (arr) => {
    let uniqueArr = [];

    arr.map(el => {
        if (!uniqueArr.includes(el)) {
            uniqueArr.push(el);
        }
    });

    return uniqueArr;
}

console.log(removeDuplicate([1,3,3,3,1,5,6,7,8,1]))

// 6. merge two sorted array
// Question: How would you merge two sorted array?

// Answer: I will keep a pointer for each array and (read the code. and be careful about this one.)

const mergeSortedArray = (a,b) => {
    let sortedArr;

    a.forEach(el => {
        b.push(el)
    })
    
    sortedArr = b.sort(function(a, b){return a-b});

    return sortedArr;


}

console.log(mergeSortedArray([2,5,6,9], [1,2,3,29]))