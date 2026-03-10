// 3. Личные данные
const userProfile = {
    firstName: "Camaluddin",
    lastName: "Xayirov",
    email: "camalxayirov.12@gmail.com",
    age: 20,
    country: "Azerbaijan",
    city: "Qusar",
    communicationSkills: "Medium",
    relationshipStatus: "Single"
};

// 4. Автомобиль
const dreamCar = {
    brand: "BMW",
    model: "M5 E60",
    year: 2008,
    color: "Glossy Black",
    transmission: "Manual"
};
dreamCar.owner = userProfile;

// 5. Добавление скорости
function addMaxSpeed(vehicle) {
    if (!("maxSpeed" in vehicle)) {
        vehicle.maxSpeed = 390;
    }
}
addMaxSpeed(dreamCar);

// 6. Вывод свойства (ПРАВКА: более понятное название)
function displayObjectProperty(obj, propertyName) {
    console.log(`Property ${propertyName}:`, obj[propertyName]);
}
displayObjectProperty(userProfile, "email");

// 8. Массив книг 
const bookCollection = [
    {
        title: "Elon Musk",
        author: "Ashlee Vance",
        year: 2015,
        coverColor: "White",
        genre: "Biography"
    },
    {
        title: "Titanic",
        author: "Deborah Hopkinson",
        year: 2012,
        coverColor: "Blue",
        genre: "History"
    },
    {
        title: "Think and Grow Rich",
        author: "Napoleon Hill",
        year: 1937,
        coverColor: "Gold",
        genre: "Finance"
    }
];

bookCollection.push({
    title: "Rich Dad Poor Dad",
    author: "Robert Kiyosaki",
    year: 1997,
    coverColor: "Purple",
    genre: "Finance"
});

// 9. Объединение массивов
const financeBooks = [
    {
        title: "The Psychology of Money",
        author: "Morgan Housel",
        year: 2020,
        coverColor: "Beige",
        genre: "Psychology"
    },
    {
        title: "The Richest Man in Babylon",
        author: "George Clason",
        year: 1926,
        coverColor: "Brown",
        genre: "Finance"
    }
];

const combinedLibrary = [...bookCollection, ...financeBooks];

// 10. Функция с методом map 
function getLibraryWithRareStatus(booksArray) {
    return booksArray.map((book) => {
        return {
            ...book,
            isRare: book.year < 2000
        };
    });
}

const finalLibrary = getLibraryWithRareStatus(combinedLibrary);
console.log(finalLibrary);