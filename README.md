
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
Простое API для управления списком пользователей с PostgreSQL.

Краткие инструкции

1. Скопируйте `.env.example` в `.env` и при необходимости отредактируйте значения (в проекте уже есть `.env`, не удаляйте его).
2. Установите зависимости:

```bash
npm install
```

3. Создайте базу данных PostgreSQL (например, `frontend-19-24`).
4. Выполните миграцию для создания таблицы `users`:

```bash
node src/migrate.js
```

5. Запустите сервер (в режиме разработки):

```bash
npm run dev
```

Проверка основной функциональности

PowerShell (пример):

```powershell
# создать
Invoke-RestMethod -Method Post -Uri http://localhost:3000/api/users -Body (ConvertTo-Json @{first_name='Ivan'; last_name='Petrov'; age=30}) -ContentType 'application/json'

# получить список
Invoke-RestMethod http://localhost:3000/api/users

# получить по id
Invoke-RestMethod http://localhost:3000/api/users/1

# обновить
Invoke-RestMethod -Method Patch -Uri http://localhost:3000/api/users/1 -Body (ConvertTo-Json @{age=31}) -ContentType 'application/json'

# удалить
Invoke-RestMethod -Method Delete -Uri http://localhost:3000/api/users/1
```

curl (пример):

```bash
# создать
curl -s -X POST http://localhost:3000/api/users -H "Content-Type: application/json" -d '{"first_name":"Ivan","last_name":"Petrov","age":30}'

# список
curl -s http://localhost:3000/api/users
```

Описание эндпоинтов

- `POST /api/users` - создать пользователя (body: `first_name`, `last_name`, `age`)
- `GET /api/users` - получить список пользователей
- `GET /api/users/:id` - получить конкретного пользователя
- `PATCH /api/users/:id` - обновить пользователя (любой из полей `first_name`, `last_name`, `age`)
- `DELETE /api/users/:id` - удалить пользователя

Дополнительно

- Файл `.env.example` содержится в проекте — используйте его как шаблон.
- Реальные секреты не должны попадать в репозиторий; в этом репозитории сейчас есть `.env` для локальной работы, но `.env` добавлен в `.gitignore` (см. файл `.gitignore`).
- Для запуска тестов можно использовать скрипты или добавить набор интеграционных тестов (по запросу добавлю пример на Jest/Supertest).

