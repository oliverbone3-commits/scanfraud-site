# Прод-интеграция анимированных блоков 05–31 — план и конвенции

**Дата:** 2026-06-12 · **Источник:** `projects/2026-06-11_real-product-mockups/blocks-explorer.html` (канон)
**Референс-имплементация:** index.html (блоки 01–04 уже перенесены — изучить как образец: CSS-блок «animated product mockups», JS-модуль «Animated product mockups» внизу страницы).

## Маппинг: блок (выбранная версия) → страница

| Страница | Блоки (версии) |
|----------|----------------|
| transaction-monitoring.html | 08 TM (v2), 13 Root Cause (v1), 25 Data Enrichment (v1), 26 For Review (v1), 27 Notifications (v1 — решение Дмитрия: переносить как есть) |
| routing-cascading.html | 09 R&C rules (v2), 11 Payment Cascading (v2), 28 Payment Routing RC (v1), 29 Provider Analytics (v1) |
| dispute-resolution.html | 10 Dispute cases (v3), 14 Evidence Preparation (v1), 23 Case Mgmt DR (v1) |
| risk-management.html | 15 Expert Team (v2), 31 Rule Management (v1) |
| fintech.html | 05 Velocity & AML (v2), 21 ATO Fintech (v1) |
| payment-providers.html | 06 Merchant Fraud / Blacklist (v2), 07 Routing per merchant (v3) |
| trading.html | 12 Deposit & Withdrawal (v3), 22 ATO Trading (v1) |
| gambling.html | 16 Bonus Abuse (v1), 19 Payment Fraud (v2) |
| crypto.html | 17 On-Ramp & KYC (v1), 20 Transaction Pattern (v1) |
| ecommerce.html | 18 Order Fraud (v2), 24 Chargeback Mgmt (v1) — ⚠ клэш `.oq-*` |
| industries.html | 30 How It Works (v1) |

## Правила переноса (выработаны на index.html, обязательны)

1. **Только выбранная пана.** Из explorer брать `<div class="ver-pane active">` нужной версии (сверить с чипом «✓ выбран: vN» / сводкой в BLOCKS-WORKFLOW.md). `.ver-pane`-обёртку, `.ver-switch`, кнопки — НЕ переносить.
2. **Копирайт страницы НЕ трогать.** Заменяется только содержимое `.feature-row-visual` соответствующей секции. Секцию находить по заголовку `.feature-heading`, совпадающему с `.fh` блока в explorer. Если совпадающей секции на странице нет — блок НЕ переносить, доложить в отчёте. Новые секции не создавать.
3. **CSS** — в inline `<style>` страницы, только токены shared.css. shared.css не трогать. Обе темы обязательны (переносить и `[data-theme="dark"]`/`[data-theme="light"]` варианты). Хардкод-цвета допустимы только вердиктные/бейджевые (green/amber/red), синий — только `var(--accent)`.
4. **Ширины фреймов:** контейнер на страницах — `.feature-row-visual`, не `.fdr .fi`. Правило: `.feature-row-visual .rbx-frame { max-width:460px }`. Если у блока в explorer есть селектор `.fdr .fi .rbx-frame.NN-frame { max-width:NNNpx }` (ep-, xt-, gp-, oc-, oq-, dp-, cn-, at-) — переносить как `.feature-row-visual .rbx-frame.NN-frame { ... }` с тем же значением. Классы `wide`/`case`/`gtm-frame` НЕ переносить (эффективная ширина в explorer всё равно 460).
5. **JS** — отдельный IIFE-модуль в конец основного `<script>` страницы. Гейтинг: вместо `.ex-block` — `.feature-row`; свой IntersectionObserver (threshold 0.3) ставит/снимает `.in-view` на `.feature-row`, содержащих `.rbx-frame`. CSS-пауза: `.feature-row:not(.in-view) .rbx-track.is-auto { animation-play-state:paused }`. Переносить ТОЛЬКО функции, нужные блокам страницы (не весь движок). Все стартеры идемпотентны (`dataset.started`-гарды). `closest('.ex-block')` → `closest('.feature-row')`.
6. **prefers-reduced-motion:** полное статичное финальное состояние (значения проставлены, счётчики на финальных числах, таймлайны в done/live), CSS-блок `@media (prefers-reduced-motion: reduce)` для всех новых анимаций.
7. **A11y:** фрейм-мокап `aria-hidden="true"`; внутри только `span`/`div`, НЕ `button` (заменять при переносе).
8. **Шрифт:** в `<link>` Google Fonts добавить `&family=JetBrains+Mono:wght@400;500;700` (как в index.html).
9. **Мобильные:** если переносится mon-таблица — добавить `@media (max-width:480px)` правило колонок `60px 72px 56px 46px minmax(0,1fr)` (см. index.html). Для других гридов проверить, что при ширине фрейма ~300px нет переполнения.
10. **Старые визуалы:** статичные мокапы внутри заменяемых `.feature-row-visual` удалить вместе с их CSS, ЕСЛИ CSS не используется другими секциями страницы (проверить grep'ом по странице). Атрибуты-маркеры лаба (`data-anim`, классы панелей `is-stream`) не переносить, если JS их не читает.
11. **Грабли из BLOCKS-WORKFLOW.md:** футер-счётчики mon-таблицы читать через `.mon-foot [data-total]`/`[data-counter]` (не общий `[data-total]`); keyframe `xtIn` нужен блокам 15/18/19; на ecommerce.html УЖЕ есть свои классы `.oq-*` с другими определениями — у переносимого блока 18 переименовать классы (префикс `oqx-` и в CSS, и в HTML, и в JS) либо строго заскоупить; ⚠-эмодзи запрещены — только inline SVG triangle-alert.
12. **Проверка перед сдачей:** извлечь итоговый `<script>` и прогнать `node --check`; grep на отсутствие `ver-pane|ver-switch|ex-block` в странице; убедиться, что nav/footer не тронуты.

## Что НЕ входит в задачу
- products.html, industries-хаб карточки, overview, security, resources — без изменений (кроме industries.html блок 30).
- Деплой — отдельным шагом, строго ручной триггер (решение Дмитрия).
