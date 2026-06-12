# Отчёт — risk-management.html (блоки 15, 31)

**Дата:** 2026-06-12 · **Источник:** blocks-explorer.html · **Референс:** transaction-monitoring.html (порт предыдущего рана) + index.html

## Маппинг секций

| `.feature-heading` страницы | Блок / версия | Визуал |
|---|---|---|
| «A dedicated risk team without the hiring cost» (01 — EXPERT TEAM) | **15 Expert Team v2** | `.xt-frame` live-лента: `startXt`, XT_POOL (8 записей), prepend fresh-строк каждые 1.9s, кап N+2, бейдж Live пульсирует |
| «Tailored strategy, continuous optimisation» (02 — RULE MANAGEMENT & REPORTING) | **31 Rule Management v1** | `.ep-frame` портфель правил: `startGen` reveal — R-218/R-304/R-311/R-122 (Live/Backtest/Retired), финал «False positives −18% this quarter · weekly report sent» |

**Нюанс матчинга блока 15:** `.fh` в explorer («Let experts handle your fraud operations») совпадает с hero-H1 страницы, а не с `.feature-heading` ряда 01. Секция определена однозначно по точному совпадению eyebrow `.fe` ↔ `.feature-number` («01 — EXPERT TEAM»), по биндинг-маппингу 00_plan.md (15 → risk-management.html) и по пересечению пунктов списка (white-box rules и т.д.). Страница имеет ровно 2 feature-row. Не порт = противоречие плану, поэтому перенесён.

**Скипов нет.** Тексты пан скопированы из explorer байт-в-байт (англ.). Копирайт страницы (заголовки, списки, hero, process, stats, other products), nav и footer — не тронуты.

## CSS (inline `<style>`)

- **Добавлено** (блок «Animated product mockups», по образцу transaction-monitoring.html): `.rbx-frame` (+light), ширины per rule 4 — `.feature-row-visual .rbx-frame.xt-frame{max-width:420px}`, `.ep-frame{max-width:400px}`; `.rbx-head*`, `.rbx-head-badge.live` + `monPulse` (+dark); `.rbx-viewport` (300px + mask); xt-набор (`.xt-track/.xt-row/.xt-time/.xt-av(.sys)/.xt-text/.xt-tag` + 5 тегов, dark-варианты tuning/review/rollback) + keyframe **`xtIn`**; gen/cs-набор (`.gen-body/.gen--anim/.g-step/.g-final`, `.ep-sub*`, `.cs-list/.cs-row/.cs-id/.cs-type`, `.dp-st` ok/review/off + dark-варианты); `@media (prefers-reduced-motion: reduce)` — viewport auto/без маски, пульс и fresh-анимация off, g-step/g-final показаны.
- **Удалено** (dead CSS заменённых статичных мокапов, grep по странице — больше нигде не используются): `/* REPORT MOCK */` (`.report-item/-icon/-title/-sub/-time`) и `/* RULE PERF TABLE */` (`.rule-table/-thead/-th/-trow/-tname/-tval(.good/.warn)/-tbadge(.review)` + light-варианты).
- Хардкод-цвета — только вердиктные green/amber/red; синий — `var(--accent)`. Обе темы везде.
- CSS-пауза `.feature-row:not(.in-view) .rbx-track.is-auto` НЕ добавлена — `is-auto` на странице не используется (v2 — JS-лента, пауза через `live()`-гейт).

## JS

Новый IIFE «Animated product mockups» в конце основного `<script>`: свой IntersectionObserver (threshold 0.3, ставит/снимает `.in-view` на `.feature-row` с `.rbx-frame`), `live()` через `closest('.feature-row')`, фолбэк без IO. Стартеры идемпотентны (`dataset.started`): `startXt` (XT_POOL/xtRowEl, seed 7 строк, при REDUCE — статичная полная лента), `startGen` (reveal-цикл, при REDUCE — finish: все шаги + финал показаны). Перенесены только нужные функции.

## A11y / шрифты

- Оба фрейма `aria-hidden="true"`, внутри только `span`/`div`, `<button>` в мокапах нет (8 строк с button на странице — все прежние: nav/burger/theme/hero/CTA).
- В Google Fonts link добавлен `&family=JetBrains+Mono:wght@400;500;600;700`.

## Self-check (rule 12)

- `node --check` извлечённого `<script>` — **OK**.
- grep `ver-pane|ver-switch|ex-block` — **0**.
- grep остатков `report-*`/`rule-t*` классов — **0**.
- Обе темы: dark/light варианты у всех новых цветных элементов (frame bg, live-бейдж, теги tuning/review/rollback, dp-st ok/review).
- Мобильные: flex-ряды xt/cs при ширине фрейма ~300px не переполняются (cs-type — ellipsis), mon-таблиц нет.
- nav/footer — без изменений.
