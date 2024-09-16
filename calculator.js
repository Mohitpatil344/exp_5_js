// calculator

function calculate(num1, num2, operation) {
    return new Promise((resolve, reject) => {
        if (isNaN(num1) || isNaN(num2)) {
            reject("Invalid input: Both inputs must be numbers.");
            return;
        }

        switch (operation) {
            case 'add':
                resolve(num1 + num2);
                break;
            case 'subtract':
                resolve(num1 - num2);
                break;
            case 'multiply':
                resolve(num1 * num2);
                break;
            case 'divide':
                if (num2 === 0) {
                    reject("Division by zero is not allowed.");
                } else {
                    resolve(num1 / num2);
                }
                break;
            default:
                reject("Invalid operation. Use 'add', 'subtract', 'multiply', or 'divide'.");
                break;
        }
    });
}

calculate(10, 50, 'multiply')
    .then(result => console.log("Result:", result))
    .catch(error => console.error("Error:", error));


    