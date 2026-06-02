# Homepage — Counter-Proposal Structure

**Document for PM discussion.** Раскадровка предлагаемой главной с обоснованием каждой секции и сравнением с макетом PM.

---

## TL;DR

Сохраняем 95% текущей структуры (она сильнее), вписываем **FAQ перед CTA** — это единственное добавление из макета PM, которое реально приносит ценность. Лид-форму в герое не делаем (объяснение ниже). Industry strip на главной не делаем (есть отдельный хаб).

---

## Принципы, которыми руководствуемся

1. **Visual rhythm.** Секции чередуются по паттерну (cards / split / counters / FAQ / CTA). Никаких «4 одинаковых блока подряд».
2. **One value pillar — one section.** Каждая секция отвечает на один вопрос пользователя. Дубликаты буллетов — запрещены.
3. **Proof points чередуются с убеждением.** Stats после hero → продукты → metrics → CTA. Цифра подкрепляет аргумент, не висит изолированно.
4. **Visual identity сохраняется.** Animated dots, isometric SVG, dashboard preview — это наш язык, не теряем.
5. **CTA в трёх точках.** Hero (Book a demo), nav (sticky), финальная CTA-секция. Между — никаких форм.

---

## Предлагаемая структура (15 секций)

```
┌─────────────────────────────────────────┐
│ 1. NAV (sticky)                         │  существует, без изменений
├─────────────────────────────────────────┤
│ 2. HERO                                 │  существует, контент уточняем
│   • H1, subtitle, 2 CTA + dashboard     │
├─────────────────────────────────────────┤
│ 3. PROOF BAR / FEATURE CAROUSEL         │  существует, без изменений
├─────────────────────────────────────────┤
│ 4. STATS (4 счётчика)                   │  существует, без изменений
├─────────────────────────────────────────┤
│ 5. SECTION HEADER 1                     │  существует, без изменений
│   "Designed around revenue protection"   │
├─────────────────────────────────────────┤
│ 6. 3-COL FEATURES (с isometric SVG)     │  существует, без изменений
├─────────────────────────────────────────┤
│ 7. FEATURE ROW 01 — Rule Constructor    │  существует, без изменений
├─────────────────────────────────────────┤
│ 8. FEATURE ROW 02 — Traffic Flow        │  существует, без изменений
├─────────────────────────────────────────┤
│ 9. FEATURE ROW 03 — Case Management     │  существует, без изменений
├─────────────────────────────────────────┤
│ 10. SECTION HEADER 2                    │  существует, без изменений
│   "One Platform. Unlimited Risk..."      │
├─────────────────────────────────────────┤
│ 11. 2-COL CARDS row 1                   │  существует, без изменений
├─────────────────────────────────────────┤
│ 12. 2-COL CARDS row 2                   │  существует, без изменений
├─────────────────────────────────────────┤
│ 13. METRICS (animated counters)         │  существует, без изменений
├─────────────────────────────────────────┤
│ 14. ★ FAQ (НОВАЯ СЕКЦИЯ)                │  новое — accordion 6-8 вопросов
├─────────────────────────────────────────┤
│ 15. CTA SECTION                         │  существует, без изменений
├─────────────────────────────────────────┤
│ 16. FOOTER                              │  существует, без изменений
└─────────────────────────────────────────┘
```

**Изменение ровно одно:** добавляем секцию #14 — FAQ — между Metrics и CTA. Всё остальное — существующее.

---

## Подробно по каждой секции

### 1. Nav
Без изменений. 5 хабов + theme toggle + Book a demo. Sticky, blur-fon, 65px.

### 2. Hero
**Что:** H1 + subtitle + 2 CTA + dashboard preview справа. Animated dots fon.
**Почему:** value prop за 5 секунд + визуальное доказательство «продукт реальный».
**Текст (по CONTENT-PLAN.md, актуализировать):**
- Eyebrow: «Fraud prevention & payment management»
- H1: «Pure Traffic. No Friction.» *(текущая версия лучше plan-варианта — короче, мемичнее)*
- Subtitle: «Real-time fraud detection and payment orchestration designed to protect revenue without blocking legitimate customers.»
- CTAs: `Book a demo →` | `Explore platform`

**❌ Лид-форма в герое — НЕ добавляем.** Причины:
- 5-полевая форма PM = форма создания аккаунта, не B2B-конверсия
- Даже email+company в герое преждевременно — пользователь ещё не понял value prop
- Стандартный B2B-паттерн: hero CTA → отдельная страница демо. Так у нас и сделано.
- Если очень нужна micro-conversion — лучше «Watch 2-min product tour» как третья кнопка, чем форма

### 3. Proof Bar / Feature Carousel
Без изменений. Переход от value prop к продуктовым модулям.

### 4. Stats (4 счётчика)
Без изменений. Первый proof point после hero.

### 5. Section Header 1 — «Designed around revenue protection, not just fraud blocking»
Без изменений. Закрывает первый value pillar.

### 6. 3-Col Features (isometric SVG)
Без изменений. Reframing 3 продуктов через карточки с isometric stack illustration.

### 7-9. Feature Rows 01-03
Без изменений. Углубление в Rule Constructor / Traffic Flow / Case Management. Реверс через одну для визуальной динамики.

### 10. Section Header 2 — «One Platform. Unlimited Risk Scenarios.»
Без изменений. Переход ко второму value pillar.

### 11-12. 2-Col Cards rows 1-2
Без изменений. Payment support, Risk Ops, REST API, Blacklists.

### 13. Metrics (animated counters)
Без изменений. `+15%` / `3 days` / `100+` / `99.9%`. Закрепление перед FAQ/CTA.

### 14. ★ FAQ — НОВАЯ СЕКЦИЯ

**Что:** Accordion из 6-8 вопросов в 1 колонку с шевронами. Раскрытие — accordion `<details>` или JS-управляемый toggle.

**Зачем именно тут:**
- После metrics пользователь убеждён в продукте, но остались технические/коммерческие вопросы
- FAQ снимает их до запроса демо → выше качество входящих лидов
- SEO bonus: FAQPage schema.org markup → rich snippets в Google

**Визуальный паттерн:**
```
[ Section header 3 (тот же .sec-hdr) ]
"Frequently Asked Questions" + правая колонка с подзаголовком

[ FAQ accordion ]
┌─────────────────────────────────────────┐
│ Q1: How long does integration take?  ▼ │
├─────────────────────────────────────────┤
│ Q2: Do you support PCI DSS?          ▼ │
├─────────────────────────────────────────┤
│ Q3: How is pricing structured?       ▼ │
└─────────────────────────────────────────┘
```

**Технические детали для верстки (потом):**
- Использовать существующие CSS variables (`--bd`, `--t1`, `--t2`, `--bg2`)
- Шеврон через Lucide `chevron-down` с `transform: rotate(180deg)` при раскрытии
- Padding и шрифты — по CLAUDE.md typography scale
- Семантика: `<details><summary>` для нативной доступности + JSON-LD FAQPage в `<head>`
- Высота закрытого вопроса ~ 60-72px (Geist 600 18/24 + padding)

**Контент:** см. `03_faq-content.md` — 6-8 вопросов с черновиками ответов.

### 15. CTA Section
Без изменений. Финальный призыв с animated dots fon.

### 16. Footer
Без изменений.

---

## Сравнение с макетом PM (что и почему отвергаем)

| Элемент макета PM | Решение | Обоснование |
|-------------------|---------|-------------|
| 5-полевая форма (Title/First/Middle/Last/Suffix) в герое | ❌ Не берём | Не лид-капча. Похоже на дефолт Balsamiq. См. секцию Hero. |
| Industry strip #1 (PSP/EMI/Crypto/High Risk/BIN Sponsors/Acquirer) в начале | ❌ Не берём | Mixed taxonomy (типы клиентов + вертикали + risk-категории + bus.models). Разрушает IA. У нас есть `industries.html` хаб + 6 страниц. |
| Industry strip #2 (P2P/Ecom/AMP) в середине | ❌ Не берём | Дубль той же проблемы + это payment methods, не индустрии. |
| Image+bullets «Uninterrupted Payment Flow» | ❌ Дубль | Уже есть Feature row 02 «Frictionless Traffic Flow». |
| Image+bullets «Fast go-to-market» | ❌ Дубль | Это часть hero value prop («Launch in 3 days») + metrics («3 days median onboarding»). Не нужен отдельный блок. |
| Image+bullets «Risk Ops Solution» | ❌ Дубль | Уже есть 2-col card #1 «Collaborative Risk Ops». |
| FAQ-секция | ✅ Берём | Единственное реально новое и полезное добавление. См. #14. |
| Footer | ✅ Без изменений | Общий для всех страниц. |

---

## Что показать PM (talking points)

1. **Сколько берём:** 1 из 7 предложенных секций (FAQ).
2. **Почему не остальное:** дубли уже существующих секций или mixed taxonomy.
3. **Что предлагаем взамен:** оставить текущий каркас + добавить FAQ перед CTA.
4. **Цифры:** ровно одна новая секция → одна задача на верстку → можно показать готовый результат за 1-2 дня после согласования контента FAQ.
5. **Если PM настаивает на форме в герое:** компромисс — добавить третью кнопку «Watch 2-min product tour» (видео-модал), это даёт micro-conversion без формы.

---

## Открытые вопросы для PM

1. Контент FAQ — кто отвечает на вопросы про pricing, SLA, contractual terms? (черновики дам, но сверка нужна)
2. Нужен ли FAQ schema.org markup? (рекомендую — да, ради rich snippets)
3. Куда ведут CTA `Book a demo` сейчас и нужно ли менять (есть ли отдельная демо-страница или mailto)?

---

## Дальнейшие шаги (если предложение одобрено)

1. PM подтверждает контент FAQ (или даёт правки к черновикам из `03_faq-content.md`)
2. Заводим отдельную задачу: **«Add FAQ section to homepage»**
3. Workflow #6 (New Section): UI Designer → UX Architect → Frontend Developer → Accessibility Auditor → Code Reviewer → Evidence Collector
4. Деплой — ручной триггер через GitHub Pages, после полной проверки
