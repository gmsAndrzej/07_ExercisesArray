//Zadanie 1

const array_1 = [2, 5];
const array_2 = [3, 7];

const mergeArrays = (array_1, array_2) => [...array_1, ...array_2];

console.log(mergeArrays(array_1, array_2));

//Zadanie 2

const exceptFirst = (first, ...rest) => [...rest];

console.log(exceptFirst(2, "delfin", null));

//Zadanie 3
{
    const array = [1, 3, undefined, true];

    const last2Parameters = (array) => array.slice(2);

    console.log(last2Parameters(array));

}

//Zadanie 4

const array = ["rum", "kawa", "sangria"];
const element = "kawa";

const drinks = (element, array) => array.indexOf(element);
console.log(drinks(element, array));

//Zadanie 5

{
    const tasks = [{ content: "" }, { content: "kupić balony w kształcie psów" }];

    const findNonEmptyTask = (tasks) => tasks.find(({ content }) => content !== "");

    console.log(findNonEmptyTask(tasks));
}

//Zadanie 6
{
    const numbers = [2, 4, 7, 8];

    const oddIndex = (numbers) => numbers.findIndex((element) => element % 2 !== 0);

    console.log(oddIndex(numbers));
}

//Zadanie 7

const fruits = ["banan", "marakuja"];

const hasStrawberry = (fruits) => fruits.includes("strawberry");

console.log(hasStrawberry(fruits));

//Zadanie 8

const people = [
    { name: "Melodia", age: 15 },
    { name: "Kosmo", age: 19 }
];




const someAdult = (people) => people.some(({ age }) => age >= 18);

console.log(someAdult(people));

//Zadanie 9

const arguments = ["", "żelazko"];

const onlyString = (arguments) =>
    arguments.every((element) => typeof element === "string");

console.log(onlyString(arguments));

//Zadanie 10

const carBrands = ["Peugeot", "BMW", "Audi"];
const carPremium = ["BMW", "Audi", "Mercedes"];

const filterPremium = (carBrands) =>
    carBrands.filter((element) => carPremium.includes(element));

console.log(filterPremium(carBrands));

//Zadanie 11

const cars = [
    { car: "BMW X5", color: "black" },
    { car: "Peugeot 3008", color: "white" }
];
const getColors = (cars) => cars.map(({ color }) => color);

console.log(getColors(cars));

//Zadanie 12
{
    const people = [
        { name: "Krzychu", age: 30 },
        { name: "Zdzichu", age: 20 }
    ];

    const sortPeople = (people) => people.sort((a, b) => a.age - b.age);

    console.log(sortPeople(people));
}
