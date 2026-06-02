# Шаблон задачи — ScanFraud

Цель шаблона: дать исполнителю (человеку или агенту) **всё необходимое, чтобы сделать задачу без уточняющих вопросов**. Шаблон универсальный — подходит для текстовых правок, переработки секций, новых страниц, баг-фиксов.

---

## Как пользоваться

1. Скопируй блок **«TEMPLATE»** ниже в поле Description задачи в Jira.
2. Заполни все обязательные поля. Если поле не применимо — пиши `не применимо`, не удаляй.
3. Скриншоты — только как attachment к задаче (иконка скрепки в Jira). **Никаких `file:///` путей и `blob:` ссылок.**
4. Перед submit'ом пройдись по «Анти-чек-листу» в конце файла.

---

## TEMPLATE

```markdown
## Файл и блок

**Файл:** `имя-файла.html`
**Блок:** (точное место, например: `hero` / `feature-row 01` / `.industry-desc` в карточке Gambling / первая карточка в `.card-grid`)

## До → После

**Было:**
> (скопировать текущий текст/содержимое как есть)

**Станет:**
> (новый текст/содержимое)

Если правок несколько — таблица:

| Блок / элемент | Было | Станет |
|----------------|------|--------|
| ... | ... | ... |

## Acceptance Criteria

- [ ] Критерий 1 (проверяемый, без «чтобы было красиво»)
- [ ] Критерий 2
- [ ] Обе темы (dark + light) работают
- [ ] 5 breakpoints проверены (1440 / 1280 / 1024 / 768 / 480)

## Визуал / референс (опционально)

- Прод-URL (где сейчас живёт блок): `https://oliverbone3-commits.github.io/scanfraud-site/...`
- Скрин до/после — attachment к задаче (не file:///, не blob:)
- Ссылка на Figma (если есть)

## Связи

- Парная с: (ключ задачи, если часть одной фичи)
- Блокирует / блокируется: (ключи)
- Эпик: (ключ эпика)
```

---

## Пример «плохо» (как было в ANTF-861)

```
Меняем тексты
Gambling:
Stop bonus abuse, multi-accounting, and chargeback fraud before it hits your margins
Detect coordinated behavior and prevent payout manipulation in real time

Crypto
Detect laundering patterns...

[blob:https://media.staging.atl-paas.net/... — скриншот, не открывается]
```

**Что тут не так:**
- Не сказано, в каком файле. Догадываемся: `industries.html`.
- Не сказано, где именно на странице: карточка на хабе, разворот, или новая страница?
- Для каждой индустрии дано 2 строки — но в текущей разметке только одно поле `.industry-desc`. Объединять через точку? Перестраивать структуру?
- Скриншот как `blob:` — открывается только у PM в его браузере. Исполнитель видит ссылку и ничего больше.
- Нет Acceptance Criteria — непонятно, «готово» это как.

---

## Пример «хорошо»

```markdown
## Файл и блок

**Файл:** `industries.html`
**Блок:** 6 карточек `.industry-card` в `.ind-grid` — обновить содержимое `.industry-desc` на каждой.

## До → После

| Индустрия | Было | Станет |
|-----------|------|--------|
| Gambling | Monitor deposits, withdrawals, and bonus claims... | Stop bonus abuse, multi-accounting, and chargeback fraud before it hits your margins. Detect coordinated behavior and prevent payout manipulation in real time. |
| Crypto | Screen on-ramp and off-ramp flows... | Detect laundering patterns and suspicious cash-out behavior before funds leave your platform. Flag risky wallets and high-velocity flows across on/off-ramps. |
| ... | ... | ... |

## Acceptance Criteria

- [ ] На industries.html у всех 6 карточек поле `.industry-desc` соответствует таблице выше
- [ ] Ни одна карточка не выше других (высота сетки не ломается)
- [ ] Разворот E-commerce на подстранице — в парной задаче ANTF-862
- [ ] Обе темы работают
- [ ] 5 breakpoints проверены

## Визуал / референс

- Прод: https://oliverbone3-commits.github.io/scanfraud-site/industries.html
- Скрин желаемого состояния — attachment `industries-after.png`

## Связи

- Парная с: ANTF-862 (полный разворот для E-commerce)
- Эпик: ANTF-857
```

---

## Анти-чек-лист (чего НЕ делать)

1. **Никаких `file:///Users/...` путей.** У исполнителя нет твоего диска. Если нужна ссылка на версию сайта — прод-URL или staging.
2. **Никаких `blob:https://media.staging.atl-paas.net/...` ссылок.** Это Atlassian media — открывается только в твоём браузере. Скриншоты — только attachment к задаче.
3. **Не писать «первый месседж / первая карточка / эта кнопка»** без указания файла + CSS-селектора или точного описания блока.
4. **Одна задача = одна логическая правка.** Если правишь 6 индустрий + разворот Ecommerce — это 2 связанные задачи, а не одна на всё.
5. **Acceptance Criteria обязательны.** Без AC «готово» определяется догадками исполнителя.
6. **Если меняется структура (не только текст)** — отметь явно: «изменится разметка карточки», «добавится новый feature-row», «удалится блок». Иначе исполнитель может выбрать неподходящий путь.
7. **Если есть парная задача** — указывай её ключ в разделе «Связи». Чтобы исполнитель видел всю картину сразу.

---

## Для админа Jira: автоматизация

Этот шаблон можно прошить в настройки Jira проекта как **Description Template** для Issue Type «Task»:

1. Project Settings → Issue Types → Task → Context fields
2. В поле Description — вставить содержимое блока TEMPLATE выше
3. PM увидит заготовку при создании каждой новой задачи

Либо, если Description Template недоступен (зависит от Jira plan), — сохранить этот файл в Confluence и ссылаться на него в описании каждой задачи через `[Template](link)`.
