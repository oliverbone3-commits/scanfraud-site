# Code Review — финальный гейт: прод-интеграция блоков 05–31 (11 страниц)

**Дата:** 2026-06-12 · **Ревьюер:** Code Reviewer (финальный гейт) · **Скоуп:** 11 страниц по 00_plan.md, index.html исключён (принят ранее).
**Метод:** cross-page grep/script-аудит + выборочное чтение JS/CSS; playwright/console/overflow/node --check — проверены централизованно до ревью, не дублировались.

## Вердикты

| Страница | Вердикт |
|---|---|
| transaction-monitoring.html | **PASS with notes** (№1) |
| routing-cascading.html | **PASS with notes** (№2) |
| dispute-resolution.html | **PASS** |
| risk-management.html | **PASS** |
| fintech.html | **PASS with notes** (№3) |
| payment-providers.html | **PASS with notes** (№3) |
| trading.html | **PASS** |
| gambling.html | **PASS** (№4 — задокументировано агентом) |
| crypto.html | **PASS** |
| ecommerce.html | **PASS** |
| industries.html | **PASS** |

**Итог: батч принят. Блокеров нет.** 1 minor + 4 nit. Все 6 агентских отчётов сверены с фактическим состоянием файлов — расхождений не найдено.

## Что проверено (результаты)

1. **Артефакты лаба:** `ver-pane|ver-switch|ex-block` — 0 на всех 11; `closest('.ex-block')` — 0; ⚠-эмодзи — 0 (везде inline SVG triangle-alert). Глифы `✓/✕` в чипах trading.html:538-539 — 1:1 с каноном explorer (план запрещает только ⚠) — OK.
2. **A11y:** все 22 `.rbx-frame` (4+3+2+2+2+2+2+2+2+2+1) с `aria-hidden="true"`; `<button>`/`<input>` внутри фреймов — 0 (скриптовая проверка с трекингом вложенности div).
3. **Темы:** `[data-theme="light"] … .rbx-frame { background:#fafbfd }` — на всех 11; скрипт-сверка light-вердиктных хексов (#16a34a/#b45309/#dc2626) против `[data-theme="dark"]`-оверрайдов (#22c55e/#f59e0b/#ef4444) — пропусков 0; синий — только `var(--accent)` в новом CSS блоков (единственный хардкод — №1, вне блочной интеграции).
4. **Reduced-motion:** `@media (prefers-reduced-motion: reduce)` CSS-блок + `const REDUCE = matchMedia(...)` в JS — на всех 11. Выборочно прочитаны REDUCE-ветки (trading startRv: `makeInfinite` гардится на REDUCE — дублирования строк нет, viewport auto; payment-providers startRt: статичные сплиты; rm startXt: полная лента без интервала) — полные статичные финалы.
5. **JS-движок:** на всех 11 — свой IO `{threshold: 0.3}`, `add/remove('in-view')`, фолбэк без IntersectionObserver (add in-view + activate), `closest('.feature-row')`, идемпотентные стартеры (`dataset.started`; trading дополнительно `dataset.inf`). Пауза `.feature-row:not(.in-view) .rbx-track.is-auto` есть на единственной странице, реально использующей `is-auto` (trading, + hover-пауза + reduce `animation:none`).
6. **Консистентность базы:** `.rbx-frame` 460px / radius 14px / `.rbx-head` padding 11px 14px — идентичны на всех 11 (fintech/pp скоупят базу под `.feature-row-visual` — значения те же). Per-block ширины по правилу 4: ep 400, xt 420, at 400, bl 404, rt 380, oc/cn 400, rv 482 — соответствуют explorer. JetBrains Mono в `<link>` на всех 11 (вес 600 добавлен только там, где используется: tm, rm).
7. **shared.css / nav / footer:** diff shared.css = только spark-border-блок прежней сессии (76 строк, к батчу не относится); nav и footer всех 11 страниц побайтово равны своим HEAD-версиям (md5-сверка).
8. **Dead code:** скрипт-сверка всех классов из `<style>` против markup+JS. Динамически собираемые (`xt-t-*`, `tm-f-*`, `rv-v-*` — строятся конкатенацией в JS) — используются, не мёртвые. Реально мёртвое — №2–№4 (nit). Старые статичные визуалы удалены чисто: остатков `case-*`, `ind-sel*`, `vr-/ato-`, `mt-/rd-`, `rp-/dep-`, `wc-`, `oq-`(legacy)/`cb-`, `report-*`/`rule-t*`, `risk-profile` — 0.
9. **Скипы (3) — правомерны:** 08 «Real-time decisions on every transaction» — отсутствует на transaction-monitoring.html (роль закрывает hero-терминал); 09 «Route every payment to the right provider» — на routing-cascading.html только как hero-H1 (routing-cascading.html:288), feature-heading нет; 10 «From chargeback to case closed» — живёт на products.html:576, products.html не изменён (git diff пуст). Матчинг блока 15 по eyebrow «01 — EXPERT TEAM» (fh ≠ heading) — обоснован, принят.
10. **ecommerce клэш oq-:** переименование oqx- консистентно (CSS+HTML+JS), legacy `oq-*` удалены; единственное упоминание `oq-` — комментарий (ecommerce.html:159). `xtIn` корректно опущен (v2 triage не использует fresh) и корректно присутствует на rm/gambling.

## Issues (консолидированно)

1. 🟡 **minor** — `transaction-monitoring.html:93` — `.tm-payload .tm-flag { color:#1a56ff }`: хардкод акцента, должно быть `var(--accent)`. Формально это hero-терминал более ранней uncommitted-сессии (не блочная интеграция, в HEAD отсутствует), но уедет в прод тем же коммитом — поправить перед коммитом. Один rename, нулевой риск.
2. 💭 **nit** — `routing-cascading.html:179, 186-187, 204` — мёртвый CSS неиспользуемых режимов: `.pc-b-pending`, `.pc--seq`-правила (на странице только `pc--reveal`, routing-cascading.html:337); плюс в `startPc` недостижимая cascade-ветка. Отступление от буквы правила 5 («только нужное»), вреда нет.
3. 💭 **nit** — `fintech.html:165`, `payment-providers.html:162` — правило паузы `.rbx-track.is-auto` при том, что `is-auto` на этих страницах не используется (fintech — `is-build`, pp — `bl-form`/`rt-track`). Защитный мёртвый селектор, безвреден.
4. 💭 **nit** — `gambling.html:197, 209` — `.dp-row.fresh`+`xtIn` перенесены, но выбранная v2-burst `.fresh` в рантайме не вешает. Задокументировано агентом как конвенция правила 11 — осознанно, оставить можно.
5. 💭 **nit** — косметика между агентами: компактный CSS (tm/rc/dr/rm) vs пробельный (остальные), скоупинг базы rbx под `.feature-row-visual` (fintech/pp) vs голый `.rbx-frame` (остальные). Значения идентичны, на рендер не влияет — выравнивать не обязательно.

## Pre-existing (вне скоупа батча, для будущего прохода)

- Висячий фрагмент-селектор `[data-theme="light"]` перед `.btn-dark` в inline-CSS ряда страниц (артефакт HEAD, отмечен двумя агентами).
- Мёртвые shell-классы в inline-CSS (`cta-block-*`, `page-title`, `prod-grid` и т.п.) — уже не использовались в HEAD.
- `other-card` `<a>`→`div+a.other-link` и spark-border в shared.css — прежняя uncommitted-сессия, к батчу не относится.

## Хорошее (отметить)

- Гард `makeInfinite` на REDUCE (trading) — строки не дублируются при reduced-motion, аккуратно.
- Динамическая сборка классов из пулов данных (rm/trading) — компактно и без рассинхрона CSS↔JS.
- Добровольные мобильные фиксы сверх плана: rv-грид 480px (trading), oqx-грид 480px (ecommerce).
- Честная документация скипов и нюанса матчинга блока 15 в отчётах — сверка прошла без единого расхождения отчёт↔код.
