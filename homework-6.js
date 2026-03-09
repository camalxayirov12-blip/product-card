// 2. Подключение файла выполнено в HTML 

// 3. Объект с личными данными
const userProfile = {
    firstName: "Camaluddin",
    lastName: "Xayirov",
    email: "camalxayirov.12@gmail.com",
    age: 15, 
    country: "Azerbaijan",
    city: "Qusar",
    communicationSkills: "Medium",
    relationshipStatus: "Single",
    occupation: "Student / Developer"
};

// 4. Объект автомобиля
const dreamCar = {
    brand: "BMW",
    model: "M5 E60",
    year: 2008,
    color: "Glossy Black",
    transmission: "Manual"
};

// Добавляем владельца отдельной строкой
dreamCar.owner = userProfile;

// 5. Функция проверки и добавления максимальной скорости
function addMaxSpeed(vehicle) {
    if (!("maxSpeed" in vehicle)) {
        vehicle.maxSpeed = 390;
        console.log("Свойство maxSpeed добавлено!");
    } else {
        console.log("Максимальная скорость уже указана.");
    }
}
addMaxSpeed(dreamCar);

// 6. Функция для вывода любого свойства объекта
function displayProperty(obj, propertyName) {
    console.log(`Значение свойства "${propertyName}":`, obj[propertyName]);
}
displayProperty(userProfile, "email");

// 7. Массив продуктов
const groceries = ["Meat", "Bread", "Milk", "Water", "Fruits"];

// 8. Массив объектов (книги)
const bookCollection = [
    { title: "Elon Musk", author: "Ashlee Vance", year: 2015, coverColor: "White", genre: "Biography" },
    { title: "Titanic: Voices from the Disaster", author: "Deborah Hopkinson", year: 2012, coverColor: "Blue", genre: "History" },
    { title: "Think and Grow Rich", author: "Napoleon Hill", year: 1937, coverColor: "Gold", genre: "Finance" }
];

// Добавляем еще одну книгу методом push
bookCollection.push({ title: "Rich Dad Poor Dad", author: "Robert Kiyosaki", year: 1997, coverColor: "Purple", genre: "Finance" });

// 9. Второй массив (книги определенной вселенной) и объединение
const financeBooks = [
    { title: "The Psychology of Money", author: "Morgan Housel", year: 2020, coverColor: "Beige", genre: "Psychology" },
    { title: "The Richest Man in Babylon", author: "George Clason", year: 1926, coverColor: "Brown", genre: "Finance" }
];

// Объединение через Spread оператор
const combinedLibrary = [...bookCollection, ...financeBooks];


// 10. Метод map для определения "редких" сущностей
const libraryWithRareStatus = combinedLibrary.map((book) => {
    return {
        ...book,
        isRare: book.year < 2000 // Пусть редкими будут те, что выпущены до 2000 года
    };
});

console.log("Итоговая библиотека с пометками Rare:", libraryWithRareStatus);