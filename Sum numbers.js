function solve(input) {
    let number = input[0]
    let sumOfNumbers = 0;
    let index = 1;
    let currentNumber = Number(input[index]);

    while (sumOfNumbers < number) {
        sumOfNumbers = sumOfNumbers + currentNumber;
        index++;
        currentNumber = Number(input[index]);
    }
    console.log(sumOfNumbers);
}
solve(["20",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6"])

