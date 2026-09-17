/*переменные*/
const name = "Kuba";
const age = 28;
const isStudent = true;
let selectCar = null
let phoneNumber;

/*вывод в консоль*/
console.log (name);
console.log(age);
console.log(isStudent);
console.log(phoneNumber);

/*определение с помощью typeof*/
console.log(typeof name);
console.log(typeof age);
console.log(typeof isStudent);
console.log(typeof phoneNumber);

/*создание объекта person*/
const user = {
    name: "Куба",
    age: 20,
    isStudent: true
};
console.log("Меня зовут " + user.name + ", мне" + user.age + "лет");

/*массивы*/
const favoriteMovies = [
    "Бродяга Кеншин (2012)",
    "Мстители: Война бесконечности",
    "Мстители: Финал",
    "Легенда об Аанге: Последний маг",
    "Человек бензопила: История Резе"
];
console.log(favoriteMovies);