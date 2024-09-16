function* generatePrimes(limit) {
    function isPrime(num) {
        if (num <= 1) return false;
        if (num <= 3) return true;
        if (num % 2 === 0 || num % 3 === 0) return false;
        let i = 5;
        while (i * i <= num) {
            if (num % i === 0 || num % (i + 2) === 0) return false;
            i += 6;
        }
        return true;
    }

    let num = 2;
    while (num <= limit) {
        if (isPrime(num)) {
            yield num;
        }
        num++;
    }
}

// Example usage:
const primeGenerator = generatePrimes(50);

for (let prime of primeGenerator) {
    console.log(prime);
}
