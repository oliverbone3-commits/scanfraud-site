# ANTF-857 — Анализ задач эпика (кроме ANTF-858)

**Эпик:** [ANTF-857 — Замена экранов веб сайта](https://coddys.atlassian.net/browse/ANTF-857)
**Статус эпика:** Backlog
**Дата анализа:** 2026-04-24

---

## Сводная таблица

| Key | Summary | Страница | Тип работы | Статус | Сложность |
|-----|---------|----------|------------|--------|-----------|
| [ANTF-859](https://coddys.atlassian.net/browse/ANTF-859) | Bin page | `bin-checker.html` | Замена текста (первый месседж) | To Do | S |
| [ANTF-860](https://coddys.atlassian.net/browse/ANTF-860) | Chargeback | `dispute-resolution.html` | Замена блока chargebacks | To Do | M |
| [ANTF-861](https://coddys.atlassian.net/browse/ANTF-861) | Industries | `industries.html` (хаб, 6 карточек) | Замена заголовков/подзаголовков 6 индустрий | To Do | M |
| [ANTF-862](https://coddys.atlassian.net/browse/ANTF-862) | Ecommerce | `ecommerce.html` | Новый детальный блок текста + 5 буллетов | To Do | M |
| [ANTF-863](https://coddys.atlassian.net/browse/ANTF-863) | Documentation | `documentation.html` | Удалить блок про DPA | To Do | S |
| [ANTF-864](https://coddys.atlassian.net/browse/ANTF-864) | Monitoring | `transaction-monitoring.html` | Новый заголовок + 4 основных блока контента | To Do | L |

**Итого:** 6 задач. Все — контент-апдейты (не новые страницы, не редизайн).
Все назначены на Dmitry K, приоритет Medium.

---

## Детали по каждой задаче

### ANTF-859 — Bin page
**Файл:** `bin-checker.html`
**Суть:** Поменять только первый месседж на:
> **Bin** — Stop fraud at the first 6 digits. Identify issuer, country, and card type — before the transaction clears.

Остальные сообщения — без изменений. В описании есть скрин-референс.

**Workflow:** #2 Content Update → Content Creator + Brand Guardian → Frontend Developer → Code Reviewer.

---

### ANTF-860 — Chargeback
**Файл:** `dispute-resolution.html`
**Заголовок секции:** Chargeback Management (Dispute Resolution)
**H1:** Lower chargeback rates and recover lost revenue
**Основной текст:**
> Friendly fraud and disputes continue after the payment is completed. We prepare and package all evidence for you — so you can fight chargebacks without operational overhead.

**Буллеты (4 шт.):**
- Evidence tailored to reason codes and card network requirements
- We collect and prepare all documentation — your team does nothing
- Track disputes across representment and pre-arbitration stages
- Stay below Visa/Mastercard chargeback thresholds

**Workflow:** #2 Content Update.

---

### ANTF-861 — Industries (хаб-карточки)
**Файл:** `industries.html` (карточки 6 индустрий)
**Задача:** Заменить тексты на карточках. Для каждой индустрии — 2 строки (заголовок-посыл + подзаголовок).

| Индустрия | Строка 1 | Строка 2 |
|-----------|----------|----------|
| Gambling | Stop bonus abuse, multi-accounting, and chargeback fraud before it hits your margins | Detect coordinated behavior and prevent payout manipulation in real time |
| Crypto | Detect laundering patterns and suspicious cash-out behavior before funds leave your platform | Flag risky wallets and high-velocity flows across on/off-ramps |
| Fintech | Prevent account takeover and synthetic identity fraud at scale | Apply real-time controls to protect transactions and user accounts |
| E-commerce | Reduce fraud without hurting conversion | Lower chargeback rates and protect checkout revenue |
| Payment Providers | Add fraud protection and routing optimization to your merchant stack | Control risk across multiple merchants and PSP flows |
| Trading | Detect suspicious deposits, withdrawals, and account takeovers | Prevent unauthorized fund movements before execution |

**Workflow:** #2 Content Update (массовый).

---

### ANTF-862 — Ecommerce (внутренняя страница)
**Файл:** `ecommerce.html` (проваливание из карточки industries → e-commerce)
**H1 / ключевой посыл:** Reduce fraud without hurting conversion
**Основной текст:**
> Most orders are legitimate — but aggressive fraud rules often block good customers. We stop fraud before fulfilment while keeping approval rates high.

**Буллеты (5 шт.):**
- Approve more legitimate orders by reducing false positives
- Block card testing and bot traffic before cards are validated
- Route high-risk orders to review — not blind declines
- Real-time risk scoring based on device, behavior, and payment data
- Flexible rules by order value, geography, and payment method

**Связка:** logically парная к 861 (там карточка на хабе — тут разворот).

**Workflow:** #2 Content Update.

---

### ANTF-863 — Documentation
**Файл:** `documentation.html`
**Суть:** Убрать раздел про DPA (Data Processing Agreement).
**Внимание:** Правовая страница → нужен прогон через Legal Compliance Checker перед мерджем (убедиться, что удаление DPA не ломает GDPR-обязательства сайта).

**Workflow:** #5 Legal / Compliance Review.

---

### ANTF-864 — Monitoring (самая тяжёлая)
**Файл:** `transaction-monitoring.html`
**Новый H1:** Transaction Monitoring: Full Spectrum Control

**4 основных блока контента:**

**1. Complete Data Enrichment per Event**
Every transaction is automatically enriched with 15+ data points. Even if the merchant sends incomplete data, the system identifies and fills the gaps in real-time.
- Identification: BIN, country of origin, issuing bank, and payment system
- Technical Profile: IP address, Device ID, and Email fingerprinting
- Financial Accuracy: Real-time conversion to Base Currency for precise limit and velocity checks

**2. Instant Root Cause Analysis**
Eliminate the guesswork behind rejected payments. The monitoring table displays the Exact Decline Reason for every transaction.
- See the specific Rule ID and the condition that triggered the block
- Differentiate between technical failures (Provider errors) and risk-based declines

**3. "For Review" Strategic Pipeline**
Transactions flagged by specific rules are automatically routed to the For Review queue.
- Analyze suspicious patterns without interrupting the main traffic flow
- One-click actions: Add to Blacklists or perform a Crosscheck analysis to uncover linked fraud networks

**4. Instant Notifications**
Stay informed without refreshing the dashboard.
- Late April: Native "In-Platform Bell" notifications for critical events and threshold breaches
- May: External integration with messengers (Slack, Telegram) and Webhooks for automated response

**Workflow:** #6 New Section / Component (т.к. структура меняется, а не только текст).

---

## Рекомендуемый порядок выполнения

Группировка по файлам и сложности:

1. **ANTF-859** (Bin) — 5 минут, быстрый win
2. **ANTF-863** (Documentation — удалить DPA) — 10 минут, но через Legal Compliance
3. **ANTF-861 + ANTF-862** (Industries hub + Ecommerce детально) — **делать парой**, логически связаны
4. **ANTF-860** (Chargeback блок) — самостоятельно
5. **ANTF-864** (Monitoring — полная переработка) — последней, самая тяжёлая

## Рекомендуемые workflow и агенты

| Задача | Workflow | Агенты |
|--------|----------|--------|
| 859, 860, 861, 862 | #2 Content Update | Content Creator + Brand Guardian → Frontend Developer → Code Reviewer |
| 863 | #5 Legal / Compliance | Legal Compliance → Content Creator → Frontend Developer → Code Reviewer |
| 864 | #6 New Section | UI Designer + UX Architect → Frontend Developer → Accessibility Auditor → Code Reviewer |

## Замечания

1. **В описаниях задач есть ссылки на локальные файлы** вида `file:///Users/admin/Downloads/scanfraud-site%202/...` — это копии сайта с рабочей машины автора задач. Для нашей работы это несущественно, берём тексты напрямую из описаний.
2. **Скрины в задачах** (859, 860, 861) — `blob:` ссылки на Atlassian media, в Jira MCP не разворачиваются. Если нужны визуальные референсы, их стоит забрать руками из браузера.
3. **CONTENT-PLAN.md** нужно обновить после выполнения — все новые тексты должны там появиться как источник истины.
4. **ANTF-861 и ANTF-862** — связка: карточка на хабе (861) и полный разворот (862). Тексты должны стыковаться.
