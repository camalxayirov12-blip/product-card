// homework-7.js
import { socialComments } from './comments.js';

// --- Уровень 1 ---

// 2. Массив чисел от 1 до 10 и фильтрация от 5
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const numbersFromFive = numbers.filter(num => num >= 5);
console.log("Числа от 5:", numbersFromFive);

// 3. Массив тюнинга для твоей BMW M5 E60
const m5TuningParts = [
  "Akrapovic Exhaust",
  "Alpina Wheels",
  "V10 Engine",
  "Carbon Diffuser",
  "M-Performance Brakes"
];

// Проверяем наличие определенной сущности (например, дисков Alpina)
const hasAlpinaWheels = m5TuningParts.includes("Alpina Wheels");
console.log("Установлены ли диски Alpina?", hasAlpinaWheels);

// 4. Функция для получения ПЕРЕВЕРНУТОГО массива (ПРАВКА: новое название, чтобы не путать с мутацией)
function getReversedArray(arr) {
  // Копируем через spread и переворачиваем
  return [...arr].reverse();
}

console.log("Числа:", getReversedArray(numbers));
console.log("Тюнинг:", getReversedArray(m5TuningParts));


// --- Уровень 2 ---

// 7. Почты .com (ПРАВКА: добавил ByCom)
const commentsByCom = socialComments.filter(comment => comment.email.endsWith('.com'));

// 8. Пост айди (ПРАВКА: добавил ByPostId)
const updatedCommentsByPostId = socialComments.map(comment => ({
  ...comment,
  postId: comment.id <= 5 ? 2 : 1
}));

// 9. Оставляем в объектах только id и name
const idAndNameOnly = socialComments.map(({ id, name }) => ({ id, name }));

// 10. Добавляем isInvalid (длина body > 180)
const validatedComments = socialComments.map(comment => ({
  ...comment,
  isInvalid: comment.body.length > 180
}));
console.log("Результат проверки на валидность:", validatedComments);


// --- Уровень 3 ---

// 11. Массивы почт (ПРАВКА: названия ByMap и ByReduce)
const emailsByMap = socialComments.map(comment => comment.email);

const emailsByReduce = socialComments.reduce((acc, comment) => {
  acc.push(comment.email);
  return acc;
}, []);

// 12. Строка (ПРАВКА: emailsStringByJoin)
const emailsStringByJoin = emailsByMap.join(', ');