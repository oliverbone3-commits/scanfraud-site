# Отчёт: fintech.html + payment-providers.html (блоки 05/21 и 06/07)

Дата: 2026-06-12 · Источник: blocks-explorer.html · Референс: index.html (модуль «Animated product mockups»)

## fintech.html

**Что успел прерванный прогон:**
- Добавил JetBrains Mono в `<link>` Google Fonts.
- Вставил полный CSS-блок мокапов (rbx-, tw-cur, at-, gp-foot/gp-score/gp-act, обе темы, reduced-motion) и ширины фреймов (`.feature-row-visual .rbx-frame` 460px, `.at-frame` 400px).
- Удалил CSS старых статичных визуалов (`.velocity-rule`/`.vr-*`, `.ato-alert`/`.ato-*`).
- НЕ заменил HTML визуалов (старые статичные мокапы остались без стилей) и НЕ добавил JS — визуалы были сломаны/статичны.

**Что доделано:**
- Row 01 «Apply transaction limits and AML rules without code changes.» → разметка блока **05 Velocity & AML v2** (rule-builder typewriter, `rbx-track.is-build`, span'ы вместо `<button>` — взято с проверенного index.html; контент паны 05 v2 побайтово совпадает с index'овским блоком 01 v2).
- Row 02 «Catch account takeover before funds leave.» → разметка блока **21 ATO v1** (`at-body[data-at="seq"]`, USR-7812 · Maria K., 4 события, gp-foot футер, inline SVG triangle-alert вместо ⚠-эмодзи).
- CSS: добавлено перф-правило `.feature-row:not(.in-view) .rbx-track.is-auto { animation-play-state:paused }`.
- JS: новый IIFE-модуль в конце `<script>`: `startBuild` (печать значений + автоподвод вьюпорта) и `startAt` (секвенция событий + rAF-твин вероятности 22→47→71→94, ease-out cubic). Гейтинг — собственный IntersectionObserver (threshold 0.3) на `.feature-row` с `.rbx-frame`, idempotent-гарды `dataset.started`, `closest('.feature-row')`. REDUCE → статичный финал (текст проставлен, события shown, 94%, Account frozen).

| Заголовок секции | Блок / версия |
|---|---|
| Apply transaction limits and AML rules without code changes. | 05 Velocity & AML — **v2** (typewriter build) |
| Catch account takeover before funds leave. | 21 Account Takeover — **v1** (sequence + tween) |

Пропущенных блоков нет.

## payment-providers.html

**Прерванный прогон страницу не трогал** — полный перенос с нуля:
- `<link>`: добавлен JetBrains Mono (как на index.html).
- HTML row 01 «Monitor fraud rates across your entire merchant portfolio.» → блок **06 Merchant Fraud v2**: Blacklist-форма `bl-form[data-bl="select"]` (6 идентификаторов, чекбоксы, Cancel/Confirm как `div.bl-btn` — кнопок/инпутов в мокапе нет, в explorer их тоже не было).
- HTML row 02 «Optimise routing per merchant and deploy your way.» → блок **07 Routing per merchant v3**: `rt-track[data-rt="cascade"]` (3 мерчанта рендерятся JS'ом, у Shop Alpha провайдер A падает → трафик уходит на B, fail-бар красный).
- CSS: блок мокапов целиком — база rbx (frame/head/badge/viewport/track + пауза вне вьюпорта), bl-семейство (+ `bl-frame` 404px), rt-семейство (+ `rt-frame` 380px, `rt-vp`); селекторы ширин переписаны под `.feature-row-visual .rbx-frame.NN-frame` (перебивают базовые 460px). Обе темы: light-фон фрейма `#fafbfd`, `[data-theme="dark"] .rt-fill.fail` (#ef4444 vs #dc2626). Хардкод-цвета только вердиктные (красный fail/required). `@media (prefers-reduced-motion: reduce)` добавлен.
- Удалён мёртвый CSS старых визуалов (`.merchant-table`/`.mt-*`, `.routing-dash`/`.rd-*`) — grep подтвердил, что больше нигде на странице не используются.
- JS: IIFE-модуль — `startBl` (порядок чекбоксов 0,1,4,5; Confirm активируется на первом; цикл 2.4s) и `startRt`+`rtFill` (сид Shop Alpha/BrandX/Gaming Hub; каскад [70,30,0]↔[0,100,0] каждые 2.1s). Тот же IO-гейтинг threshold 0.3, `dataset.started`-гарды. REDUCE → финальные чекбоксы + Confirm on; статичные сплиты без каскада. Неиспользуемые режимы (appear/calm, scroll/rebalance, makeInfinite, rtSplit) не переносились.

| Заголовок секции | Блок / версия |
|---|---|
| Monitor fraud rates across your entire merchant portfolio. | 06 Merchant Fraud — **v2** (checkbox select) |
| Optimise routing per merchant and deploy your way. | 07 Routing per merchant — **v3** (failover cascade) |

Пропущенных блоков нет.

## Самопроверка (правило 12)

| Проверка | fintech | payment-providers |
|---|---|---|
| `node --check` извлечённого `<script>` | OK | OK |
| grep `ver-pane\|ver-switch\|ex-block` | 0 | 0 |
| ⚠-эмодзи | 0 | 0 |
| `<button>`/`<input>` внутри фреймов | 0 | 0 |
| `aria-hidden="true"` на фреймах | 2/2 | 2/2 |
| Обе темы (light-фон фрейма, dark-варианты amber/red) | да | да |
| reduced-motion (CSS-блок + JS-финал) | да | да |
| Остатки старых мокап-классов (vr-/ato-, mt-/rd-) | 0 | 0 |
| nav/footer не тронуты | да | да |
| Копирайт секций | без изменений | без изменений |

## Примечание (вне скоупа)

На обеих страницах (и на других industry-страницах, напр. crypto.html) в inline `<style>` есть исторический обрывок-селектор `[data-theme="light"]` без правила перед `.btn-dark` — он «съедает» inline-определение `.btn-dark` в светлый скоуп. Видимого бага нет (`.btn-dark` дублируется в shared.css), это не результат прерванного прогона — не трогал, но стоит зачистить отдельным проходом по всем страницам.
