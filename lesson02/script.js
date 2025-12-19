const num = 266219;

const multiply_num = (n) => {
    let res = 1;
    while (n > 0) {
        let lastDigit = n % 10
        res *= lastDigit;
        n = Math.floor(n/10);
    }
    return res;
}

const num1 = multiply_num(num)
const num2 = num1**3;

console.log(num1);
console.log(num2.toString()[0] + num2.toString()[1])