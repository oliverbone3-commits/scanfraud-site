# Animated Product Blocks — Workflow

Воркфлоу для серии анимированных блоков-мокапов (≈10 шт.), которые перерисовывают
реальный UI продукта в дизайн-языке сайта и «оживляют» его. Каждый блок = один
feature-row с переключателем версий визуала (v1 / v2 / v3 …).

## Файлы

```
projects/2026-06-11_real-product-mockups/
├── blocks-explorer.html        ← ГЛАВНЫЙ. Сайдбар-навигация + длинный скролл блоков.
├── _template-block.html        ← Copy-paste скелет нового блока (+ пункт сайдбара).
├── _parked-decision-blocks.html← Склад готовых анимаций под другие секции
│                                  (audit-card / decision-stream) — переиспользовать.
├── section-01-rule-engine.html ← Прототип блока 01 (история итераций). Канон — explorer.
└── BLOCKS-WORKFLOW.md          ← этот файл.
```

Источник истины по реальному UI: `hero-rules.html` + `rule-builder.css`,
`hero-monitor.html`. Контент-копия — из `CONTENT-PLAN.md`. Дизайн-правила — `CLAUDE.md`.

## Конвенции

- **Стили** — только CSS-переменные из `shared.css`. Новые стили — в `<style>` explorer'а,
  не в `shared.css`. Обе темы (dark + light) обязательны.
- **Структура блока** — строго по `_template-block.html`: `.ex-block#block-NN` →
  `.ex-block-head` (номер + имя + `.ver-switch`) → `.ex-block-note` → `.fdr` (`.fc` + `.fi`).
- **Окно визуала** — компактное (≈300px), края растворяются через `mask-image`
  (экономим вертикаль). `aria-hidden="true"` на декоративном визуале.
- **Анимации — хуки по классам** (движок explorer'а подхватывает сам):
  - `.rbx-track.is-auto` — бесшовный бесконечный автоскролл (движок клонирует контент 1 раз
    и гоняет линейным loop, длительность ∝ высоте), пауза по `:hover` и вне вьюпорта.
  - `.rbx-track.is-build` + `.tw[data-text]` + `.tw-cur` — печать значений с курсором.
  - `.verdict-card` + `.verdict-word` / `.verdict-score` — цикл цвета вердикта.
- **Производительность** — `IntersectionObserver` ставит `.in-view` только на видимый блок;
  CSS-анимации вне вьюпорта на паузе, JS-циклы (печать/вердикт) простаивают.
- **Доступность** — всё движение под `@media (prefers-reduced-motion: reduce)`
  (скролл off, текст показан целиком, мигание off).
- **Выбранная версия** — помечаем: класс `.chosen` на кнопке (зелёная точка) + чип
  `✓ выбран: vN` рядом с переключателем, и делаем её `active` по умолчанию (пане + кнопке + note).

## Решения по блокам

- **01 Rule Engine → выбрана v2** (печать значений / «сборка правила»). 2026-06-11.
- **02 Monitoring** — готов (v1 скролл / v2 live-стрим / v3 review). Версия не выбрана.
- **03 Case Management (Crosscheck)** — готов, переиспользует mon-таблицу + cc- (шапка, стат-карточки, match-чипы);
  v1 скролл / v2 count-up (`.cc-counts`+`.cc-count[data-to]`) / v3 подсветка. Версия не выбрана.
- **04 Fast Go-To-Market** — готов, таймлайн (`.gtm[data-anim=progress|focus|pulse]`, хук startGtm);
  v1 прогресс / v2 бегущий фокус / v3 пульс. На переходе — «поп» карточки (scale-бамп `.pop` + stamp галочки). Версия не выбрана.
- **Решение ПМ:** блок **02 = Payment Routing** (копирайт «Frictionless Traffic Flow»), но визуал справа —
  таблица мониторинга (mon-), НЕ дерево маршрутизации. Шапка визуала остаётся «Monitoring · all events».
- **05–13** — по одному представителю на страницу: 05 Velocity & AML (Fintech), 06–07 Payment providers,
  08–10 Products, 11 Payment Cascading (R&C), 12 Deposit & Withdrawal (Trading), 13 Root Cause Analysis (TM).
- **14 Evidence Preparation (Dispute Resolution)** — готов 2026-06-11, хук `ep-` (`.ep-body[data-ep=build|stages|calm]`, startEp);
  v1 сборка пакета (лоадер→галочка + прогресс-бар + «Submitted to acquiring bank») / v2 степпер 4 этапов кейса
  (Create → Match & compile → Prepare → Submit, по CONTENT-PLAN §5) / v3 calm. Версия не выбрана.
  Высота v2 выровнена через `min-height:311px` на `.ep-body[data-ep="stages"]` (анти-прыжок).
- **15 Expert Team (Risk Management)** — готов 2026-06-11. v1 автоскролл журнала действий команды
  (переиспользует generic `makeInfinite`, без нового JS) / v2 live-лента (хук `startXt`: `.xt-track`, XT_POOL + prepend
  fresh-строк каждые 1.9s, кап N+2) / v3 calm-журнал (4 строки) + `.xt-sum` итог недели. Версия не выбрана.
  Селекторы разведены: v1 = `.rbx-track.is-auto.xt-feed`, v2 = `.xt-track` — overlap нулевой.
- **16 Bonus Abuse (Gambling)** — готов 2026-06-11, хук `gp-` (`.gp-body[data-gp=build|cluster|calm]`, startGp).
  Визуал = Player Risk Profile с прод-страницы gambling.html (Player 44821, score 87/100, данные 1:1).
  v1 сборка профиля + count-up score 0→87 (rAF ease-out) / v2 кластер связанных аккаунтов (tree-elbow коннекторы,
  same device/IP/card, «Payouts frozen») / v3 calm. Версия не выбрана. Иконка алерта — inline SVG triangle-alert
  12px (⚠-эмодзи мелкий и грязный — решение Дмитрия). Анти-прыжок: `min-height:292px` на cluster-body.
- **17 On-Ramp & KYC (Crypto)** — готов 2026-06-11, хук `oc-` (`.oc-body[data-oc=score|cycle|calm]`, startOc).
  Визуал = On-Ramp Transaction card с crypto.html (0x7f3...c8a2, €4,850, SEPA, 4 сигнала, 54/100, Enhanced KYC).
  v1 скоринг по сигналам (каждый сдвигает score: +18/+14/+30/−8, твины не перекрываются) / v2 цикл вердикта
  Medium → High → Low (перекраска бейджа+score+действия) / v3 calm. Версия не выбрана.
  Переиспользует футер gp-foot/gp-score/gp-act из блока 16 — без утечек (хуки разведены по .gp-body/.oc-body).
- **18 Order Fraud (Ecommerce)** — готов 2026-06-11, хук `oq-` (`[data-oq=live|triage|calm]`, startOq).
  Визуал = Order Review Queue с ecommerce.html (grid-таблица, заказы #10482–#10486 1:1, риски 18/84/22/71/15).
  v1 live-очередь (OQ_POOL, prepend 1.9s, seed 7 строк) / v2 триаж (score → штамп действия, oqStamp) / v3 calm.
  Версия не выбрана. ⚠ Зависимости при прод-переносе: (а) keyframe `xtIn` из блока 15 переиспользован
  для fresh-строк; (б) на ecommerce.html уже есть СВОИ классы .oq-* с другими определениями — при интеграции
  переименовать или скоупить.
- **19 Payment Fraud (Gambling)** — готов 2026-06-11, хук `dp-` (startDp на `[data-dp]`).
  v1 автоскролл ленты депозитов (generic makeInfinite, .dp-feed) / v2 card-testing burst (1 обычный + 3 micro
  €1.00-ряда с .hit-вспышкой → баннер «Card testing blocked · BIN 424242») / v3 calm. Версия не выбрана.
  Анти-прыжок: v2 ужат до 4 рядов, высоты v1/v2/v3 в пределах min-height fdr.
- **20 Transaction Pattern (Crypto)** — готов 2026-06-11, хук `cn-` (`.cn-body[data-cn=build|flow|calm]`, startCn).
  Визуал = wallet-chain с crypto.html (source → relay → split → platform, баннер structuring), классы переименованы
  wc-* → cn-* чтобы избежать клэша при прод-переносе. v1 трассировка (.cn-step reveal) / v2 поток (стрелки .lit
  циклично + пульс баннера) / v3 calm. Версия не выбрана.
- **21 Account Takeover (Fintech)** — готов 2026-06-11, хук `at-` (`.at-body[data-at=seq|wave|calm]`, startAt).
  Визуал = ATO Alert с fintech.html (USR-7812 Maria K., таймлайн 14:22–14:25, 94%, Account frozen, данные 1:1).
  v1 секвенция (события по очереди, вероятность 22→47→71→94 твином) / v2 волна-перечитывание / v3 calm.
  Переиспользует gp-foot/gp-score/gp-act; ⚠-иконки — SVG triangle-alert. Версия не выбрана.
- **22–31 (батч 2026-06-11, вся очередь добита, в explorer 31 блок):** один новый generic-хук `startGen`
  (`[data-gen=reveal|wave|calm]`, классы `.g-step`/`.g-final`/`.g-count`/`.gen--anim`) питает 23–31;
  22 реюзает at-. Реюз CSS: cs-row (23/26/30/31), gp-row (25/28), xt-row (27), ep-sub (+`.warn`),
  dp-st (+`.info`/`.off`). Новые мини-наборы: ec- (chargeback-таблица), pr- (роутинг-чипы + `.pr-pick`),
  pa- (provider-таблица), iw- (чипы индустрий), модификаторы `.g-final--pad`/`.xt-list--flush`.
  - **22 Account Takeover (Trading)** — at-, ACC-3127, 31→68→95%, Withdrawal paused.
  - **23 Case Management (DR)** — кейсы #4818–4821 1:1, финал пороги Visa 0.61% / MC 0.43%.
  - **24 Chargeback Mgmt (Ecommerce)** — cb-trend 1:1 (0.8→0.4%), win rate 76% count-up.
  - **25 Data Enrichment (TM)** — TX-104832, поля BIN/bank/profile/FX, финал «15+ data points».
  - **26 For Review Pipeline (TM)** — очередь ревью, финал «Crosscheck → 3 linked accounts».
  - **27 Notifications (TM)** — лента bell/Slack/webhook. ⚠ На проде это roadmap (Late April / May) —
    подано как готовое, сверить с ПМ перед прод-переносом.
  - **28 Payment Routing (R&C)** — параметры-чипы + выбор провайдера. Данные синхронизированы с 29:
    лучший = Provider A (1.4% / 94.2%), роутим на A.
  - **29 Provider Analytics (R&C)** — prov-table 1:1 (A 94.2 / B 91.8 / C 87.1 warn / D 89.4), финал
    amber-алерт «Provider C degrading».
  - **30 How It Works (Industries)** — селектор вертикалей + пакеты правил, финал «Live in days».
  - **31 Rule Management (RM)** — портфель правил Live/Backtest/Retired, финал «FP −18% за квартал».
  Версии нигде не выбраны. **Очередь пуста — все пункты сайдбара готовы.**

**Грабли:** `.fdr .fi .rbx-frame { max-width:460px }` перебивает `max-width` на `.rbx-frame.NN-frame` —
для своей ширины фрейма пиши селектор `.fdr .fi .rbx-frame.NN-frame` (исправлено для ep-; старые *-frame не трогали).

**Грабли:** футер-счётчики mon-таблицы читаем через `.mon-foot [data-total]`/`[data-counter]`,
а НЕ через общий `[data-total]` — иначе клэш с override-атрибутом `data-total` на самом mon-track.

## Как добавить блок

1. Скопировать `<section>` из `_template-block.html` в `<main>` explorer'а.
2. Добавить пункт в `.ex-nav` (группа «Готово»): `<a … data-target="block-NN">`.
3. Заполнить `.fc` копией из `CONTENT-PLAN.md` (eyebrow, heading, body, 3 фичи).
4. Нарисовать правый визуал в каждой `.ver-pane` по реальному UI продукта
   (референс — скрин/демо), повесить нужный хук-класс анимации.
5. Прописать `data-note` на кнопках `v1/v2/v3` (текст подписи под блоком).
6. Проверить по чек-листу ниже.

### Новый тип анимации
Если визуал не покрывается тремя хуками — добавь свой класс-хук и обработай его
в `activatePane()` движка (одна строка `pane.querySelectorAll('.my-hook').forEach(startMine)`),
функцию `startMine` сделай идемпотентной (`if(el.dataset.started) return`) и
гейти на `block.classList.contains('in-view')`.

## Чек-лист перед «готово»

- [ ] Обе темы (dark + light) — контраст и цвета корректны.
- [ ] 5 брейкпоинтов: 1280 / 900 (сайдбар → верх) / 768 (fdr → стек) / 600 / 480.
- [ ] `prefers-reduced-motion` — статичное читаемое состояние, без движения.
- [ ] Пауза анимации по `:hover` (для автоскролла) и вне вьюпорта.
- [ ] Скролл-спай: активный пункт сайдбара совпадает с блоком на экране.
- [ ] Переключатель v1/v2/v3 меняет визуал и подпись, без «прыжков» высоты.
- [ ] Только токены `shared.css`, никаких хардкод-цветов (кроме явных вердиктных).
- [ ] Code Reviewer (`agents/engineering-code-reviewer.md`) — финальный гейт.

## Агенты (по WORKFLOW.md, workflow #6 «New Section / Component», lab-first)

```
UI Designer        → визуал/консистентность токенов
   ↓
Frontend Developer → разметка/CSS/JS блока по шаблону
   ↓ (Emil Kowalski Craft — тайминги/easing, опц.)
Code Reviewer      → финальный гейт
```

Прод-интеграция (перенос выбранной версии блока в `index.html` / страницы продукта) —
отдельным шагом после утверждения версий в explorer'е.
