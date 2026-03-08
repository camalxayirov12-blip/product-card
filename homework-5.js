// Задание 3: Функция для города и температуры
function showWeatherInCity(city, temp) {
    console.log(`Сейчас в ${city} температура — ${temp} градусов по Цельсию`);
}
showWeatherInCity("Баку", 17);

// Задание 4: Скорость света
const speedOfLightKms = 299792; 

function checkTravelSpeed(currentSpeed) {
    if (currentSpeed > speedOfLightKms) {
        console.log("Сверхсветовая скорость");
    } else if (currentSpeed < speedOfLightKms) {
        console.log("Субсветовая скорость");
    } else {
        console.log("Скорость света");
    }
}
checkTravelSpeed(100000);

// Задание 5: Покупка BMW M5 F90
const carModel = "BMW M5 F90";
const carPrice = 8500000;

function buyCar(myBudget) {
    if (myBudget >= carPrice) {
        console.log(`${carModel} приобретён. Спасибо за покупку!`);
    } else {
        const neededMoney = carPrice - myBudget;
        console.log(`Вам не хватает ${neededMoney}$, пополните баланс`);
    }
}
buyCar(5000000);

// Задание 6: Проверка возраста (мне 15 лет)
function checkUserAccessByAge(age) {
    if (age >= 18) {
        console.log("Вы совершеннолетний, доступ разрешен.");
    } else {
        const yearsToWait = 18 - age;
        console.log(`Вам ${age} лет. До совершеннолетия осталось подождать ${yearsToWait} года.`);
    }
}
checkUserAccessByAge(15);

// Задание 7: Личные переменные
const firstCityVisited = "Кусар";
const holyCityGoal = "Мекка";
const myCurrentStatus = "студент";

console.log(`Мой первый город — ${firstCityVisited}, а моя цель — ${holyCityGoal}. Ин ша Аллагь, я совершу туда хиджру.`);
console.log(`Моя профессия на данный момент: ${myCurrentStatus}.`);