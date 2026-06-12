# Отчёт: trading.html + gambling.html — прод-интеграция анимированных блоков

**Дата:** 2026-06-12 · **Агент:** Frontend Developer · **Источник:** blocks-explorer.html (блоки 12, 22, 16, 19)

## trading.html

**Что оставил прерванный прогон (аудит):**
- CSS перенесён почти полностью: база rbx- (frame/head/badge/viewport/track + rbxLoop/monPulse), блок 12 (rv- + tm-чипы), блок 22 (at- + переиспользуемый футер gp-foot/gp-score/gp-act), обе темы, reduced-motion блок. Ширины адаптированы по правилу 4 (`.feature-row-visual .rbx-frame.rv-frame { max-width:482px }`, `.at-frame { max-width:400px }`). CSS-пауза `.feature-row:not(.in-view) .rbx-track.is-auto` на месте. JetBrains Mono в `<link>` уже был.
- Разметка блока 12 (rv-frame, `data-rv="flow"`) вставлена в секцию 01.
- Секция 02 осталась со СТАРЫМ статичным `.ato-card` (с ⚠-эмодзи), при этом его CSS уже был удалён — визуал был полностью разломан (нестилизованный div).
- JS-модуля не было вообще — блок 12 рендерился пустым (rv-track сидируется JS).

**Что исправил/добавил:**
- Заменил `.ato-card` на разметку блока 22 v1 из explorer (at-frame, ACC-3127, события 11:02/11:04/11:06, data-p 31/68/95, SVG triangle-alert, `aria-hidden="true"`, без `<button>`). Остатков ac-/ato-CSS и эмодзи — 0.
- Добавил JS-модуль «Animated product mockups» в конец основного `<script>`: makeInfinite, startRv (flow: сидирование 12 строк, эскалация fraud-status по TM_LEVELS, view status For Review → Viewed, flash), startAt (seq: события + твин вероятности 31→68→95, «Withdrawal paused»). Гейтинг — свой IntersectionObserver threshold 0.3 на `.feature-row` с `.rbx-frame`, `.in-view` ставится/снимается, фолбэк без IO. Стартеры идемпотентны (`dataset.started`/`dataset.inf`), REDUCE → полное финальное статичное состояние (95%, acted, rv-список без скролла).
- Добавил мобильное правило (правило 9): `@media (max-width:480px)` — колонки rv-грида `64px 60px minmax(0,1fr) 84px`, паддинги 12px (на ~300px фрейме фиксированные 92+72+102 переполняли).

## gambling.html (с нуля)

- `<link>` Google Fonts: добавлен `&family=JetBrains+Mono:wght@400;500;700`.
- **Блок 16 v1 (Bonus Abuse)**: статичный `.risk-profile` («Player Risk Profile», Player 44821, 87/100 — данные 1:1) заменён на анимированный gp-frame: сборка профиля (`.gp-row` reveal по очереди) + count-up score 0→87 (rAF, ease-out cubic) + проявление футера «Manual review». Алерты — inline SVG triangle-alert 12px, не ⚠-эмодзи.
- **Блок 19 v2 (Payment Fraud)**: статичный `.dep-feed` заменён на dp-frame card-testing burst: 1 обычный ряд €120 + 3 micro-ряда €1.00 (Visa 424242) с `.hit`-вспышкой → баннер «Card testing blocked · BIN 424242». Анти-прыжок v2 соблюдён переносом 1:1 (4 ряда + баннер; на проде версии не переключаются — min-height не требуется).
- CSS: старые `.risk-profile/.rp-*` и `.dep-*` наборы удалены целиком (grep: вне визуалов нигде не использовались, 0 остатков). Вместо них — база rbx- (без viewport/track — автоскролла на странице нет) + gp- + dp- наборы из explorer, обе темы (`[data-theme="dark"]`-варианты badge.hot, gp-warn, gp-act, dp-st, dp-banner), `@media (prefers-reduced-motion: reduce)` (всё проявлено, hit/fresh без анимации). Keyframe `xtIn` + `.dp-row.fresh` перенесены по правилу 11 плана (прим.: выбранная v2-burst в рантайме их не вызывает — это конвенция dp-live-рядов, оставлено по плану).
- JS-модуль: startGp (build) + startDp (burst), портированы из explorer c заменой `closest('.ex-block')` → гейт `live()` по `.feature-row.in-view`; собственный IO threshold 0.3, идемпотентные стартеры, REDUCE → финальные состояния (score 87, баннер показан), фолбэк без IO.

## Маппинг заголовков

| Страница | .feature-heading | Блок / версия | Статус |
|---|---|---|---|
| trading | Flag suspicious fund movements before they complete. | 12 Deposit & Withdrawal **v3** (flow) | был вставлен, оживлён JS |
| trading | Stop unauthorised withdrawals from compromised accounts. | 22 ATO Trading **v1** (seq) | разметка заменена + JS |
| gambling | Detect bonus abuse and linked accounts before payouts. | 16 Bonus Abuse **v1** (build) | с нуля |
| gambling | Monitor deposits and reduce chargeback exposure. | 19 Payment Fraud **v2** (burst) | с нуля |

Пропущенных блоков нет — все 4 заголовка совпали с `.fh` explorer (точки в конце заголовков — особенность прод-страниц, копирайт не тронут, заменялось только содержимое `.feature-row-visual`).

## Коллизии классов

- gambling: старые `rp-`/`dep-` против новых `gp-`/`dp-` — пересечений нет, старые наборы удалены полностью. Переименований не потребовалось.
- trading: `tm-`чипы rv-таблицы и `gp-`футер at-карточки — без конфликтов с чем-либо на странице.

## Self-check (правило 12)

- `node --check` на извлечённом `<script>`: trading OK, gambling OK.
- grep `ver-pane|ver-switch|ex-block`: 0 и 0; ⚠-эмодзи: 0 и 0; остатков старых классов: 0.
- Обе темы: все цветные элементы имеют dark+light варианты (badge, warn, act, st, banner, light-фон фрейма #fafbfd).
- A11y: оба фрейма на каждой странице `aria-hidden="true"`, внутри только span/div (0 `<button>` в мокапах).
- prefers-reduced-motion: CSS-блоки + JS REDUCE-ветки → статичные финальные состояния (rv-список 12 строк без скролла/высота auto, 95 %, score 87, баннер виден).
- Nav/footer/копирайт страниц не тронуты; правки только в `<style>`, `.feature-row-visual` и конце `<script>`.
- Брейкпоинты: ≤1280/900/768 наследуют существующие правила страниц (feature-row → стек на 768); 480 — добавлено сжатие rv-грида (trading); gp-/dp-ряды — flex, на 300px не переполняются.

**Рекомендация:** финальный гейт Code Reviewer + визуальная проверка на dev-сервере (`bash serve.sh`, hover-пауза скролла rv-таблицы, светлая тема).
