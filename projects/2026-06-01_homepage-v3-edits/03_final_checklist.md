# Финальный чеклист — homepage v3 (2026-06-01)

Сверка с `00_brief.md`, `02_decisions.md`, замечаниями Code Reviewer-а из исходного дельта-аудита и итерациями PM по ходу работы.

Легенда: ✅ готово · 🆕 добавлено по ходу · ⚠️ не пофикшено (известное замечание) · 🟡 placeholder/TODO

---

## Структура секций v3

| # | Секция | Статус | Нота |
|---|--------|--------|------|
| 1 | NAV | ✅ | Без изменений |
| 2 | HERO | ✅ | Центрированный, без lead form, dots + aurora |
| 3 | CLIENT TICKER | ✅ | 6 items × 2 (PSP / EMI / Crypto / High Risk / BIN Sponsors / Acquirer), uppercase, slash divider, auto-scroll |
| 4 | PRODUCTS — header + 4 rows | ✅ | Section header + 4 feature rows (Row 02 и Row 04 — reversed) |
| 5 | WHY SCANFRAUD | ✅ | Layout B (1.5fr 1fr 1fr × 2), 6 карточек, Roles исключён |
| 6 | STATS | ✅ | 3 counter с анимацией (`<300 ms` / `3 days` / `99.9 %`) |
| 7 | INDUSTRIES | ✅ | 6 cards 3×2 + footer-line со ссылкой на `#cta-section` |
| 8 | CTA | ✅ | Новые H2/subtitle, `id="cta-section"`, dots + aurora |
| 9 | FOOTER | ✅ | Без изменений |

---

## Контент (по PM-решениям)

### HERO
- ✅ H1: «Pure Traffic. No Friction.»
- ✅ Subtitle: правильный текст из брифа
- ✅ 3 bullets: No-code Rule Engine / Advanced Case Management / Fast REST API Integration
- ✅ CTA primary: Book a demo → `#cta-section`
- ✅ CTA secondary: Explore platform → `products.html`
- 🆕 Bullets переехали **под кнопки** (итерация PM)
- 🆕 Bullets — pill chips (radius 999, 11px, lucide icon 20→14×14 без фона) — итеративно подобрано
- 🆕 `.btn-ghost` — frosted glass (rgba + blur(14) + saturate)
- 🆕 Hero фон — animated aurora gradient (2 слоя, противодвижение, periods 22s + 16s, prefers-reduced-motion)

### CLIENT TICKER
- ✅ Items: PSP / EMI / Crypto / High Risk / BIN Sponsors / Acquirer
- ✅ Uppercase, slash divider, auto-scroll, edge-fade, pause-on-hover, prefers-reduced-motion

### PRODUCTS
- ✅ Header: «THE SCANFRAUD PLATFORM» / «Build Your Defense. Protect Your Revenue.» / правильный subtitle
- ✅ Row 01 — No-code Rule Engine (H3: «Your business. Your logic.»). 3 bullets (Hybrid workflow / Velocity & geo precision / Deploy in minutes — раздельно).
- ✅ Row 02 — Payment Routing (reversed). H3: «Frictionless Traffic Flow». 3 bullets.
- ✅ Row 03 — Advanced Case Management. **Eyebrow в CAPS** «03 — ADVANCED CASE MANAGEMENT». H3: «Cross-Entity Case Management». 3 bullets.
- ✅ Row 04 — Fast Go-To-Market (reversed). 3 bullets.
- 🆕 Иконки `.feat-icon` **убраны** во всех 4 rows (по решению PM)
- ⚠️ Row 04 H3 («Fast Go-To-Market») **дублирует eyebrow** — по брифу H3 должен быть tagline «Your data. Your transactions. Live in days.» (замечание Code Reviewer #1)
- ⚠️ Row 02/03 **taglines пропали** («Protect revenue, not just transactions» и «Connect the dots») — вшиты в body, отдельной строки нет
- 🟡 4 placeholder-а `.fi-placeholder` ждут реальных mockup-ов (Rule Builder / Routing / Case Mgmt / Onboarding)

### WHY SCANFRAUD
- ✅ Eyebrow / H2 / sub — соответствуют брифу
- ✅ Layout B — `1.5fr 1fr 1fr × 2` без span-overrides
- ✅ 6 карточек, drop = Roles:
  - Col 1 (wide): No industry exclusions · Fingerprint
  - Col 2: Stay below thresholds · Live in 2-3 days
  - Col 3: Every decision is auditable · Per-tx pricing
- ✅ Lucide icons: shield-off · fingerprint · gauge · zap · file-search · tag

### STATS
- ✅ Eyebrow / H2
- ✅ 3 counter: `<300 ms` (с статическим prefix `<` + animate 0→300), `3 days` (0→3), `99.9 %` (0→99.9 с decimal)
- ✅ IntersectionObserver, существующий pattern

### INDUSTRIES
- ✅ Eyebrow / H2 / sub
- ✅ 6 cards: Gambling · Crypto · E-commerce · Fintech · Payment Providers · Trading & Forex
- ✅ Ссылки на industry-pages
- ✅ Footer-line: «If your industry isn't listed, [contact us](#cta-section) — we adapt rule sets to specific business models.»

### CTA
- ✅ Eyebrow «GET STARTED TODAY»
- ✅ H2: «Stop fraud. Protect revenue. Launch in 3 days.»
- ✅ Subtitle про 30-minute call
- ✅ `id="cta-section"`
- ⚠️ Оба CTA имеют `href="#"` placeholder — нужны реальные target (mailto / contact form / external)

---

## Технические правила CLAUDE.md

- ✅ `shared.css` НЕ редактирован
- ✅ Все новые стили — в inline `<style>` блоке `index.html`
- ✅ NAV и FOOTER идентичны другим страницам
- ✅ CSS-переменные используются (`--bg`, `--bg2`, `--bd`, `--bdl`, `--t1`, `--t2`, `--accent`, `--col-width`, `--cell-pad`, `--font-g`, `--font-i`)
- ✅ Обе темы (dark + light) покрыты для всех новых секций (chips, aurora, frosted glass)
- ✅ 5 breakpoints: 1280 / 1024 / 900 / 768 / 480
- ✅ Lucide icons (sliders-horizontal / shield-check / code-2 / shield-off / gauge / fingerprint / zap / file-search / tag / dice-5 / bitcoin / shopping-cart / landmark / credit-card / trending-up)
- ✅ `lucide.createIcons()` вызывается
- ✅ HTML-теги сбалансированы (после рефакторингов)

---

## Удалено из старой главной (что было в current до v3)

- ✅ Hero-preview-frame + связанный `hero-monitor.css` link
- ✅ PROOF BAR
- ✅ FEATURE CAROUSEL (+ JS ~230 строк)
- ✅ Верхний дубль STATS (анти-паттерн «два metrics-блока на одной странице»)
- ✅ 3-COL FEATURES с isometric SVG
- ✅ Обе строки 2-COL CARDS
- ✅ `.feat-icon` блоки в feature rows (по решению PM)

---

## Замечания Code Reviewer-а — статус

1. ⚠️ **Row 04 H3 дублирует eyebrow** — не пофикшено
2. ⚠️ **Row 02/R03 taglines пропали** — не пофикшено (вшиты в body)
3. ⚠️ **CTA secondary `href="#"`** — placeholder, нужны реальные target
4. 🟡 **Orphaned CSS** (~50 строк dead code от удалённого hero-preview/carousel + `.feat-icon` теперь тоже) — cleanup откладывали
5. 🟡 **4 placeholder-а в PRODUCTS** — нужны реальные UI-визуалы (UI Designer)
6. ⚠️ **PRODUCTS на 1024px** — text-колонка зажата vs visual placeholder (50/50 жёстко) — не оптимально

---

## Что добавили по ходу (не было в исходном брифе)

- 🆕 HERO bullets: 4 итерации (dots → square chips с фоном → pill chips меньше → переезд под CTA → убрали фон icon-square)
- 🆕 Иконки в feature rows убраны (PM решение)
- 🆕 `.btn-ghost` frosted glass (на dots был плохо виден)
- 🆕 HERO aurora gradient (4 пятна в 4 углах, accent-blue/purple/teal) с двухслойной анимацией flow + drift, prefers-reduced-motion

---

## Остаток работы — приоритеты

### Перед коммитом (рекомендую)
1. Row 04 — переписать H3 на «Your data. Your transactions. Live in days.», body упростить (например: «Migrate from any vendor without rebuilding rules from scratch.»)
2. CTA — заменить `href="#"` на реальные target (например `mailto:hello@scanfraud.com` или контакт-форму)
3. (опц.) Row 02/03 taglines — добавить отдельной строкой или подтвердить решение PM «без taglines»

### Может ждать (отдельные таски)
4. UI Designer — нарисовать или подобрать 4 реальных mockup-а для PRODUCTS (Rule Builder / Routing / Case Mgmt / Onboarding)
5. Frontend — cleanup orphaned CSS (`.feat-icon`, `.h-preview`, `.car-*` ~50 строк)
6. UX Architect — пересмотреть PRODUCTS на 1024px (text/visual proportions)
7. Evidence Collector — переснять скриншоты с aurora animation и финальными чипсами

### Не делаем сейчас
- Деплой на GitHub Pages — строго ручной, ждём команду PM
