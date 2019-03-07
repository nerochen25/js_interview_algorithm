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

// console.log(isPrime(1));


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

// console.log(removeDuplicate([1,3,3,3,1,5,6,7,8,1]))

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

// console.log(mergeSortedArray([], [1,2,3,29]))

// 7. swap number without temp
// Question: How would you swap two numbers without using a temporary variable?

// Answer: Waste time about thinking it. though u know the answer, act like you are thinking and take your time to answer this one.

const swapNumb = (a, b) => {
    console.log("before swap: a:", a, "b: ", b)
    b = b - a;
    // a = a + (b - a) >> a = a + b - a >> a = b
    a = a + b;
    // b = (a + b) - b >> b = a + b -b >> b = a
    b = a - b
    // a = a ^ b;
    // b = a ^ b;
    // a = a ^ b;
    console.log("after swap: a:", a, "b: ", b)
}

// swapNumb(1,2)

// 8. string reverse
// Question: How would you reverse a string in JavaScript?

// Answer: I can loop through the string and concatenate letters to a new string

const reverse = str => {
    let reversedStr = [];

    if (str.length <= 1) {
        return str;
    }

    str.split('').forEach(char => {
        reversedStr.unshift(char);
    })

    return reversedStr.join('');
}

// console.log(reverse('hello nero'))
// console.log(reverse('you are a nice dude'))
//   "edud ecin a era uoy"


// 10. reverse in place
// Question: If you have a string like "I am the good boy". How can you generate "I ma eht doog yob"? Please note that the words are in place but reverse.

// Answer: To do this, i have to do both string reverse and word reverse.

const reverseInPlace = str => {
    if (str.split(' ').length <= 1) return str.split(' ').reverse();

    str = str.split(' ').map(word => {
        return word.split('').reverse().join('');
    })

    return str.join(' ');
}

// console.log(reverseInPlace('I love devil may cry'));

// 11. First non repeating char
// Question: How could you find the first non repeating char in a string?

// Answer: You must ask follow up questions.

// Clarification: Is it case sensitive?

// Interviewer: interviewer might say no.

// Clarification: is it very long string or couple hundred?

// Interviewer: Why does that matter
const firstNonRepeatChar = str => {
    let obj = {};

    for (let i = 0; i < str.length; i++) {
        if (str[i] === ' ') {
            continue;
        }

        if (obj[str[i]] >= 0) {
            obj[str[i]] += 1
        } else {
            obj[str[i]] = 1

        }
        
    }

    let objKeys = Object.keys(obj);

    for (let j = 0; j < objKeys.length; j++) {
        if (obj[objKeys[j]] === 1) {
            return objKeys[j]
        }
    }

    return 'Every letter in the string has been repeated for more once'
}

// console.log(firstNonRepeatChar('hheello wworrldld'));


// 12. remove duplicate char
// Question: How will you remove duplicate characters from a sting?

// You: This is very similar to first non repeating char. You will asks similar question. Is it case sensitive.

// If interviewer says, this is case sensitive then life become easier you. If he says no. you can either use string.toLowercase() to make whole string lower. he might not like it. because return string will not posses the same case. So
const removeDuplicateChar = str => {
    let obj = {},
        result = '',
        objKeys;
        
    str = str.split(' ').join('');

    for (let i = 0; i < str.length; i++) {
        if (obj[str[i]]) {
            obj[str[i]] += 1
        } else {
            obj[str[i]] = 1
        }
    }

    objKeys = Object.keys(obj);
    
    objKeys.forEach(key => {
        if (obj[key] === 1) {
            result += key
        }
    })

    return result;
};

// console.log(removeDuplicateChar('Learn more javascript dude'))

// 13. check palindrome
// Question: How will you verify a word as palindrome?

// Answer: if you reverse a word and it becomes same as the previous word, it is called palindrome.
const isPalindrome = (str) => {
    return str === str.split('').reverse().join('')
}   

// console.log(isPalindrome('toyota'));

// 14. random between 5 to 7
// Question:If you have a function that generate random number between 1 to 5 how could u generate random number 1 to 7 by using that function?

// Answer: Very simple. think of some basic arithmetic and you will get it.

const rand5 = () => {
    return 1 + Math.random() * 4;
}

const rand7 = () => {
    return 5 + rand5() / 5 * 2
}

// console.log(rand7());

// 15. missing number
// Question: from a unsorted array of numbers 1 to 100 excluding one number, how will you find that number.

// Explanation: You have an array of numbers 1 to 100 in an array. Only one number is missing in the array. The array is unsorted. Find the missing number.

// Answer: You have to act like you are thinking a lot. and then talk about the sum of a linear series of n numbers = n*(n+1)/2

const missingNum = arr => {
    let maxNum = Math.max(...arr);
    let minNum = Math.min(...arr);
    let missingNumArr = []

    for (let i = minNum; i <= maxNum; i++) {
        if (!arr.includes(i)) {
            missingNumArr.push(i)
        }
    }

    return missingNumArr;
}

// console.log(missingNum([1,4,3,6,7,14]));

// 16. Sum of two
// Question: From a unsorted array, check whether there are any two numbers that will sum up to a given number?

// Answer: Simplest thing in the world. double loop

const sumTwo = (arr, sum) => {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] + arr[j] === sum) {
                return true
            } 
        }
        
    }
    return false;
}

// console.log(sumTwo([6,4,3,2,1,7], 2));

// 17. Largest Sum
// Question: How would you find the largest sum of any two elements?

// Answer: this is actually very simple and straight forward. Just find the two largest number and return sum of them
function topSum(arr){
  
    var biggest = arr[0], 
        second = arr[1], 
        len = arr.length, 
        i = 2;
  
    if (len<2) return null;
    
    if (biggest<second){
      biggest = arr[1];
      second = arr[0];
    } 
    
    for(; i<len; i++){
  
     if(arr[i] > biggest){
        second = biggest;
        biggest = arr[i];
      }
     else if (arr[i]>second){
        second = arr[i];
     }
      
   }
   return biggest + second;
  }