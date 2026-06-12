# Прод-интеграция анимированных блоков — index.html

**Дата:** 2026-06-12 · **Воркфлоу:** Design Iteration (#3), lab-first → прод
**Источник:** `projects/2026-06-11_real-product-mockups/blocks-explorer.html` (выбранные версии по BLOCKS-WORKFLOW.md)

## Что сделано

Четыре статичных мокапа (`.fi-mockup` + `mk-*`) в секции PRODUCTS заменены на анимированные блоки из explorer:

| Row | Блок | Версия | Анимация |
|-----|------|--------|----------|
| 01 | Rule Engine | v2 | Сборка правила — печать значений с курсором, окно следует за активной строкой |
| 02 | Payment Routing | v2 | Live-лента мониторинга — события притекают сверху, счётчик Shown тикает |
| 03 | Case Management | v2 | Crosscheck — счётчики Approved/Declined и match-чипы считаются вверх |
| 04 | Fast Go-To-Market | v1 | Прогресс онбординга — шаги закрываются по очереди, Day 3 уходит в live, цикл |

### Изменения в index.html
- CSS: удалён весь `.fi-mockup`/`mk-*` блок (~190 строк), добавлены `rbx-`/`mon-`/`cc-`/`gtm-` стили (только токены shared.css; обе темы; `@media 480px` для колонок таблицы; reduced-motion блок).
- HTML: контент `.fc` без изменений (копия 1:1 из CONTENT-PLAN), заменены только визуалы `.fi`. Все мокапы `aria-hidden="true"`, внутри только `span`/`div` — без фокусируемых элементов.
- JS: новый IIFE-модуль (makeInfinite / startBuild / startMon / startCount / startGtm), IntersectionObserver ставит `.in-view` на `.fdr` (threshold 0.3) — анимации и таймеры простаивают вне вьюпорта; все стартеры идемпотентны; `prefers-reduced-motion` даёт полное статичное состояние.
- Fonts: добавлен JetBrains Mono (паритет с explorer для mono-таблиц).
- shared.css не тронут.

## Проверки

- **Темы:** dark + light — скриншоты всех 4 рядов (shots/).
- **Брейкпоинты:** 1440 / 1280 / 900 / 768 / 600 / 480 / 360 — без горизонтального переполнения (360: overflow 0px, обе темы).
- **Reduced-motion:** значения напечатаны, gtm в финальном состоянии (done×3 + live), таблицы статичны, count-up на финальных числах (rm_row1.png + programmatic check).
- **JS:** `node --check` OK, ноль console/page errors во всех прогонах.
- **Code Reviewer:** PASS with notes. Исправлено по ревью: мобильные колонки mon-таблицы (≤480), `#1a56ff` → `var(--accent)` в `.mon-b-blue`, локальный keyframe курсора (`twCurBlink`), удалены мёртвые хуки из лаба (`wide`/`case`/`gtm-frame`/`rbx-card--split`/`is-stream`/`data-anim`).

## Замечания ревью вне скоупа задачи (pre-existing, в working tree до этой задачи)

1. Дубль «2-3 days» в карточке Why ScanFraud №2 (index.html ~1886) + несогласованный дефис/тире.
2. Мёртвое правило `.why-card.wide-col` после реструктуризации why-grid.
3. Изменения why-grid / st3-панелей не отражены в CONTENT-PLAN.md (правило 6 CLAUDE.md).

## Файлы
- `index.diff` — полный дифф index.html (включая pre-existing правки прошлых сессий)
- `shots/` — скриншоты обеих тем и брейкпоинтов, rm_row1.png — reduced-motion
