const statusEl = document.getElementById('status');
const cardsContainer = document.getElementById('cardsContainer');
const getAllBtn = document.getElementById('getAllBtn');
const deleteAllBtn = document.getElementById('deleteAllBtn');

const STORAGE_KEY = 'asyncUsersData';

function showMessage(text, type = 'info') {
    statusEl.textContent = text;
    statusEl.className = type;
}

function renderUsers(users) {
    cardsContainer.innerHTML = '';
    if (users.length === 0) {
        showMessage('Список пуст.', 'info');
        return;
    }

    users.forEach(user => {
        const card = document.createElement('div');
        card.className = 'card';
        card.dataset.id = user.id;

        card.innerHTML = `
            <button class="delete-one" title="Удалить">&times;</button>
            <h3>${user.name} ${user.surname}</h3>
            <p><strong>Email:</strong> ${user.email}</p>
            <p><strong>Возраст:</strong> ${user.age}</p>
            <p><strong>Город:</strong> ${user.city || '—'}</p>
        `;

        card.querySelector('.delete-one').addEventListener('click', () => {
            const updatedUsers = users.filter(u => u.id !== user.id);
            localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedUsers));
            renderUsers(updatedUsers);
        });

        cardsContainer.appendChild(card);
    });
}

async function loadData() {
    try {
        const cachedData = localStorage.getItem(STORAGE_KEY);

        if (cachedData) {
            const users = JSON.parse(cachedData);
            showMessage('Данные загружены из локального хранилища.', 'info');
            renderUsers(users);
            return;
        }

        showMessage('Данные загружаются...');

        const response = await new Promise((resolve, reject) => {
            setTimeout(async () => {
                try {
                    const res = await fetch('hw.json');
                    if (!res.ok) {
                        reject(new Error(`HTTP ${res.status}`));
                        return;
                    }
                    const data = await res.json();
                    resolve(data);
                } catch (err) {
                    reject(new Error('Сетевая ошибка или неверный формат JSON'));
                }
            }, 2000);
        });

        localStorage.setItem(STORAGE_KEY, JSON.stringify(response.users));
        renderUsers(response.users);

    } catch (error) {
        console.error(error);
        showMessage('Ошибка при загрузке данных', 'error');
        cardsContainer.innerHTML = '';
    }
}

getAllBtn.addEventListener('click', () => {
    const cachedData = localStorage.getItem(STORAGE_KEY);
    if (!cachedData) {
        showMessage('Данные отсутствуют. Сначала загрузите их.', 'error');
        return;
    }

    const users = JSON.parse(cachedData);
    const currentlyRenderedIds = Array.from(cardsContainer.children).map(card => Number(card.dataset.id));
    const allRendered = users.every(u => currentlyRenderedIds.includes(u.id));

    if (allRendered) {
        showMessage('Отображены все пользователи.', 'info');
    } else {
        renderUsers(users);
        showMessage('Отображены все пользователи.', 'info');
    }
});

deleteAllBtn.addEventListener('click', () => {
    if (confirm('Вы уверены, что хотите удалить всех пользователей из хранилища?')) {
        localStorage.removeItem(STORAGE_KEY);
        cardsContainer.innerHTML = '';
        showMessage('Все данные удалены. Перезагрузите страницу для новой загрузки.', 'info');
    }
});

loadData();