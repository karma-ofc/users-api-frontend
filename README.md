
# Users API

Простое API для управления списком пользователей с PostgreSQL.

Запуск:

1. Скопируйте `.env.example` в `.env` и заполните переменные.
2. Установите зависимости: `npm install`.
3. Создайте базу данных (пользователь создаст вручную).
4. Запустите миграцию: `node src/migrate.js`.
5. Запустите сервер: `npm run dev` или `npm start`.

Эндпоинты:

- `POST /api/users` - создать пользователя
- `GET /api/users` - список пользователей
- `GET /api/users/:id` - получить пользователя
- `PATCH /api/users/:id` - обновить
- `DELETE /api/users/:id` - удалить


БД
<img width="534" height="727" alt="{EA82FAA0-2CAC-4627-8146-C87B153B12B0}" src="https://github.com/user-attachments/assets/53d971d5-62b1-4f73-9dbe-73f69faaf6fa" />
Поля
<img width="806" height="128" alt="{38B4E88A-0A91-4D92-8225-E7F70B043C65}" src="https://github.com/user-attachments/assets/5efc64b9-539e-4d6c-9be4-c309c1a0c44f" />

/api/users (POST)
<img width="1218" height="780" alt="image" src="https://github.com/user-attachments/assets/f4f3eac4-d6fe-4813-a37e-5d9fa85d61f1" />
/api/users (GET)
<img width="1176" height="725" alt="{C1E0DAE7-205B-4B61-B2FF-087CEE671F01}" src="https://github.com/user-attachments/assets/d7ab7a9e-581b-47b6-9875-6f3e5c326d4b" />
/api/users/:id (GET)
<img width="1219" height="754" alt="{CD3313C9-0096-4170-9F9B-0B1D854A1C87}" src="https://github.com/user-attachments/assets/a9b375c1-0071-4c4a-9084-5de87f74b234" />
/api/users/:id (Patch)
<img width="1128" height="709" alt="{948B3939-1399-4578-AE46-B90052D737C0}" src="https://github.com/user-attachments/assets/bcf67847-b005-41be-a4e6-ada5e0ba6809" />
/api/users/:id (Delete)
<img width="1216" height="801" alt="{A8DD5996-1AAF-46A8-BDD8-0D82652F28B0}" src="https://github.com/user-attachments/assets/a41b2e12-1f85-4bcd-82dc-87bccbd7fead" />
