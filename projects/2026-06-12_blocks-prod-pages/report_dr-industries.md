# Отчёт: dispute-resolution.html + industries.html (блоки 10/14/23 + 30)

**Дата:** 2026-06-12 · **Агент:** Frontend Developer · Источник: blocks-explorer.html, паттерн: index.html / transaction-monitoring.html

## dispute-resolution.html

### Что успел прерванный прогон (аудит)
- ✔ JetBrains Mono добавлен в font-link.
- ✔ CSS блоков 14 и 23 перенесён полностью: rbx-база + light-тема, ep-* (build), gen/g-step/g-final, cs-*, dp-st (ok/review/info с dark-вариантами), `@media (prefers-reduced-motion)`, `.feature-row-visual .rbx-frame.ep-frame{max-width:400px}` — правок не потребовалось.
- ✔ Row 01 «Every chargeback type, covered»: визуал заменён на блок 14 v1 (выбранная версия, разметка 1:1 с explorer, aria-hidden, без button).
- ✘ Row 02 «All disputes in one place»: старый статичный мокап (case-wrap/case-item) ОСТАВЛЕН, при этом его CSS уже удалён → список кейсов рендерился без стилей (сломанное состояние).
- ✘ JS-модуль отсутствовал полностью — блок 14 стоял статично (прогресс 0, галочки серые, ep-after скрыт).
- (Попутно в diff: .other-card переведены с `<a>` на `div + a.other-link` — соответствует конвенции spark-border, не трогал.)

### Что доделано
1. Row 02: статичный case-список + инлайн-карточки счётчиков заменены на блок 23 v1 (cs-row кейсы #4821–4818, финал «Thresholds below limits · Visa 0.61% / MC 0.43%»). Осиротевшие классы ушли вместе с разметкой — orphan-grep чистый.
2. Добавлен JS-модуль «Animated product mockups» в конец `<script>`: `startEp` (build: лоадер→галочка, прогресс-бар, «Submitted to acquiring bank») + `startGen` (reveal). Гейтинг — собственный IntersectionObserver (threshold 0.3) ставит/снимает `.in-view` на `.feature-row` c `.rbx-frame`; `closest('.feature-row')`; стартеры идемпотентны (`dataset.started`); fallback без IO — статичный финал; REDUCE → полное финальное состояние.
3. CSS-правило паузы `.rbx-track.is-auto` НЕ добавлено — на странице нет ни одного `.rbx-track` (блоки 14/23 без автоскролла), как и на готовых transaction-monitoring/routing-cascading.

### Маппинг
| Секция (.feature-heading) | Блок / версия | Статус |
|---|---|---|
| Every chargeback type, covered (01 — Evidence Preparation) | 14 Evidence Preparation **v1** | был частично, доведён (JS) |
| All disputes in one place (02 — Case Management) | 23 Case Mgmt DR **v1** | сделан с нуля |
| — | 10 Dispute cases v3 | **SKIP** (см. ниже) |

### Пропущено: блок 10 (Dispute Resolution v3, счётчики)
Заголовок блока 10 «From chargeback to case closed» на dispute-resolution.html отсутствует — он живёт на **products.html:576**, а products.html по плану «без изменений» (00_plan.md, «Что НЕ входит»). Третьей feature-row на странице нет; по правилу 2 секции не выдумываем. `startDr`/`startCount` не переносились (нечего питать). Если ПМ захочет блок 10 — это задача на products.html отдельным решением.

## industries.html

### Исходное состояние
Не тронута прерванным прогоном (чистая по git). Hub-страница, но содержит одну `.feature-row` «One platform, configured for your vertical.» (label 01 — HOW IT WORKS) — совпадает с .fh блока 30 (разница только в финальной точке; копирайт страницы не тронут). Визуал был статичный `.ind-selector`.

### Сделано (с нуля)
1. Font-link: + `JetBrains+Mono:wght@400;500;700`.
2. CSS `.ind-selector`/`.ind-sel-*`/`.ind-rule*` удалён (использовался только этим визуалом — grep подтвердил), вместо него CSS блока 30: rbx-база (+light bg #fafbfd), ep-frame 400px, gen/g-step/g-final, iw-chips/iw-chip(.active), cs-list/cs-row/cs-type/cs-amt, dp-st.ok (+dark override #22c55e), ep-sub, reduced-motion блок. Форматирование — в стиле страницы (с пробелами).
3. Визуал заменён на блок 30 v1: чипы вертикалей (Gambling active), 3 rule-пака reveal'ом, финал «Live in days · same API across verticals». aria-hidden, только span/div.
4. JS-модуль: `startGen` (reveal) + IO-гейтинг threshold 0.3 по `.feature-row` — тот же паттерн.

| Секция | Блок / версия | Статус |
|---|---|---|
| One platform, configured for your vertical. (01 — How It Works) | 30 How It Works **v1** | сделан |

## Self-check (правило 12)
- `node --check` на извлечённом `<script>`: **OK** обе страницы.
- grep `ver-pane|ver-switch|ex-block`: **0** на обеих.
- grep осиротевших классов (case-*, evid-*, ind-sel*, ind-rule*): **0**.
- Обе темы: все новые цвета токенами; хардкоды только вердиктные green/amber (light #16a34a/#b45309 + dark #22c55e/#f59e0b), light-фон фрейма #fafbfd — соответствует explorer/index.
- prefers-reduced-motion: CSS-блок + JS-ветки (финальные статичные состояния: все done, прогресс 100%, шаги shown, финалы show).
- Брейкпоинты: фреймы max-width 400px, при 480px (--cell-pad 20) ширина ~340px — cs-type с ellipsis, iw-chips wrap, переполнений нет; стек feature-row на 768px не менялся.
- nav/footer/копирайт: diff hunks только в font-link, `<style>`-зоне мокапов, двух `.feature-row-visual` и конце `<script>`.

**Деплой не выполнялся** (ручной триггер — решение Дмитрия). Финальный гейт Code Reviewer — за оркестратором.
