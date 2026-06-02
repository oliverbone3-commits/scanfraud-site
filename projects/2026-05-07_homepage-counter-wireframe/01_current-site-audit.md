# Current Homepage — Section Audit

**Source:** `index.html` (как сейчас на scanfraud.com)
**Цель:** зафиксировать, что у нас уже есть и что каждая секция решает.

---

## Текущая структура (сверху вниз)

| # | Секция | Класс / якорь | Что решает | Визуальный паттерн |
|---|--------|---------------|------------|--------------------|
| 1 | **Nav** (sticky) | `nav` | Навигация по 5 хабам + theme toggle + Book a demo | 65px fixed, blur fon |
| 2 | **Hero** | `.hero-sec` | Value prop + 2 CTA + dashboard preview справа | Animated Three.js dots fon, 1-кол. текст слева, Hero Monitoring Dashboard component справа |
| 3 | **Proof bar / Feature Carousel** | `.feat-carousel` | Перевод от value prop к продуктовым модулям | Левый фикс. визуал + правый сменяемый text panel |
| 4 | **Stats** | `.stats` | 4 ключевые метрики (proof points) | 4-кол., анимированные счётчики |
| 5 | **Feature row 01 — Rule Constructor** | `.feat-row` | Углубление в продукт #1 | 50/50 split, текст+буллеты | визуал |
| 6 | **Feature row 02 — Traffic Flow** (reversed) | `.feat-row.reversed` | Углубление в продукт #2 | Зеркальный split |
| 7 | **Feature row 03 — Case Management** | `.feat-row` | Углубление в продукт #3 | Снова обычный split |
| 8 | **Section header 1** | `.sec-hdr` | «Designed around revenue protection, not just fraud blocking» — переход к value framework | H2 + правая колонка с eyebrow + body |
| 9 | **3-col features (f3)** | `.f3` | Reframing 3 продуктов в формате карточек с isometric SVG | 3-кол., карточки с isometric stack illustration + бойцы |
| 10 | **Section header 2** | `.sec-hdr` | «One Platform. Unlimited Risk Scenarios.» — переход ко второму value pillar | Тот же паттерн что #8 |
| 11 | **2-col cards row 1** | `.c2` | Payment support + Risk Ops | 2-кол. карточки с lucide-иконкой |
| 12 | **2-col cards row 2** | `.c2` | API integration + Blacklists | Тот же паттерн |
| 13 | **Metrics** | `.metrics` | 4 финальные метрики (`+15%`, `3 days`, `100+`, `99.9%`) | 4-кол. animated counters |
| 14 | **CTA section** | `.cta-sec` | «Stop fraud. Protect revenue. Launch in 3 days.» + 2 CTA | Animated dots fon + центрированный блок |
| 15 | **Footer** | `footer` | Навигация по разделам + legal | 3-кол. ссылки + bottom bar |

## Что текущая структура УЖЕ делает хорошо

1. **Visual rhythm.** 4+ разных паттерна секций (cards / feature rows / stats / 3-col with SVG / 2-col cards). Глаз не устаёт.
2. **Proof points в двух местах** — после hero (stats) и перед CTA (metrics). Закрепление аргумента.
3. **Прогрессия глубины** — value prop → продукты → reframing → отрасли (через Section header 2) → CTA.
4. **Visual identity.** Animated dots в hero и CTA, isometric SVG в f3-карточках, dashboard preview в hero — это собственный визуальный язык, не SaaS-стандарт.
5. **Dual-theme везде** — вся палитра через CSS variables, обе темы поддерживаются.

## Что текущая структура НЕ делает (и стоило бы)

| Пробел | Почему важно для B2B | Решение в нашем предложении |
|--------|----------------------|------------------------------|
| Нет FAQ | SEO (rich snippets), снятие типовых возражений до демо | Добавить секцию `.faq` перед CTA |
| Нет industries-strip на главной | На главной B2B-сайтов часто короткая полоска «для кого мы» сразу после hero — помогает «свой не свой» за 3 секунды | Опционально (см. obsуждение в 02) |
| Нет client logos / proof bar с реальными лого | Социальное доказательство | Не делаем сейчас (нет логотипов) — отложить |

## Где у нас уже есть аналог того, что хочет PM

| PM хочет | У нас уже есть |
|----------|----------------|
| Industry strip | Industry hub `industries.html` + 6 страниц вертикалей. На главной не нужна вторая полоска. |
| 3 feature blocks с image+bullets | Feature rows 01-03 (5-7 в текущей нумерации) делают именно это, но визуально лучше |
| «Uninterrupted Payment Flow» с буллетами | Feature row 02 «Frictionless Traffic Flow» + 3-col card #2 |
| «Risk Ops Solution» с буллетами | 2-col card row 1 «Collaborative Risk Ops» + section header 2 |
| Лид-форма (если очень нужна) | CTA `Book a demo` с переходом на отдельную страницу — стандартный B2B-паттерн |

## Вывод

Текущая главная **структурно сильнее** макета PM и закрывает 90% того, что PM пытается добавить, но другими средствами. Единственный реальный пробел — **FAQ**.

Контр-предложение: оставить текущий каркас + вписать FAQ перед CTA. Не ломать то, что работает.
