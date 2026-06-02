# ScanFraud (current) — Homepage Audit

## Snapshot
- URL fetched: https://scanfraud.com/ (читал из index.html в репозитории)
- Date fetched: 2026-05-07
- Positioning (1 sentence): Real-time fraud detection и payment orchestration для PSP/EMI/fintech/iGaming/crypto, без блокировки легитимных клиентов.
- Target audience (ICP): PSP, EMI, acquirers, BIN-sponsors, gambling/iGaming, crypto, e-commerce, fintech, trading — mid-market и enterprise risk teams.
- Visual identity (1 line): Dark/light dual-theme, animated Three.js dots, синий accent #1a56ff, isometric SVG в карточках, dashboard mockups как proof.
- Theme (light/dark/both): **Both** — единственный из набора с реальной dual-theme (даёт значительное преимущество).

## Block-by-block (текущая структура)

### Block 1: nav (sticky)
- Position: above-fold (fixed)
- Visual pattern: 65px fixed bar, blur-bg, 5 хабов (Products / Industries / Resources / Security / Docs), Sign in + Book a demo
- Notable: Theme toggle (sun/moon) — уникальная фича среди конкурентов

### Block 2: hero
- Position: above-fold
- Visual pattern: split, текст слева + dashboard mockup справа
- Copy excerpt: «Pure Traffic. No Friction.»
- Notable: Animated Three.js dots fon, 2 CTA (`Book a demo →` + `Explore platform`), embedded Hero Monitoring Dashboard (полноценный mock dashboard с tabs/filters/table)

### Block 3: proof bar (но НЕ logo wall — product pillars)
- Position: mid (под hero)
- Visual pattern: 3-col strip с lucide-иконками + product name + tagline
- Copy excerpt: «Intelligent Rule Constructor / Frictionless Traffic Flow / Advanced Case Management»
- Notable: **Это product pillars, не клиентские лого**. Атипично. Конкуренты в этом слоте показывают customer logos.

### Block 4: feature carousel
- Position: mid
- Visual pattern: split, фикс. визуал слева + sweepable text panel справа (01/02/03 карточки)
- Copy excerpt: «Real-time transaction monitoring across all your payment channels.»
- Notable: Пред-prev/next нав, числовая нумерация. Похож на Sift lifecycle tabs, но без табов (только стрелки).

### Block 5: stats (early)
- Position: mid
- Visual pattern: 4-col, числа + лейблы
- Copy excerpt: «3 days / 100+ / 99.9% / 6»
- Notable: Без анимации, без источников, формулировки generic («Average integration», «Industries served»).

### Block 6: feature row 01 — Rule Constructor
- Position: mid
- Visual pattern: 50/50 split, текст с 4 sub-features справа + dashboard mockup слева
- Copy excerpt: «Hybrid Workflow / Multi-Level Precision / Rapid Speed-to-Market»
- Notable: Каждая sub-feature имеет heading + body. Глубже, чем Sift/Forter (у тех 1-2 строки на feature row).

### Block 7: feature row 02 — Traffic Flow (reversed)
- Position: mid
- Visual pattern: 50/50 reversed, dashboard слева → текст справа
- Copy excerpt: «Ultra-Low Latency / Adaptive Safeguards / Smart Filtering»
- Notable: 3 sub-features с heading+body.

### Block 8: feature row 03 — Case Management
- Position: mid
- Visual pattern: 50/50 split (как 01)
- Copy excerpt: «Deep Cross-Entity Checks / Contextual Monitoring / Streamlined Investigations»
- Notable: 3 sub-features.

### Block 9: section header 1
- Position: mid
- Visual pattern: H2 слева + eyebrow+body справа (60/40)
- Copy excerpt: «Designed around revenue protection, not just fraud blocking»
- Notable: Reframing-секция перед f3.

### Block 10: 3-col features (f3) — те же 3 продукта
- Position: mid
- Visual pattern: 3-col grid, каждая карточка: eyebrow + heading + paragraph + bullet list + isometric SVG illustration
- Copy excerpt: «Intelligent Rule Constructor / Frictionless Traffic Flow / Case Management»
- Notable: **Это уже 3-я итерация описания тех же 3 продуктов** (после proof bar Block 3 и feature rows 6-8). Дубль смысла, разная подача. Isometric stack-SVG — оригинальный визуал.

### Block 11: section header 2
- Position: mid
- Visual pattern: тот же что Block 9
- Copy excerpt: «One Platform. Unlimited Risk Scenarios.»
- Notable: Переход к value pillar 2.

### Block 12: 2-col cards row 1
- Position: mid-bottom
- Visual pattern: 2-col grid, lucide-иконка + eyebrow + heading + body
- Copy excerpt: «Comprehensive Payment Support / Collaborative Risk Ops»
- Notable: Появляются новые value props не привязанные к 3 основным продуктам.

### Block 13: 2-col cards row 2
- Position: mid-bottom
- Visual pattern: тот же
- Copy excerpt: «Simple REST API Integration / Dynamic Blacklists & Global Context»
- Notable: REST API карточка имеет ссылку на GitBook docs — единственная анкорная.

### Block 14: metrics (late)
- Position: bottom
- Visual pattern: 4-col animated counters
- Copy excerpt: «+15% / 3 days / 100+ / 99.9%»
- Notable: **Дубль stats Block 5** — 3 of 4 цифр повторяются. Здесь анимированы.

### Block 15: cta block
- Position: bottom
- Visual pattern: centered, animated Three.js dots fon
- Copy excerpt: «Stop fraud. Protect revenue. Launch in 3 days.»
- Notable: 2 CTA (`Book a demo →` + `Explore platform`), та же animated dots что в hero — закольцовка.

### Block 16: footer
- Position: bottom
- Visual pattern: 3 col ссылок + brand col + bottom bar
- Notable: Стандартный.

## Patterns текущего scanfraud — что сильно (vs конкуренты)

1. **Dual theme (dark+light)** — единственный из 5 конкурентов с такой возможностью. Сильный visual identity.
2. **Real product UI везде** — dashboard mockups в hero, feature rows, proof bar. Только Ravelin делает похоже. Forter/Signifyd используют lifestyle-фото (хуже для B2B).
3. **Глубокие feature rows** — 3-4 sub-features с heading+body на каждый row. У конкурентов — 1-2 строки. Лучше для технического читателя.
4. **Section headers с правой колонкой** — паттерн `H2 + eyebrow+body` даёт reframing без рекламной интонации. Уникально.
5. **Animated dots в hero и CTA** — собственный визуальный язык, не SaaS-стандарт.
6. **Isometric stack SVG в f3** — оригинальная иллюстрация, без стоковых иконок.

## Pattern-пробелы (что есть у конкурентов, но нет у нас)

| Пробел | У кого есть | Серьёзность |
|--------|-------------|-------------|
| **Customer logo wall в proof bar** | Seon, Sift, Signifyd, Ravelin (4/5) | ★★★ критично — самый универсальный паттерн B2B-главных |
| **Named customer + hard number в feature row** | Sift (Harry's «85% chargeback drop»), Forter (Wayfair/Instacart inline), Seon (Bilt, Lottoland) | ★★★ критично — самый сильный proof-механизм |
| **Industries grid (отдельная секция)** | Seon (tabs), Signifyd (geo), Ravelin (6-tab use cases) | ★★ важно — у нас есть `industries.html` хаб, но на главной ссылки нет |
| **Compliance/certifications bar** | Ravelin (детальный с описаниями) | ★★ важно — для PSP/банков compliance это критерий выбора |
| **Resource cards (reports, blog)** | Sift, Signifyd, Ravelin (3/5) | ★ полезно для SEO и lead-gen |
| **Awards / analyst recognition** | Sift (G2 #1), Signifyd (Digital Commerce 360), Forter (analyst quotes) | ★ полезно для credibility |
| **Single global CTA discipline** | Forter («LET'S TALK» 4-5 раз) | ★ опционально — у нас 2 CTA, можно усилить один |
| **Live data widget** | Forter (agentic benchmark) | ★ опционально — мощный hook, но нужна data |

## Pattern-избыток (что у нас лишнее или дублируется)

| Дубликат | Описание | Решение |
|----------|----------|---------|
| **Те же 3 продукта в 4 местах** | Proof bar (Block 3) + Carousel (Block 4) + Feature rows 01-03 (Blocks 6-8) + 3-col f3 (Block 10) — все про Rule Constructor / Traffic Flow / Case Management | Оставить feature rows + f3 (визуально разные). Удалить proof bar и carousel или превратить в иное. |
| **Stats vs Metrics** | Block 5 (3 days / 100+ / 99.9% / 6) и Block 14 (+15% / 3 days / 100+ / 99.9%) — 3 общие цифры | Объединить в один блок ближе к hero, либо разнести по смыслу (early — про скорость, late — про результат) |
| **Section header pattern × 2** | Блоки 9 и 11 — одинаковая визуальная структура подряд через секцию | Оставить, но сделать визуально различимыми (ezyebrow color, размер) |

## Notable copy patterns (текущие)

- Eyebrow words used: Core value (×2), Your Business. Your Logic., Protect revenue not just transactions., Connect the Dots., Any Method Any Market., Role-Based Mastery., Ready to Launch in Hours., Dynamic Blacklists & Global Context., By the numbers, Get started today
- H1 length (words): 4 («Pure Traffic. No Friction.»)
- CTA labels (verbatim): «Book a demo →», «Explore platform»
- Bullet count per feature: 3-4 sub-features в feature rows; 4 buллетов в f3 cards

## Свод: 5 главных выводов из аудита scanfraud

1. **Структурно главная сильная** (15 секций, 4-5 разных визуальных паттернов), но **избыточная**: 3 ключевых продукта описаны 4 раза в разных формах.
2. **Dual theme + real product UI + isometric SVG** — топ-3 уникальных преимущества vs конкурентов. Сохранить любой ценой.
3. **3 критичных пробела** (по убыванию приоритета): customer logo wall, named-customer-with-hard-number в feature rows, compliance bar.
4. **Stats и Metrics** — два блока цифр с пересечением. Нужна консолидация.
5. **FAQ ни у одного из 5 конкурентов нет на homepage**. Это интересно — наша рекомендация добавить FAQ в предыдущей задаче была «по просьбе PM», но индустрия так не делает. Для нас FAQ остаётся ОК (мы меньший игрок, больше вопросов «кто вы»), но это уже не «обязательная индустриальная норма» — это наше решение.
