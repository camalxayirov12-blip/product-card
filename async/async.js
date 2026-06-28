const statusMessage = document.getElementById('status-message');
const controls = document.getElementById('controls');
const container = document.getElementById('container');
const btnGetAll = document.getElementById('btn-get-all');
const btnDeleteAll = document.getElementById('btn-delete-all');
const STORAGE_KEY = 'users_db';

// Инициализация приложения
async function init() {
    const localData = localStorage.getItem(STORAGE_KEY);

    if (localData) {
        const users = JSON.parse(localData);
        render(users);
    } else {
        try {
            const users = await fetchUsersWithDelay('db.json', 2000);
            localStorage.setItem(STORAGE_KEY, JSON.stringify(users));
            render(users);
        } catch (error) {
            statusMessage.textContent = 'Ошибка при загрузке данных';
            statusMessage.className = 'error';
            console.error(error);
        }
    }
}

function fetchUsersWithDelay(url, delay = 0) {
    return new Promise((resolve, reject) => {
        setTimeout(async () => {
            try {
                const response = await fetch(url);
                if (!response.ok) {
                    throw new Error(`Ошибка HTTP: ${response.status}`);
                }
                const data = await response.json();
                resolve(data);
            } catch (err) {
                reject(err);
            }
        }, delay);
    });
}

function render(users) {
    container.innerHTML = ''; 

    if (users.length === 0) {
        statusMessage.textContent = 'Список пользователей пуст';
        statusMessage.className = '';
        statusMessage.style.display = 'block';
    } else {
        statusMessage.style.display = 'none'; 
    }

    controls.style.display = 'block';

    // Создаем карточки
    users.forEach(user => {
        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `
            <h3>${user.name} ${user.surname}</h3>
            <p><strong>Email:</strong> ${user.email}</p>
            <p><strong>Возраст:</strong> ${user.age}</p>
            <button onclick="deleteCard(${user.id})">Удалить</button>
        `;
        container.appendChild(card);
    });
}

window.deleteCard = function(id) {
    const localData = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
    const filteredUsers = localData.filter(user => user.id !== id);
    
    localStorage.setItem(STORAGE_KEY, JSON.stringify(filteredUsers));
    render(filteredUsers);
};

// Кнопка: Удалить все карточки
btnDeleteAll.addEventListener('click', () => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify([]));
    render([]);
});

// Кнопка: Получить все карточки 
btnGetAll.addEventListener('click', async () => {
    const localData = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
    
    try {

        const originalUsers = await fetchUsersWithDelay('db.json', 0);

        if (localData.length === originalUsers.length) {
            alert('Информационное сообщение: У вас уже отображены все пользователи!');
            return;
        }

        localStorage.setItem(STORAGE_KEY, JSON.stringify(originalUsers));
        render(originalUsers);

    } catch (error) {
        alert('Не удалось получить данные с сервера для восстановления списка.');
        console.error(error);
    }
});

// Запуск приложения
init();