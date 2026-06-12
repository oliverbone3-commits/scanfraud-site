# Report — crypto.html + ecommerce.html (blocks 17/20/18/24)

Дата: 2026-06-12 · Агент: Frontend Developer · Источник: blocks-explorer.html (канон), референс index.html

## crypto.html

**Что успел прерванный прогон (аудит):**
- JetBrains Mono добавлен в Google Fonts `<link>` — OK.
- CSS блоков 17 (oc- + gp-foot/gp-score/gp-act из 16) и 20 (cn-) перенесён полностью: обе темы, `@media (prefers-reduced-motion: reduce)`, ширины фреймов адаптированы (`.feature-row-visual .rbx-frame { max-width:460px }`, `.oc-frame`/`.cn-frame` — 400px) — OK, правок не потребовалось.
- HTML блока 17 (v1, `data-oc="score"`) вставлен в feature-row 01 — OK, 1:1 с explorer.
- HTML блока 20 — НЕ вставлен: в feature-row 02 оставался старый статичный `.wallet-chain` (wc-*), при этом его CSS уже был удалён → визуал стоял без стилей. Старый ⚠-эмодзи был там же.
- JS-модуль — отсутствовал полностью (всё статично).

**Что сделал:**
- Заменил статичный wallet-chain на пану блока 20 v1 (`.rbx-frame.cn-frame`, `cn-body cn--build`, `data-cn="build"`, aria-hidden, inline SVG triangle-alert вместо ⚠).
- Добавил JS-модуль «Animated product mockups» в конец `<script>`: собственный IntersectionObserver (threshold 0.3, ставит/снимает `.in-view` на `.feature-row` с `.rbx-frame`), `startOc` (твин score по сигналам +18/+14/+30/−8 → 54, неперекрывающиеся твины 420ms при шаге 620ms) и `startCn` (трассировка `.cn-step` reveal). Стартеры идемпотентны (`dataset.started`), REDUCE → полное финальное состояние (score 54, все сигналы/шаги shown, acted). Fallback без IntersectionObserver — сразу in-view.
- Неиспользуемые режимы (cycle/flow) не переносил — на странице только score/build; REDUCE-ветка обслуживает любой другой `data-*` как calm.

| .feature-heading на странице | Блок / версия |
|---|---|
| «Score every fiat-to-crypto transaction before it clears.» | 17 On-Ramp & KYC — v1 (score) |
| «Detect layering and fund-splitting attempts.» | 20 Transaction Pattern — v1 (build) |

Коллизий wc-/cn- нет: страница своих cn-* не имела, все wc-*/wallet-chain удалены (grep = 0).

## ecommerce.html (с нуля)

**Что сделал:**
- JetBrains Mono добавлен в `<link>`.
- CSS: база rbx-frame/rbx-head (+ `.ok`-бейдж, обе темы), блок 18 с префиксом **oqx-** (переименование oq-→oqx- консистентно в CSS+HTML+JS из-за клэша со старыми `.oq-*` страницы), keyframe `oqStamp`, блок 24 (ec-таблица + `gen--anim`/`.g-step`), reduced-motion блок, `@media (max-width:480px)` для колонок oqx-грида (44/50/1fr/26/78, gap 6 — без переполнения при ~280px).
- Keyframe `xtIn` НЕ переносил — нужен только v1 (live, fresh-строки); выбранная v2 (triage) его не использует.
- HTML: статичный `.order-queue` → блок 18 v2 (`oqx-frame`, `data-oqx="triage"`, заказы #10482–#10486 и риски 18/84/22/71/15 — 1:1 со старым визуалом); статичный `.cb-trend` → блок 24 v1 (`ep-frame`, `data-gen="reveal"`, тренд 0.8→0.6→0.4%, win rate `g-count data-to="76"` — данные 1:1).
- Удалён весь CSS старых мокапов (`.order-queue`, `.oq-*`, `.cb-*`) — больше нигде на странице не использовался (grep = 0).
- JS-модуль: observer как на crypto + `startOqx` (score → штамп действия, 650ms/строка, stamp через 280ms, цикл 3.4s) + `startGen` (reveal-режим: ec-строки по 360ms, затем count-up 76% за 700ms ease-out, цикл 3.6s). REDUCE → scored/stamped/shown проставлены, счётчик 76.

| .feature-heading на странице | Блок / версия |
|---|---|
| «Score every order and route it to the right action automatically.» | 18 Order Fraud — v2 (triage), префикс oqx- |
| «Dispute chargebacks with complete evidence, automatically compiled.» | 24 Chargeback Mgmt — v1 (reveal) |

**Переименования/коллизии:** oq-frame→oqx-frame, oq-cols→oqx-cols, oq-col-head→oqx-col-head, oq-rows→oqx-rows, oq--triage→oqx--triage, oq-row→oqx-row, oq-id/amt/cty/risk/act→oqx-*, data-oq→data-oqx, startOq→startOqx. Старые `.oq-*` определения удалены вместе с визуалом; пересечений oqx-* ↔ остатки oq-* = 0 (grep подтвердил).

## Пропуски
Нет — оба блока на каждой странице нашли секции по `.feature-heading`. Копирайт страниц не тронут (байт-в-байт), nav/footer не тронуты.

## Self-check (rule 12)
- `node --check` извлечённых `<script>` — OK обе страницы.
- grep `ver-pane|ver-switch|ex-block` — 0 на обеих.
- grep `wallet-chain|wc-` (crypto) — 0; grep старых `oq-`/`cb-`/`order-queue` (ecommerce) — 0.
- `<button>` внутри мокапов — нет (только span/div/svg, фреймы aria-hidden).
- Обе темы: все новые цвета имеют `[data-theme="dark"]`/light-варианты, синий — только `var(--accent)`, хардкод только вердиктные green/amber/red.
- prefers-reduced-motion: CSS-блоки + JS-финальные состояния на обеих страницах.
- Tag-balance: структура идентична доправочной (1:1 замены), pre-existing особенности шелла не тронуты.
- Браузерный прогон/скриншоты не выполнялись (нет браузера в окружении) — рекомендую Evidence Collector / Code Reviewer гейт.
