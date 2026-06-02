# ScanFraud Homepage — Block-by-Block Structure (proposed)

**Главный делив для PM.** Спецификация каждого блока главной страницы: цель, контент, визуальный паттерн, источник в индустрии, копий-черновик. Опирается на:
- `research/seon.md`, `sift.md`, `forter.md`, `signifyd.md`, `ravelin.md` — аудиты 5 конкурентов
- `research/scanfraud-current.md` — расширенный аудит current scanfraud.com
- `01_pattern-matrix.md` — таблица «секция × конкурент» с индустриальными нормами

---

## TL;DR

Предлагается **16 блоков** на главной с **5 ключевыми добавлениями** к существующей структуре (customer logo bar, customer-story-with-number в feature row, industries grid, compliance bar, FAQ) и **3 удалениями** (дубли продуктов в proof bar Block 3 и feature carousel Block 4, объединение двух stats-блоков).

```
                   CURRENT (15)            PROPOSED (16)
01  Sticky nav                  ✓     →    Sticky nav (KEEP)
02  Hero                        ✓     →    Hero (KEEP, минор-уточнения)
                                            ↓ NEW
                                03    →    ★ Customer logo proof bar (NEW — критично)
03  Proof bar (3 product pillars) ✗   →    REMOVE — дубль с feature rows
04  Feature carousel              ✗   →    REVISE → Lifecycle/Use-case tabs
                                05    →    Stats (consolidated, было 5+14)
05  Stats early                   ✗   →    REMOVE — слит в 05
06  Feature row 01 — Rule         ✓   →    Feature row 01 (KEEP + ADD customer cite)
07  Feature row 02 — Traffic      ✓   →    Feature row 02 (KEEP)
08  Feature row 03 — Case Mgmt    ✓   →    Feature row 03 (KEEP)
09  Section header 1              ✓   →    Section header 1 (KEEP)
10  3-col features (f3)           ✓   →    3-col features (KEEP)
                                12    →    ★ Industries grid (NEW)
11  Section header 2              ✓   →    Section header 2 (KEEP)
12  2-col cards row 1             ✓   →    2-col cards (consolidated, было 11+12 → 1 ряд)
13  2-col cards row 2             ✗   →    REMOVE — слит в 12
                                14    →    ★ Customer story / case card (NEW)
                                15    →    ★ Compliance bar (NEW)
14  Metrics (late)                ✗   →    REMOVE — слит в 05
                                16    →    ★ FAQ (NEW)
15  CTA block                     ✓   →    CTA block (KEEP)
16  Footer                        ✓   →    Footer (KEEP)
```

**Net diff:** +5 (logo bar, industries, customer story, compliance, FAQ); −3 (proof bar дубль, stats early дубль, 2-col row 2 слит); +1 revise (carousel → tabs).

---

## Принципы предлагаемой структуры

1. **No duplicate product mentions.** Каждый из 3 ключевых продуктов упоминается ровно в 2 формах (feature row + 3-col), не в 4. Освобождённый верстикальный бюджет идёт на customer/compliance/FAQ.
2. **Index-first proof.** Customer logos сразу под hero. 5/5 конкурентов так делают — это уже не мнение, это норма B2B-вёрстки.
3. **Numbered outcomes embedded в контент.** Один customer-cite внутри feature row даёт больше доверия, чем 4 generic stat'a в отдельном блоке.
4. **Compliance как proof для PSP/EMI.** Для нашего ICP compliance — топ-3 критерий выбора. Сейчас он спрятан на `/security` — нужно вынести на главную.
5. **Industries grid → точка входа в `industries.html` хаб.** Сейчас на главной нет ни одной ссылки на industry-страницы. Это разрыв информационной архитектуры.
6. **FAQ — наше осознанное решение, не индустриальная норма.** Ни у одного из 5 конкурентов FAQ на homepage нет. Мы добавляем, потому что мы меньший игрок и закрываем больше типовых вопросов до запроса демо. Если решим убрать — это валидно.
7. **Dual theme сохраняется.** Все новые блоки должны работать в обеих темах из коробки.

---

## Блок-за-блоком

### 01. Sticky nav
- **Status:** KEEP
- **Position:** above-fold (fixed, 65px)
- **Цель:** глобальная навигация + мгновенный доступ к Book a demo + theme toggle
- **Структура:** brand слева | 5 меню-пунктов центр | theme toggle + Sign in + Book a demo справа
- **Контент:** existing (Products / Industries / Resources / Security / Docs)
- **Pattern source:** 5/5 конкурентов
- **Изменения:** нет
- **Detail для верстки:** `var(--nav-bg)`, blur 8px, `border-bottom: var(--bdl)`

### 02. Hero
- **Status:** KEEP с минор-правками
- **Position:** above-fold
- **Цель:** value prop за 5 секунд + визуальное доказательство «продукт реальный» + 2 CTA
- **Структура:** split — текст слева (eyebrow / H1 / subtitle / 2 CTA), Hero Monitoring Dashboard справа. Animated Three.js dots fon.
- **Контент:**
  - Eyebrow: «FRAUD PREVENTION & PAYMENT MANAGEMENT»
  - H1 (current): «Pure Traffic. No Friction.» — ОК, оставляем
  - Subtitle: «Real-time fraud detection and payment orchestration designed to protect revenue without blocking legitimate customers.»
  - CTAs: `Book a demo →` (primary) + `Explore platform` (secondary)
- **Pattern source:** split-hero — Sift, Forter; product UI как визуал — Ravelin (мы имеем сильнее)
- **Изменения:** none. Вариант усиления: добавить trust-эйбров вроде «Trusted by 50+ PSPs» если будет цифра.
- **Detail для верстки:** existing `.hero-sec`, без изменений CSS

### 03. ★ Customer logo proof bar (NEW)
- **Status:** NEW — критично
- **Position:** mid (сразу под hero, перед stats)
- **Цель:** социальное доказательство в 1 секунду; ответ на «кто ещё этим пользуется»
- **Структура:** горизонтальная полоска 6-12 customer logos, монохром (grayscale) с hover до цвета. Eyebrow «TRUSTED BY» сверху.
- **Контент:** реальные лого клиентов. Минимум 6, идеально 8-10 (по 2 ряда на mobile).
- **Альтернатива если NDA-проблема с логотипами:** «Trusted by [N]+ regulated payment providers across [M] countries» — текстовая версия с цифрой
- **Pattern source:** Seon («Trusted by the World's Most Ambitious Companies» + logos), Sift («Protecting 700+ Global Brands»), Signifyd, Ravelin («TRUSTED BY»)
- **Risk:** **БЛОКЕР для PM/руководства — нужны логотипы клиентов с разрешением на публикацию.** Если разрешения нет:
  - Вариант A: текстовая версия с цифрой («Powering [N]+ regulated payment flows»)
  - Вариант B: логотипы partners/integrations (Visa, Mastercard, etc.) с дисклеймером
  - Вариант C: industry trust ribbons («Used by EMIs across UK, EU, MENA») без логов
- **Detail для верстки:** новая секция `.client-logos`, height ~120px, 6-col grid (collapses on mobile), grayscale filter с `transition: filter 0.3s`

### 04. Lifecycle / Use-case tabs (REVISE из current carousel)
- **Status:** REVISE
- **Position:** mid (после logo bar)
- **Цель:** показать «как наш продукт покрывает payment lifecycle» — переходный блок к продуктовым деталям
- **Структура:** табы (5-6 stages, например: Onboarding → Authentication → Payment → Monitoring → Disputes → Reporting). Под табами — split: текст с описанием стадии слева + product UI mockup справа. Активный таб подсвечен.
- **Контент:**
  - Section H2: «Coverage across the full payment lifecycle»
  - 6 tabs с короткими label: «Onboarding», «Authentication», «Payment», «Monitoring», «Disputes», «Reporting»
  - Под каждым табом: 1-2 предложения + ссылка «See [product] →» на соответствующую продуктовую страницу
- **Pattern source:** Seon (6-step lifecycle carousel), Sift (5-tab «consumer journey» — Signup → Login → Account Activity → Transaction → Post-transaction)
- **Изменения:** существующий feature carousel (Block 4) переделывается из «3 product summary» в «5-6 lifecycle stages»
- **Detail для верстки:** клик-to-switch (не auto), keyboard-nav (←→), aria-tabs role; на mobile превращается в стек

### 05. Stats (consolidated)
- **Status:** REVISE — объединение Block 5 (early stats) и Block 14 (late metrics)
- **Position:** mid (после lifecycle tabs)
- **Цель:** один блок proof points, без повторов
- **Структура:** 4-col animated counters, eyebrow + H2 сверху
- **Контент (предлагаю эти 4):**
  - **+15%** Average approval rate lift after deploying smart routing
  - **<300ms** Decision speed per transaction
  - **3 days** Median time from API keys to live production
  - **99.9%** Platform uptime SLA across regions
- **Pattern source:** Sift (3 stats), Forter (3 stats), Seon (inline numbers in copy)
- **Изменения:** удалить Block 5 + Block 14 из current, оставить ровно один консолидированный блок
- **Detail для верстки:** existing `.metrics` стиль, 4 col, animated counters with `IntersectionObserver`

### 06-08. Feature rows 01-03 — Rule Constructor / Traffic Flow / Case Management
- **Status:** KEEP с одним важным добавлением
- **Position:** mid
- **Цель:** глубокое описание 3 ключевых продуктов, по одному per row
- **Структура:** existing 50/50 split, текст с 3-4 sub-features (heading + body) с одной стороны, dashboard mockup с другой. Reverse через одну.
- **Контент:** existing copy + **★ ADD: одна customer-cite с hard number в первый feature row.**
  - Пример (gambling/iGaming customer):
    > «We cut card-based fraud by 73% in our first quarter with ScanFraud while keeping checkout latency under 200ms.»
    > — *Risk Lead, [Customer Name]*
- **Pattern source:** **Sift's signature pattern** — каждый «Sift Difference» feature row содержит named-customer quote с метрикой (Harry's: «85% chargeback drop»). Forter делает то же.
- **Risk:** **БЛОКЕР — нужен customer-permission для публикации цитаты + цифры.** Без этого добавлять не можем.
- **Detail для верстки:** новый sub-component `.feat-row-quote`, появляется только в feature row 01 (или там где есть customer-cite). Структура: цитата + горизонтальная линия + имя+роль+лого.

### 09. Section header 1 — «Designed around revenue protection»
- **Status:** KEEP
- **Position:** mid
- **Цель:** reframing-секция перед 3-col f3, переходный блок «не блокировка а защита выручки»
- **Структура:** existing `.sec-hdr` — H2 слева 60%, eyebrow+body справа 40%
- **Контент:** existing
- **Pattern source:** уникальный наш паттерн (никто из 5 не делает похоже) — сохранить
- **Изменения:** none

### 10. 3-col features (isometric SVG cards)
- **Status:** KEEP
- **Position:** mid
- **Цель:** третья (визуально другая) подача 3 продуктов с акцентом на character иллюстрации
- **Структура:** existing 3-col grid, isometric stack-SVG в каждой карточке
- **Контент:** existing
- **Pattern source:** наш уникальный визуал — никто из 5 не делает isometric stack. Сохранить как часть identity.
- **Изменения:** none

### 11. ★ Industries grid (NEW)
- **Status:** NEW
- **Position:** mid (после 3-col features, перед section header 2)
- **Цель:** «для кого мы»; точка входа в `industries.html` хаб; ответ на «применимо ли ко мне»
- **Структура:** 3-col grid × 2 row (= 6 industries). Каждая карточка: иконка lucide + название + 1-line desc + ссылка «Learn more →»
- **Контент (по существующим страницам):**
  | Industry | Card title | One-liner desc |
  |----------|------------|----------------|
  | gambling.html | Gambling & iGaming | Stop bonus abuse, multi-accounting, and chargeback fraud — without slowing legitimate players. |
  | crypto.html | Crypto | Detect mule networks and smurfing patterns, comply with Travel Rule and FATF requirements. |
  | ecommerce.html | E-commerce | Reduce false declines and optimise approval rates across regions and payment methods. |
  | fintech.html | Fintech Solutions | Onboard customers safely, monitor transactions, and meet PSD2/SCA requirements. |
  | payment-providers.html | Payment Providers | Risk infrastructure for PSPs, EMIs, and acquirers — modular, white-labellable. |
  | trading.html | Trading | Detect wash trading, layering, and market manipulation in real time. |
- **Subtitle:** «If your industry isn't listed, contact us — we adapt to your business model.»
- **Pattern source:** Seon (5-tab industries with named customer per tab), Signifyd (geo-segmentation), Ravelin (6-tab use cases). Мы выбираем grid (не tabs), потому что у нас нет customer cite per industry — grid даёт сразу всю широту.
- **Detail для верстки:** новая секция `.ind-grid`, существующая в hub-странице (industries.html) — переиспользовать тот же CSS-класс. Карточки с border-bottom transitions.

### 12. Section header 2 — «One Platform. Unlimited Risk Scenarios.»
- **Status:** KEEP
- **Position:** mid
- **Цель:** переход ко второму value pillar (платформенность, расширения)
- **Структура:** existing
- **Контент:** existing
- **Pattern source:** наш уникальный паттерн
- **Изменения:** none

### 13. 2-col cards (consolidated)
- **Status:** REVISE — слияние 2 рядов (current Blocks 11+12) в 1 ряд из 2 карточек
- **Position:** mid-bottom
- **Цель:** показать 2 ключевые value adds, не привязанные к 3 основным продуктам
- **Структура:** 2-col grid, lucide-иконка + eyebrow + heading + body + (опционально) ссылка
- **Контент (выбираем 2 из current 4):**
  - Card 1: **Comprehensive Payment Support** (existing) — Any Method, Any Market
  - Card 2: **Simple REST API Integration** (existing) — Ready to Launch in Hours + GitBook docs link
- **Удаляем:** «Collaborative Risk Ops» и «Dynamic Blacklists» — менее сильные, дубли смысла с feature rows
- **Pattern source:** N/A — наш собственный паттерн
- **Изменения:** удалить current Block 13 (2-col row 2), оставить только 2 карточки

### 14. ★ Customer story / case study card (NEW)
- **Status:** NEW
- **Position:** mid-bottom (после 2-col cards)
- **Цель:** один яркий клиентский кейс с цифрами; ответ на «работает ли это в реальности»
- **Структура:** широкая карточка во весь грид. Слева 60%: customer logo + headline-метрика (большим шрифтом) + цитата + имя/должность. Справа 40%: вторичные метрики (3-4 stat) + CTA «Read full case study →»
- **Контент (черновик, нужен реальный кейс):**
  - Headline metric: «73% reduction in card fraud»
  - Quote: «We cut card-based fraud by 73% in our first quarter with ScanFraud while keeping checkout latency under 200ms.»
  - Attribution: Risk Lead, [Customer Name]
  - Secondary metrics:
    - 200ms — Average decision latency
    - 12% — Approval rate increase
    - 3 days — Time to production
- **Pattern source:** Seon (case study cards внутри industries tabs с метриками: «70% reduction in bonus abuse», «32x ROI»), Sift («Harry's» quote с 85%), Forter (quote carousel), Signifyd (analyst rec card)
- **Risk:** **БЛОКЕР — нужен подтверждённый кейс с разрешением на публикацию.** Если нет — то либо:
  - Aggregate-кейс: «Across our gambling/iGaming clients, average chargeback rate dropped X% in [period]» (без имени)
  - Анонимный кейс: «A top-10 European EMI cut...» (с разрешения PM/legal)
- **Detail для верстки:** новая секция `.case-card`, big number — Geist 700 64-72px

### 15. ★ Compliance bar (NEW)
- **Status:** NEW
- **Position:** bottom (перед FAQ)
- **Цель:** ответ на «можно ли вам доверять данные клиентов»; критично для PSP/EMI ICP
- **Структура:** 4-5 col grid, каждая ячейка: badge/icon + название стандарта + 1-2 sentence объяснение «что это значит»
- **Контент:**
  | Badge | Standard | Explanation (≤20 words) |
  |-------|----------|--------------------------|
  | 🔒 | PCI DSS Level 1 | Highest level of payment card data security certification, audited annually. |
  | 🇪🇺 | GDPR | Full compliance with EU data protection: data residency options, DPA available. |
  | 🛡️ | PSD2 / SCA | Strong Customer Authentication ready, supports 3DS 2.x flows out of the box. |
  | 📋 | ISO 27001 | Information security management certified. Annual external audits. |
  | 🔐 | SOC 2 Type II | Operational controls audited and verified by third party. *(если есть)* |
- **Pattern source:** **Ravelin** — у них единственных детальный compliance bar с описаниями (4 cards: PCI 3DS, PCI-DSS, ISO 27001:2022, Visa Global Registry). Это правильный паттерн — не голые лого.
- **Risk:** **БЛОКЕР — нужно подтверждение каждого сертификата.** Не публикуем что не имеем (legal risk).
- **Detail для верстки:** новая секция `.compliance`, grid-template-columns: repeat(5, 1fr); каждая карточка с padding 24-32px

### 16. ★ FAQ (NEW)
- **Status:** NEW (наше осознанное решение, не индустриальная норма)
- **Position:** bottom (перед CTA)
- **Цель:** снять типовые B2B-возражения до запроса демо; SEO bonus через FAQPage schema
- **Структура:** accordion 6-8 вопросов, шевроны раскрытия. Section header H2 + правая колонка с подзаголовком (как наш `.sec-hdr`)
- **Контент:** 8 вопросов из `projects/2026-05-07_homepage-counter-wireframe/03_faq-content.md` (предыдущая задача)
- **Pattern source:** **0/5 конкурентов** делают FAQ на homepage. Это наше отличие. Решение — оставить, потому что:
  - Мы меньший player → больше типовых вопросов «кто вы / можно ли доверять»
  - SEO benefit через FAQPage schema
  - Снижает нагрузку на sales до квалификации лида
- **Risk:** PM может спросить «зачем, если ни у кого нет?» — ответ выше.
- **Detail для верстки:** `<details><summary>` для нативной a11y + JSON-LD FAQPage в `<head>`

### 17. CTA block
- **Status:** KEEP
- **Position:** bottom
- **Цель:** финальный призыв
- **Структура:** existing `.cta-sec` — animated dots fon, centered контент
- **Контент:** existing («Stop fraud. Protect revenue. Launch in 3 days.»)
- **Pattern source:** 5/5 конкурентов
- **Изменения:** none. Опционально — рассмотреть Forter-discipline (один доминирующий CTA вместо 2). Решение: оставить 2 CTA, мы меньший игрок и нужен softer second path.

### 18. Footer
- **Status:** KEEP
- **Position:** bottom
- **Структура:** existing
- **Изменения:** none

---

## Блокеры (что нужно от Дмитрия / PM до начала верстки)

| Блок | Нужно | Если нет |
|------|-------|----------|
| 03. Logo proof bar | 6-12 customer logos с permission | Вариант A: текстовая («Trusted by [N]+ PSPs across [M] countries»). Вариант B: integration logos (Visa/Mastercard) с дисклеймером. |
| 06. Customer cite в feature row | 1 customer quote + hard number + permission | Aggregate stat: «Across our clients, average chargeback dropped X%» |
| 14. Customer story card | 1 hero customer case с metrics + permission | Aggregate-кейс или анонимный кейс с одобрения legal |
| 15. Compliance bar | Список реально подтверждённых стандартов | Удалить блок целиком. Не показывать недостоверное. |
| 16. FAQ | Контент из предыдущей задачи + проверка ответов с PM по 8 пунктам | Удалить блок (это наше решение, не норма). |

**До получения этих 5 inputs вёрстка не стартует** — иначе будут placeholder'ы, которые попадут в прод.

---

## Адаптация под breakpoints (по CLAUDE.md)

| Block | ≥1281px | 768-1280 | <768 |
|-------|---------|----------|------|
| 02 Hero | split | split | stacked |
| 03 Logo bar | 6-col single row | 4-col single row | 3-col, 2 rows |
| 04 Lifecycle tabs | tabs + content | tabs + content | accordion (стек) |
| 05 Stats | 4-col | 4-col | 2x2 |
| 06-08 Feature rows | split + reverse | split | stacked, no reverse |
| 11 Industries | 3-col × 2 row | 2-col × 3 row | 1-col × 6 row |
| 13 2-col cards | 2-col | 2-col | stacked |
| 14 Customer story | 60/40 split | 60/40 split | stacked |
| 15 Compliance | 5-col | 3-col, 2 row (5+empty) | 2-col, 3 row |
| 16 FAQ | full-width accordion | full-width | full-width |

---

## Что показать PM

1. Открой этот документ
2. Покажи `01_pattern-matrix.md` — пусть увидит, что 5/5 конкурентов делают customer logos, а мы нет; 3/5 делают customer-cite, а мы нет
3. Согласуй блокеры (logos, cite, case, compliance, FAQ-контент)
4. После согласования — заводим Task на верстку, workflow #1 (New Page) с цепочкой: Content Creator → SEO → Frontend Developer → UI Designer + Brand Guardian → Accessibility Auditor → Code Reviewer → Evidence Collector

---

## Дальнейшие шаги после ОК от PM

1. Sprint 0 — собрать blockers (logos, customer permissions, compliance certs verify)
2. Sprint 1 — Frontend Developer строит новую главную по этому spec, Content Creator пишет копий
3. Sprint 2 — UI Designer + Brand Guardian валидируют
4. Sprint 3 — Accessibility audit + Code review + Evidence (screenshots, оба темы, 5 breakpoints)
5. Deploy ручным триггером после полного прохода
