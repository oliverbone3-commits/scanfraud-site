# 01 — Delta Audit (current `index.html` → v3 brief)

**Автор:** UX Architect
**Дата:** 2026-06-01
**Цель:** определить дельту между текущей главной и брифом v3, до начала имплементации.
**Источники:** `index.html`, `00_brief.md`, `system/block-catalog.md`, `CLAUDE.md`.

---

## 1. Карта секций: current → v3

| # | Current section (HTML comment) | v3 section | State | Block (catalog) |
|---|--------------------------------|------------|-------|-----------------|
| 1 | NAV | NAV (sticky) | без изм. | 01 |
| 2 | HERO (centered, Three.js dots, h1 «Pure Traffic. No Friction.», 2 CTA) | HERO | меняется копи + bullets (структура та же) | 04 (centered) |
| 3 | Hero Monitoring Dashboard (embedded `hm-*` mockup под hero, 480px frame) | — | **удаляется** (в v3 не упоминается; hero идёт без preview-фрейма) | (legacy mockup) |
| 4 | PROOF BAR (3 items: Rule Constructor / Traffic Flow / Case Management) | CLIENT TICKER (text-only auto-scroll: PSP / EMI / Crypto / High Risk / BIN Sponsors / Acquirer) | **меняется структура + копи** (заменяем 3-col proof на бегущую строку) | 05 (textual variant) |
| 5 | FEATURE CAROUSEL (текстовый карусель с 4 слайдами + dashboard слева) | — | **удаляется** (дублирует products section) | (legacy) |
| 6 | STATS (4 items: «3 days», «100+», «99.9%», «6 industries») | — | **удаляется** в этой позиции (есть отдельный STATS block ниже) | 09 |
| 7 | FEATURE ROW 01 — Rule Constructor (3 sub-features) | PRODUCTS Row 01 — No-code Rule Engine | меняется копи + sub-features | 07 |
| 8 | FEATURE ROW 02 — Traffic Flow (reversed) | PRODUCTS Row 02 — Payment Routing | меняется копи + sub-features | 07 |
| 9 | FEATURE ROW 03 — Case Management | PRODUCTS Row 03 — Advanced Case Management | меняется копи + sub-features + eyebrow CAPS | 07 |
| — | (нет) | PRODUCTS Row 04 — Fast Go-To-Market (reversed) | **новая** | 07 |
| 10 | SECTION HEADER 1 («Designed around revenue protection…») | PRODUCTS section header («Build Your Defense. Protect Your Revenue.») | меняется копи + позиция (header идёт ПЕРЕД 4 row, не после) | (sec-hdr utility) |
| 11 | 3-COL FEATURES (3 cards: Rule Constructor / Traffic Flow / Case Management с isometric stack) | — | **удаляется** (дубль c products feature rows — анти-паттерн #1 каталога) | 06 |
| 12 | SECTION HEADER 2 («One Platform. Unlimited Risk Scenarios.») | WHY SCANFRAUD section header («Built where mainstream fraud vendors won't bid») | меняется копи + полностью новый смысл | (sec-hdr utility) |
| 13 | 2-COL CARDS row 1 (Payment Support, Collaborative Risk Ops) | — | **удаляется** в этой форме (контент перекочует в WHY SCANFRAUD) | (легаси 2-col) |
| 14 | 2-COL CARDS row 2 (REST API, Blacklists) | — | **удаляется** | (легаси 2-col) |
| — | (нет) | WHY SCANFRAUD — 6 differentiator cards, **asymmetric grid** | **новая** | новый паттерн (см. §2) |
| 15 | METRICS (4 animated counters: +15%, 3 days, 100+, 99.9%) | STATS — 3 counters (<300ms, 3 days, 99.9%) | меняется на **3 counter** (-1), копи и suffix меняются | 09 |
| — | (нет) | INDUSTRIES — 3×2 grid (Gambling, Crypto, E-comm, Fintech, Payment Providers, Trading) + footer-line | **новая** | 11 |
| 16 | CTA SECTION (eyebrow «Get started today», H2 «Stop fraud. Protect revenue. Launch in 3 days.») | CTA | копи H2 совпадает (брать v3 — eyebrow «GET STARTED TODAY», subtitle меняется) | 16 |
| 17 | FOOTER | FOOTER | без изм. | 17 |

**Итог по составу секций v3:** NAV → HERO → CLIENT TICKER → PRODUCTS (header + 4 rows) → WHY SCANFRAUD (header + 6 asymmetric cards) → STATS (3) → INDUSTRIES (header + 6 cards) → CTA → FOOTER.

---

## 2. Что добавляется (новые секции / новые паттерны)

### 2.1 CLIENT TICKER — text-only variant блока 05

- Каталог: блок 05 (customer logo bar) **без permission на логотипы** → каталог явно рекомендует текстовую альтернативу: «Powering N+ providers across M countries».
- В v3 это идёт ещё дальше: вместо custom proof-фразы — **список customer-категорий** в виде бегущей строки: `PSP / EMI / Crypto / High Risk / BIN Sponsors / Acquirer`.
- **Подтверждаю:** это валидная вариация блока 05. Гибрид trust-signal (категории клиентов) + visual rhythm (auto-scroll). Не нарушает анти-паттерн #4 (нет logo wall с 1-2 лого).
- **Техника реализации (vanilla, без shared.css):**
  - Внутри `.grid-wrap` контейнер `.ticker-wrap` с `overflow:hidden`.
  - Двойной список `<ul class="ticker-track">` (дублируется для бесшовного петлевого скролла), `animation: tickerScroll Ns linear infinite`.
  - Items: span с текстом + slash-разделитель (CSS `::after { content: '/' }` на не-последнем).
  - Pause-on-hover (`:hover { animation-play-state: paused }`).
  - Прерывание для `prefers-reduced-motion: reduce`.
  - Тематизация: текст `--t3`, разделитель `--t2` (обе темы).

### 2.2 WHY SCANFRAUD — новый паттерн «differentiators grid»

- В каталоге этого паттерна **нет** напрямую. Можно интерпретировать как **расширение блока 06** (value prop trio → six) либо как **самостоятельный паттерн «benefits grid»**.
- Ключевые отличия от 06:
  - 6 (не 3) cards;
  - **асимметричная сетка** (разная ширина/высота), а не равные колонки;
  - формулировки — это **возражения / differentiators**, а не продукты («No industry exclusions» — это позиционирование, а не модуль).
- → Регистрировать как **новый block 06b: differentiators grid (asymmetric)** для будущего каталога. В рамках текущей задачи — реализуем как inline-секцию в `index.html`.
- См. §5 — выбор 6 из 7 + 2 варианта layout.

### 2.3 INDUSTRIES — блок 11 на главной (раньше его не было)

- Каталог 11: «3-col × 2 row, per cell иконка + название + 1-line desc + arrow link». Для high-risk audience особенно важен.
- На главной раньше не было, был только hub `/industries.html`. Теперь — entry-point с главной.
- Карточки уже существуют на inner-pages (`/gambling.html` и т.д.) — ссылки готовы, копи для grid берём из брифа.

---

## 3. Что меняется в существующих секциях

### 3.1 HERO

**PM-решение:** Lead form НЕ делаем. Hero остаётся центрированный (block 04), с Three.js dots, текст + 2 CTA. Меняем только копи и (опционально) добавляем bullets-строку.

| Поле | Current | v3 | Действие |
|------|---------|----|----------|
| H1 | `Pure Traffic. No Friction.` | `Pure Traffic. No Friction.` | **без изм.** (PM подтвердила сохранить current — см. открытое решение в §6) |
| Subtitle | `Real-time fraud detection and payment orchestration designed to protect revenue without blocking legitimate customers.` | то же | **без изм.** |
| Bullets | — (нет) | `No-code Rule Engine · Advanced Case Management · Fast REST API Integration` | **новое:** добавить inline-строку между subtitle и CTA |
| CTA primary | `Book a demo →` | `Book a demo` (без формы, лидит на `mailto:` / contact) | **меняется только behaviour** (форма убрана из решения PM) |
| CTA secondary | `Explore platform` | `Explore platform` (→ `/products.html`) | href выставить на `/products.html` |
| Hero Monitoring Dashboard preview (h-preview/h-frame, ~480px) | есть | нет в v3 | **удалить** |

**Эффект на layout:** убираем `.h-preview` блок → hero становится короче, padding-bottom можно подтянуть с 56px до 80-100px чтобы не выглядел пустым. Three.js dots остаются.

### 3.2 PRODUCTS (текущие FEATURE ROWS 01-03 → 4 ряда + section-header сверху)

**Текущие 3 ряда (Rule Constructor, Traffic Flow, Case Management) уже есть** — нужно обновить копи и добавить 4-й ряд.

| Row | Current | v3 | Действие |
|-----|---------|----|----------|
| Header | — (sec-hdr идёт ПОСЛЕ feature rows как Section Header 1) | Eyebrow `THE SCANFRAUD PLATFORM` + H2 `Build Your Defense. Protect Your Revenue.` + sub | **переместить header ВЫШЕ feature rows**; копи новая |
| Row 01 | Eyebrow inline («Your Business. Your Logic.»), H3 `Intelligent Rule Constructor`, 3 sub-features (Hybrid Workflow, Multi-Level Precision, Rapid Speed-to-Market) | Eyebrow `01 — NO-CODE RULE ENGINE`, H3 `Your business. Your logic.`, **3 bullets: Hybrid workflow / Velocity & geo precision / Deploy in minutes** (PM-решение #5 — раздельно) | копи + sub-features меняются полностью |
| Row 02 (reversed) | H3 `Frictionless Traffic Flow`, 3 sub | Eyebrow `02 — PAYMENT ROUTING`, H3 `Frictionless Traffic Flow`, tagline «Protect revenue, not just transactions», 3 bullets: Real-time risk scoring <300ms / Smart routing logic / Auto-cascade on failure | копи меняется (numerical proof «<300ms» добавляется) |
| Row 03 | H3 `Advanced Case Management & Cross-Checks`, 3 sub | Eyebrow `03 — ADVANCED CASE MANAGEMENT` (CAPS, PM-решение #6), H3 `Cross-Entity Case Management`, tagline «Connect the dots», 3 bullets: Graph-based linkage / Role-based collaboration / Smart limits from connections | копи меняется, eyebrow CAPS |
| Row 04 (reversed) | — (нет) | Eyebrow `04 — FAST GO-TO-MARKET`, H3 `Your data. Your transactions. Live in days.`, body «Migrate from any vendor — live in 2-3 days», 3 bullets: Rapid API Onboarding / Legacy Data Portability / Instant Configuration Import | **новый ряд** |

**Структура CSS:** `.fdr` + `.fdr.rev` уже есть и поддерживают чередование (01 normal, 02 rev, 03 normal, 04 rev). Eyebrow нумерация делается через `.fe` класс с текстом «01 — NO-CODE RULE ENGINE».

**Дивайдер-правило:** последний row (Row 04) получает border-bottom через `.fdr` стандартный + сразу идёт `.section-divider` (полная ширина через box-shadow technique).

### 3.3 STATS

| Поле | Current (METRICS block) | v3 STATS | Действие |
|------|-------------------------|----------|----------|
| Eyebrow | `By the numbers` | `BY THE NUMBERS` (caps) | без изм. (уже caps в CSS) |
| H2 | `Results teams actually care about` | то же | **без изм.** |
| Layout | 4 столбца (.mg grid-template-columns: repeat(4,1fr)) | **3 столбца** | grid → repeat(3,1fr) |
| Counter 1 | `+15 %` — Average approval rate lift | `<300 ms` — Decision speed per transaction | **меняется на новый** (PM-решение #3) |
| Counter 2 | `3 days` — Median time from API keys to live | `3 days` — Median time from signed contract to live production | копи slightly меняется |
| Counter 3 | `100+` — Pre-built fraud rules | `99.9 %` — Platform uptime SLA across all regions | **меняется** |
| Counter 4 | `99.9 %` — Uptime | — (удаляется) | **удаляется** |

**Замечание:** `+15%` approval lift и `100+ rules` удаляются с STATS, но могут перейти в WHY SCANFRAUD как доп. proof в карточках если потребуется. Сейчас PM согласовала именно 3 counter, оставляем как есть.

**`data-count-prefix` для `<300`:** counter JS animation начинается с 0 → нужно либо включить prefix `<`, либо не анимировать первый counter (statically render `<300`). Рекомендация: статический render для `<300ms` (символ `<` нельзя плавно «отсчитывать»). Открытый вопрос — см. §6.

### 3.4 INDUSTRIES (новая секция на главной)

В current на главной этой секции **нет**. Содержание берётся из брифа полностью:

| Card | Copy | Link |
|------|------|------|
| Gambling & iGaming | Stop bonus abuse, multi-accounting, chargebacks without slowing legitimate players. | /gambling.html |
| Crypto | Detect mule networks, smurfing, structuring across hot wallets and on-ramps. | /crypto.html |
| High-volume E-commerce | Reduce false declines and lift approval rates. | /ecommerce.html |
| Fintech Solutions | Onboarding, monitoring, PSD2/SCA without custom infrastructure. | /fintech.html |
| Payment Providers | Modular, white-labellable, multi-tenant risk infra for PSPs/EMIs/acquirers. | /payment-providers.html |
| Trading & Forex | Wash trading, layering, market manipulation in real time. | /trading.html |

**Layout:** 3-col × 2 row, lucide icons 40×40 в blue accent (`rgba(26,86,255,.08)` light, `.1` dark) per CLAUDE.md spec для industry-icon.

**Footer-line:** «If your industry isn't listed, contact us — we adapt rule sets to specific business models.» — рендерится как inline под grid (`.ind-footer-line` inline-style), 14px Geist regular, `--t2` цвет, border-top через standard divider.

### 3.5 CTA

| Поле | Current | v3 | Действие |
|------|---------|----|----------|
| Eyebrow | `Get started today` | `GET STARTED TODAY` | uppercase уже в CSS |
| H2 | `Stop fraud. Protect revenue.<br>Launch in 3 days.` | `Stop fraud. Protect revenue. Launch in 3 days.` | **без изм.** (PM подтвердила) |
| Subtitle | `Join hundreds of high-growth businesses using ScanFraud to secure their payment flows without slowing down legitimate customers.` | `Built and trusted by payment professionals operating in the verticals others won't touch. See how we handle your traffic in a 30-minute call.` | **меняется** — позиционирование под high-risk ICP, концретика «30-minute call» |
| CTA primary | `Book a demo` | `Book a demo` | без изм. |
| CTA secondary | `Explore platform` | `Contact us` | label меняется + href → contact/mailto |
| Three.js dots | есть (`#cta-dots`) | есть | без изм. |

---

## 4. Что удаляется

| Block | Why | Risk assessment |
|-------|-----|-----------------|
| Hero Monitoring Dashboard preview (`.h-preview` + `hm-*` mockup, ~480px frame под hero) | В v3 нет hero-preview. Hero идёт чистый centered с dots → отдает место CLIENT TICKER. | **Low.** Mockup тяжёлый (~150 строк HTML + связанный CSS в `hero-monitor.css`). Code Reviewer должен проверить, что `hero-monitor.css` link можно удалить из `<head>`, если он нигде больше не используется. |
| PROOF BAR (3-col Rule/Traffic/Case с lucide icons) | Заменяется на CLIENT TICKER. Контент уходит в PRODUCTS feature rows. | **Low.** |
| FEATURE CAROUSEL (`.car-wrap`, JS-carousel со swap текста) | Дубль контента из products feature rows. Анти-паттерн #1. | **Medium.** Связан с большим JS-кодом для swap текста и dashboard rows. Frontend Developer должен удалить и связанный `<script>` блок (поиск по `carPrev`, `carNext`, `carContent`). |
| STATS (4 items: «3 days», «100+», «99.9%», «6 industries») | Анти-паттерн #2: 2 metrics-блока на одной странице. Оставляем только нижний METRICS (теперь STATS-3). | **Low.** |
| 3-COL FEATURES (`.f3` с isometric stack SVG) | Анти-паттерн #1: дубль c products feature rows. | **Medium.** Это самая дорогая в имплементации секция (3 анимированных isometric SVG). Удаляется ~140 строк HTML + CSS-классы `.f3*`, `.iso-*` ещё могут понадобиться где-то (Code Reviewer проверит). |
| 2-COL CARDS row 1+2 (Payment Support, Risk Ops, REST API, Blacklists) | В v3 эти карточки не выживают как самостоятельный блок. Часть смысла («Roles» / collab) уходит в WHY SCANFRAUD. | **Low.** REST API упоминание остаётся в hero bullets. |
| SECTION HEADER 1 + SECTION HEADER 2 (старые копи) | Заменяются на новые headers с продакт- и why-фокусом. | **Low.** Это утилитарные `.sec-hdr` блоки, переиспользуются. |

**Общий риск удаления:** низкий. Ничего из удаляемого не уникально и не блокирует другие страницы. Главное — Frontend Developer должен внимательно вычистить связанные `<script>` (carousel) и проверить нужен ли `hero-monitor.css`.

---

## 5. WHY SCANFRAUD — выбор 6 карточек + 2 варианта асимметричного layout

### 5.1 Выбор 6 из 7

| # | Card | Score | Verdict |
|---|------|-------|---------|
| 1 | Stay below card-network thresholds (Visa/MC VFMP, MATCH, chargeback fees) | ★★★★★ | **KEEP.** Самый сильный proof для high-risk audience: говорит на их языке (VFMP/MATCH — это конкретные регуляторы их боли). |
| 2 | Live in 2-3 days, not a quarter (vendor migration) | ★★★★★ | **KEEP.** Numerical proof + противопоставление mainstream-вендорам с «multi-month onboarding». Подкреплён STATS counter «3 days». |
| 3 | Per-transaction pricing. No minimums. | ★★★★ | **KEEP.** Commercial barrier-removal. Прямой контраст с лоунижными mainstream-контрактами. |
| 4 | Every decision is auditable (no black-box ML) | ★★★★ | **KEEP.** Trust signal + дифференциация от ML-first вендоров (Sift/Forter/Signifyd). |
| 5 | No industry exclusions (gambling, crypto, adult, CBD, forex, e-comm) | ★★★★★ | **KEEP — обязательно.** Central positioning thesis из памяти проекта: «we don't decline merchants based on what they sell». Удаление = потеря якоря ICP. |
| 6 | Fingerprint (device fingerprinting, anti-detect browsers) | ★★★★ | **KEEP.** Technical proof — конкретная capability, важная для anti-fraud ops. Numerical-tangible. |
| 7 | Roles (pre-configured roles, scope-level permissions) | ★★ | **DROP.** Это operational fit, а не differentiator. Mainstream вендоры тоже это имеют. Не уникально, не решает «вопрос покупателя из brief». Не противопоставлено никому. |

**Итоговые 6:** 1, 2, 3, 4, 5, 6 (drop 7).

**Аргументы для drop «Roles»:**
- Не является дифференциатором в категории — это базовая enterprise-capability у всех конкурентов.
- Не отвечает ни на один из 3-5 ключевых вопросов high-risk merchant: «возьмут ли меня», «как быстро», «сколько стоит», «не выгонят ли», «работает ли реально».
- В категориях value-props 5 уже забит «No industry exclusions» (это и есть positioning) + 4 «auditable decisions» (это и есть trust/transparency). «Roles» дублирует «auditable» в смысле control/governance, но слабее.
- Merge с Fingerprint **не делаем** — это разные plane'ы (Fingerprint = product capability, Roles = ops governance). Forced merge ослабит обе.

**Дополнительная нота для Brand Guardian:** карточка 5 «No industry exclusions» должна содержать именно дословную формулировку из брифа — «We don't decline merchants based on what they sell» — это сильнейший claim секции. Должен быть либо в body, либо как выделенная цитата (опционально — italics или blockquote-style).

### 5.2 Asymmetric layout — 2 варианта

**Базовые принципы (для обоих вариантов):**
- Grid внутри `.grid-wrap` → значит общая ширина 1160px (или 100% ≤1280px).
- Дивайдеры — через **border-right / border-bottom** в стиле проекта (`var(--bdl)`), последний по горизонтали без border-right, последний по вертикали без border-bottom.
- Полноширинный bottom-divider секции — через `.section-divider` (уже существует, использует box-shadow technique).
- Cell-pad: `var(--cell-pad)` (40px desktop, 32px ≤1280, 28px ≤1024, 24px ≤768, 20px ≤480).
- Lucide icons: 36×36 container, blue-accent bg per CLAUDE.md.
- Hover: inset blue glow как у `.c2i`.

---

#### Вариант A — «Bento / Wide hero card + 5 standard»

Идея: одна карточка (положенный центральный тезис) — широкая 2×1 (`grid-column: span 2`); 5 остальных — стандартные 1×1.

**Grid:**
```css
.why-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: auto auto auto;
  border-bottom: var(--bdl);
}
.why-card { padding: var(--cell-pad); border-right: var(--bdl); border-bottom: var(--bdl); }
.why-card.wide { grid-column: span 2; }
```

**Раскладка (порядок чтения):**

```
Row 1: [ Card 5 "No industry exclusions" (wide, span 2) ] [ Card 1 "Stay below thresholds" ]
Row 2: [ Card 2 "Live in 2-3 days" ] [ Card 3 "Per-tx pricing" ]                [ Card 4 "Every decision auditable" ]
Row 3: [ Card 6 "Fingerprint" (wide, span 2) ]                                  [ (пусто или CTA-link) ]
```

**Проблема Row 3:** есть «дыра». Решение: либо вторая wide-card («Fingerprint» как technical-deep) + 1 standard `grid-column: span 1` — но тогда 6 cards = 8 cells. Тогда лучше:

**Раскладка-A (исправленная, под 6 = 2 wide + 4 standard, 2 ряда):**

```
Row 1: [ Card 5 "No industry exclusions" (wide span 2) ]      [ Card 1 "Stay below thresholds" ]
Row 2: [ Card 2 "Live in 2-3 days" ] [ Card 3 "Per-tx pricing" ] [ Card 4 "Auditable" ]
Row 3: [ Card 6 "Fingerprint" (wide span 2) ]                  [ (пусто 1 cell) ]
```

→ всё-таки дыра. Тогда меняем pattern: **1 wide + 5 standard, 3 ряда не подходят. Правильнее 2 wide + 4 standard в 2 строки = 8 cells — не годится.**

**Финальная Раскладка-A (1 wide + 4 standard в 2 строки):** = 6 cells, но cards = 5. Не годится для 6.

→ Вариант A с grid-template-columns: 3 cols не даёт чистого 6-cards bento. **Поэтому пересобираем как 4-col:**

**Финальная Раскладка-A:** 4-col grid, 2 строки = 8 cells; одна card wide span 2 + 1 card wide span 2 + 4 standard = 4+4 = 8. 6 cards = 2 wide + 4 standard.

```
Row 1: [ Card 5 "No industry exclusions" (span 2) ] [ Card 1 "Stay below thresholds" ] [ Card 4 "Auditable" ]
Row 2: [ Card 2 "Live in 2-3 days" ] [ Card 3 "Per-tx pricing" ] [ Card 6 "Fingerprint" (span 2) ]
```

```css
.why-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
}
.why-card { padding: var(--cell-pad); border-right: var(--bdl); }
.why-card.wide { grid-column: span 2; }
/* Row 1 cards get border-bottom; row 2 cards drop border-bottom (uses section-divider) */
```

**Где дивайдеры:**
- Между cards: `border-right: var(--bdl)` (auto-strips на последней колонке через `:nth-child` правило);
- Между рядами: `border-bottom: var(--bdl)` на Row 1 cards;
- Bottom of section: `.section-divider` (box-shadow extends 100vw).

**Breakpoints:**
- **≤1280:** grid-wrap → 100%, paddings уменьшаются, layout сохраняется (4-col).
- **≤1024:** переход на 2-col grid; wide-card → `grid-column: span 2` (= занимает всю строку). Порядок: Card 5 (full row) → Card 1 + Card 4 → Card 2 + Card 3 → Card 6 (full row).
- **≤768:** 1-col stack. Все cards 100% ширины, в порядке 5 → 1 → 4 → 2 → 3 → 6. Wide-classes игнорируются (override `grid-column: auto`).
- **≤480:** padding → 20px, остальное как ≤768.

**Плюсы A:**
- Центральный тезис («No exclusions») сразу читается как самый важный — wide card в hero-позиции.
- Технический хайлайт («Fingerprint») получает противовес внизу — симметрия.
- Лёгкая реализация: один CSS-class `.wide` для span 2.

**Минусы A:**
- 4-col grid на 1160px → каждая standard card узкая (~256px минус padding). Lucide 36px icon ОК, но H3 24px может переноситься на 2 строки.
- На светлой теме широкая card будет визуально доминировать → проверить контраст border vs hover glow.

---

#### Вариант B — «Tall / Short alternation» (2 высоких + 4 коротких)

Идея: 3-col × 2 rows, но в каждом столбце ровно по 1 «tall» card (двойная высота) и 1 standard. Layout получается как «шахматка» — визуальный ритм без необходимости span.

**Grid:**
```css
.why-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: auto auto;
}
.why-card { padding: var(--cell-pad); border-right: var(--bdl); border-bottom: var(--bdl); }
.why-card.tall {
  grid-row: span 2;
  /* tall card имеет extended content: header + body + bullet list или quote */
}
```

**Раскладка:**

```
Row 1: [ Card 5 "No exclusions" (tall, span 2 rows) ] [ Card 1 "Stay below thresholds" ]      [ Card 6 "Fingerprint" (tall, span 2 rows) ]
Row 2: [   (Card 5 продолжается)                   ]   [ Card 2 "Live in 2-3 days" ]             [    (Card 6 продолжается)              ]
                                                       [ Card 3 "Per-tx pricing" ]              ← вторая standard под Card 2?
                                                       [ Card 4 "Auditable" ]
```

→ Проблема: 6 cards = 2 tall + 4 standard, но 2 tall занимают 2 rows × 1 col = 2 cells; 4 standard в средней колонке × 2 rows = 2 cells. Итого 4. Нужны 2 ряда × 3 cols = 6 cells. Не хватает.

**Финальная Раскладка-B (2 tall + 4 standard в 4-row grid):**

```css
.why-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-flow: row dense;
}
.why-card.tall { grid-row: span 2; }
```

```
            Col 1                          Col 2                     Col 3
Row 1:  [ Card 5 (tall) "No exclusions" ] [ Card 1 "Stay below" ] [ Card 4 "Auditable" ]
Row 2:  [ (Card 5 cont.)              ] [ Card 2 "Live 2-3d"  ] [ Card 3 "Per-tx" ]
Row 3:  [ Card 6 (tall) "Fingerprint" ] [    (пусто)           ] [   (пусто)        ]   ← не работает
```

Не выходит на 6 cards без дыр.

**→ Альтернатива B: simpler «cross asymmetry» (3-col × 2-row = 6 cells, но per-cell padding varies):**

```css
.why-grid {
  display: grid;
  grid-template-columns: 1.5fr 1fr 1fr;     /* asymmetric column widths */
  grid-template-rows: auto auto;
}
.why-card:nth-child(1),
.why-card:nth-child(4) { /* первая колонка — широкая, padding bigger */ padding: calc(var(--cell-pad) * 1.25); }
```

Раскладка:

```
                Col 1 (1.5fr)                   Col 2 (1fr)                Col 3 (1fr)
Row 1:  [ Card 5 "No industry exclusions" ] [ Card 1 "Stay below" ] [ Card 4 "Auditable" ]
Row 2:  [ Card 6 "Fingerprint"            ] [ Card 2 "Live 2-3d"  ] [ Card 3 "Per-tx pricing" ]
```

**Где дивайдеры:**
- `border-right: var(--bdl)` на всех cards кроме :nth-child(3) и :nth-child(6) (последние в ряду);
- `border-bottom: var(--bdl)` на Row 1 cards (1, 2, 3);
- Bottom of section: `.section-divider`.

**Breakpoints:**
- **≤1280:** grid-wrap → 100%, columns 1.5fr 1fr 1fr сохраняется.
- **≤1024:** переход на 2 cols; первая колонка теряет «wide» характер, но cards 5+6 остаются в первой колонке последовательно → визуальный приоритет сохраняется. `grid-template-columns: 1fr 1fr`.
- **≤768:** 1-col stack, порядок 5 → 1 → 4 → 6 → 2 → 3.
- **≤480:** padding → 20px (как все остальные секции).

**Плюсы B:**
- 6 cells = 6 cards, никаких дыр.
- Естественное визуальное взвешивание через ширину колонки, без `span`-механики.
- Колонка 1 (wide) → «positioning + technical» вместе (Card 5 + Card 6). Колонка 2 → «commercial» (Card 1 + Card 2 — boundaries + speed). Колонка 3 → «trust + cost» (Card 4 + Card 3). Тематические кластеры читаются.
- Проще на всех breakpoints — нет `span` rules to override.

**Минусы B:**
- Менее «бенто», более «table-grid». Может казаться менее живым.
- Card 5 и Card 6 в одной колонке → нужно следить, чтобы они визуально не сливались (но это решается standard cell-border).

---

### 5.3 Рекомендация: **Вариант B**

**Аргументы:**
1. **Чище математика:** 6 cells = 6 cards, никаких пустот и `span`-override.
2. **Соответствует CSS-stack проекта:** проект построен на жёстких grid-структурах с border-right/border-bottom (см. `.c2`, `.f3`, `.ind-grid`). Вариант B — естественное расширение этой системы. Вариант A с `span 2` ломает паттерн.
3. **Лучшая семантика контента:** колонки B читаются как тематические кластеры (positioning / commercial / trust+cost). У A визуальная иерархия ради иерархии.
4. **Меньше breakpoint-сюрпризов:** B плавно деградирует 3→2→1 без необходимости перепаковки `span` правил.
5. **Light-theme safety:** в light theme `--bdl` менее контрастный → в Варианте A широкая card может «вырваться» из grid. В B все cards равно-обведены.

**Если PM хочет более «дизайнерский» / эффектный вариант** — A. Но это trade-off проти инженерной чистоты и breakpoint-стабильности.

---

## 6. Открытые решения к PM (≤5)

1. **HERO копи: сохраняем current «Pure Traffic. No Friction.» или берём v3-вариант?** В брифе под HERO копи описана v3-формулировка идентичная current. Подтвердить, что copy = current (по умолчанию принято «без изменений»). Влияет на текст в `<h1>`.
2. **HERO bullets:** добавлять ли inline-строку «No-code Rule Engine · Advanced Case Management · Fast REST API Integration» под subtitle? В брифе есть, но это новый паттерн на странице. Если да — Frontend Developer добавит как `<p class="h-bullets">` с slash-separator.
3. **STATS counter «<300ms»:** показывать `<` как статический префикс (counter анимируется только от 0 до 300) или вообще не анимировать этот counter? Рекомендация: статический prefix `<` через `data-count-prefix="<"`, animate 0→300.
4. **WHY SCANFRAUD layout — A или B?** Рекомендация UX Architect: B (по аргументам выше). Жду подтверждения.
5. **Footer-line под INDUSTRIES** («If your industry isn't listed, contact us — we adapt rule sets to specific business models») — это inline-параграф под grid или отдельная секция с CTA-button? Рекомендация: inline-параграф (легче, не отвлекает от INDUSTRIES grid и не дублирует CTA в конце страницы).

---

## 7. Готовность к Frontend Developer

После подтверждения 5 открытых решений (особенно #4 — layout WHY SCANFRAUD) — **готов к передаче**.

Frontend Developer-у потребуется:
- В этом аудите есть точная карта секций с делёжкой keep/change/add/remove.
- Все CSS-классы из existing — переиспользуются (`.fdr`, `.fdr.rev`, `.fc`, `.fi`, `.fh`, `.fs`, `.fe`, `.fsh`, `.fsb`, `.cta-*`, `.section-divider`).
- Новые inline CSS-блоки в `<style>` index.html (НЕ shared.css):
  - `.ticker-wrap` + `.ticker-track` + `tickerScroll` keyframes;
  - `.why-grid` + `.why-card` (+ `.why-card.tall` или `.why-card.wide` если выбран A);
  - `.ind-grid` + `.industry-card` (если не подходит существующий `.f3` — проверить);
  - `.ind-footer-line`.
- Удаления: hero-preview (h-preview, h-frame, embedded hm-* mockup), proof-bar, feature carousel (+ JS), top stats, 3-col features (+ isometric SVG), 2-col cards (rows 1 и 2), связанные section-headers.
- Themes: обе темы обязательны для каждого нового класса (см. CLAUDE.md «Theme Colors»).
- Lucide icons init: `lucide.createIcons()` уже вызывается в конце страницы.

---

*Версия: 01 · 2026-06-01 · UX Architect*
