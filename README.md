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
Практическая 20
БД
<img width="361" height="81" alt="{33952D4C-2BBA-4272-9246-5AA0ABBEED40}" src="https://github.com/user-attachments/assets/58864797-0864-431e-90d9-659126f5453a" />
Поля 
<img width="1284" height="620" alt="{54B65911-1549-4CA2-A586-5CAD8B9E0EB9}" src="https://github.com/user-attachments/assets/979d2498-2349-4541-84ab-15ce7b1f8c76" />
<img width="1309" height="624" alt="{D0E9E808-A285-425B-84C0-3A1C397EE1D4}" src="https://github.com/user-attachments/assets/1ccf28a2-cde8-4aaa-b2e5-b55613c81c66" />

Api
<img width="1221" height="738" alt="{E563BD8F-E1C6-488C-B6CC-83A37B75C777}" src="https://github.com/user-attachments/assets/36ff92a5-8311-4384-88c5-6247ac16bd25" />
/api/users (POST)
<img width="1195" height="835" alt="{096D6F63-ACB6-42DF-86EE-B27A994D562A}" src="https://github.com/user-attachments/assets/33d5fd1e-9824-4cc3-b3af-f55c986be17c" />
/api/users (GET)
<img width="1231" height="776" alt="{2E6FCF69-9BC8-43C2-9BD2-12B2E4EE4D54}" src="https://github.com/user-attachments/assets/729904b0-8b7e-4694-9c24-08700a990860" />
/api/users/:id (GET)
<img width="1237" height="755" alt="{424ACBDA-44BD-4829-B036-B6413524348E}" src="https://github.com/user-attachments/assets/1042906e-1f1a-405e-9321-49de575ce4ba" />
/api/users/:id (Patch)
<img width="1241" height="708" alt="{83B2F287-7F52-4FFE-A570-A37D0547DB5C}" src="https://github.com/user-attachments/assets/d8341038-70b9-45ad-b4e7-de411c3e61a1" />
<img width="1333" height="542" alt="{E9426201-8DF4-4DE1-9CA6-3BC4E836D8BB}" src="https://github.com/user-attachments/assets/7c99777e-eb07-41fa-9c88-4ea61400acad" />
/api/users/:id (Delete)
<img width="1217" height="652" alt="{6BACB790-E204-4EED-A14D-3D35133D2BC0}" src="https://github.com/user-attachments/assets/c5617d20-0904-4949-b255-d8e288ad9078" />

Практическая 19
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
