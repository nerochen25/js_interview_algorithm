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