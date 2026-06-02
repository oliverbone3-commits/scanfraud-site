# Block Catalog

**Назначение.** Унифицированный словарь типовых блоков для B2B-главной и продуктовых страниц. Использовать как меню при заполнении `templates/page-brief.md` (секция 6).

**Источник.** Аудит scanfraud.com + 5 ключевых конкурентов (Seon, Sift, Forter, Signifyd, Ravelin), `projects/2026-05-07_homepage-competitor-analysis/`. Цифры в колонке «Norma» — частотность блока среди этих 5.

**Как читать колонку «Когда НЕ применять».** Это анти-паттерны. Если задача попадает под этот случай — не выбирай этот блок.

---

## Сводная таблица

| # | Block | Назначение | Norma | Сложность |
|---|-------|------------|-------|-----------|
| 01 | sticky nav | Навигация, всегда доступная | 5/5 | low |
| 02 | promo strip | Анонс launch / отчёта вверху | 4/5 | low |
| 03 | hero (split) | Value prop + CTA + визуал | 3/5 | med |
| 04 | hero (centered) | Value prop + CTA, текст по центру | 2/5 | low |
| 05 | customer logo bar | Социальное доказательство | 5/5 | low *(требует permission)* |
| 06 | value prop trio | 3 продукта/выгоды одной полосой | 4/5 | med |
| 07 | feature row | 50/50 split про один модуль | 5/5 | med |
| 08 | lifecycle tabs | Coverage по journey/стадиям | 3/5 | high |
| 09 | metrics block | 3-4 цифры в ряд | 2/5 | low |
| 10 | named customer + metric | Цитата с цифрой внутри feature row | 3/5 | low *(требует permission)* |
| 11 | industries grid | «Для каких индустрий» | 3/5 | med |
| 12 | customer story card | Один большой кейс с метриками | 5/5 | high *(требует permission)* |
| 13 | compliance bar | PCI DSS / GDPR / ISO badges | 1/5 | low *(требует verifications)* |
| 14 | resource cards | Reports / blog / events | 3/5 | low |
| 15 | faq accordion | Снятие возражений + SEO | 0/5 | low |
| 16 | cta block | Финальный призыв | 5/5 | low |
| 17 | footer | Sitemap + legal | 5/5 | low |

---

## Подробно по каждому

### 01. Sticky nav

- **Назначение.** Глобальная навигация + всегда доступный CTA.
- **Визуал.** 60-80px fixed header, blur background, brand слева, 5-7 хабов центр, 1-2 CTA + theme toggle справа.
- **Контент.** Меню, brand, CTA labels.
- **Ассеты.** Logo SVG. Иконка theme toggle (sun/moon).
- **Когда применять.** Всегда. Без вариантов.
- **Когда НЕ применять.** Никогда не пропускать.
- **Примеры.** Все 5 конкурентов; existing scanfraud.com.

---

### 02. Promo strip

- **Назначение.** Узкая полоска над nav. Анонс launch, отчёта, конференции.
- **Визуал.** Полоса 36-44px высотой, контрастный фон, dismissable (×).
- **Контент.** 1 строка + ссылка «Learn more».
- **Ассеты.** Иногда иконка слева.
- **Когда применять.** Запуск нового продукта, выход отчёта, ивент. Временно.
- **Когда НЕ применять.** Постоянно — теряет внимание. Если есть 2+ promo — не делать (Signifyd-проблема).
- **Примеры.** Sift (G2 award), Forter (Agentic Commerce), Ravelin (Agentic Report 2026).

---

### 03. Hero (split)

- **Назначение.** Value prop + CTA + визуальное доказательство «продукт реальный».
- **Визуал.** 50/50 split. Текст слева (eyebrow / H1 / subtitle / 1-2 CTA). Визуал справа.
- **Контент.** Eyebrow (≤8 слов), H1 (≤9 слов), subtitle (≤25 слов), 1-2 CTA.
- **Ассеты.** **Реальный product UI mockup лучше всего** (наш паттерн + Ravelin). Lifestyle-фото и абстракции — слабее (Forter / Signifyd).
- **Когда применять.** На главной, на продуктовых hub-страницах.
- **Когда НЕ применять.** Если product UI не готов. Тогда → centered hero.
- **Примеры.** Sift, Forter (split с lifestyle), Ravelin (split с product UI), наш текущий scanfraud.

---

### 04. Hero (centered)

- **Назначение.** Когда визуал не критичен. Value prop в центре экрана.
- **Визуал.** Центрированный текст. Опционально — animated background или абстракция.
- **Контент.** То же что split hero.
- **Ассеты.** Минимум. Animated dots / gradient.
- **Когда применять.** Когда нет product UI или хотим минимализм. Inner pages.
- **Когда НЕ применять.** На главной B2B-сайта — теряется опора на product proof.
- **Примеры.** Seon (центрирован с animated visual), Signifyd.

---

### 05. Customer logo bar

- **Назначение.** Социальное доказательство в 1 секунду.
- **Визуал.** Горизонтальная полоса 6-12 logos, монохром grayscale, hover до цвета. Eyebrow «TRUSTED BY».
- **Контент.** Eyebrow + лого.
- **Ассеты.** Logos с разрешением на публикацию.
- **Когда применять.** Сразу под hero. На любой коммерческой странице.
- **Когда НЕ применять.**
  - Нет permission на лого — не делать. Лучше альтернатива: текст с цифрой («Powering N+ providers across M countries»).
  - Если у нас 1-2 лого — не делать (выглядит как pre-launch).
- **Примеры.** Seon, Sift («700+ Global Brands»), Signifyd, Ravelin. У нас сейчас НЕТ.

---

### 06. Value prop trio

- **Назначение.** Показать 3 ключевых продукта/value prop одной горизонтальной полосой. Скан-friendly.
- **Визуал.** 3-col grid. Каждая колонка: иконка + heading + 1-line desc + ссылка «Learn more».
- **Контент.** 3 названия, 3 описания (≤15 слов), 3 ссылки.
- **Ассеты.** 3 lucide-иконки или illustrations.
- **Когда применять.** На главной, как «оглавление» продуктов перед углублением.
- **Когда НЕ применять.** Если у нас 1 продукт. Если уже есть feature rows — может быть дублем (наша исходная проблема).
- **Примеры.** Seon (3 platform cards), Sift, Forter (Fraud / Payments / Agentic), Signifyd (3 региональных tiles).

---

### 07. Feature row

- **Назначение.** Глубокое описание ОДНОГО модуля. Используется в серии (3-4 row).
- **Визуал.** 50/50 split. Текст с heading + 3-4 sub-features (heading + 1-line body each) одной стороной + product UI mockup другой. Reverse через одну для ритма.
- **Контент.** Eyebrow номер, H3, tagline, body, 3-4 sub-features. Опционально — customer cite (см. блок 10).
- **Ассеты.** Per row — UI mockup или illustration.
- **Когда применять.** Когда нужно показать 2-3 модуля с одинаковой глубиной описания.
- **Когда НЕ применять.** Если у тебя 5+ модулей — слишком длинно, лучше 3-col grid.
- **Примеры.** Sift («The Sift Difference» × 3), Forter (× 6), наш existing scanfraud (× 3).

---

### 08. Lifecycle tabs

- **Назначение.** Показать coverage по customer journey / payment lifecycle. «У нас всё покрыто».
- **Визуал.** Горизонтальные tabs или vertical tabs с right-side detail panel. 5-6 этапов.
- **Контент.** Per tab — название этапа + 1-2 предложения + опционально иконка.
- **Ассеты.** Опциональны иконки per tab.
- **Когда применять.** Когда у продукта есть явный sequence (onboarding → checkout → post-transaction). Полезно как trust-signal «не оставляем дыр».
- **Когда НЕ применять.** Если modules независимы и порядок не важен. Если на mobile нет accordion-fallback (плохо скроллится).
- **Примеры.** Seon (6-step lifecycle carousel), Sift (5-tab consumer journey), Ravelin (6-tab use cases + 5-tab differentiators).

---

### 09. Metrics block

- **Назначение.** 3-4 ключевые цифры в ряд. Поддержка proof story.
- **Визуал.** Horizontal row, animated counters, large number + suffix + label под.
- **Контент.** Per stat: number, suffix, 1-line label (≤12 слов).
- **Ассеты.** Никаких.
- **Когда применять.** Один блок на странице. Если есть customer cite с цифрами — лучше в feature row, не в отдельном блоке.
- **Когда НЕ применять.** **Не делать 2 metrics-блока на одной странице** (наша исходная ошибка). Если цифры не подтверждены — не публиковать.
- **Примеры.** Sift (3 stats), Forter (×2), Seon (inline в copy). Наш existing — есть, но дублировался.

---

### 10. Named customer + metric (вшито в feature row)

- **Назначение.** Customer-цитата с hard-метрикой ВНУТРИ feature row, не в отдельном блоке. Самый сильный proof-механизм.
- **Визуал.** Внутри feature row: после описания фичи — quote + customer logo + имя/роль + цифра выделена.
- **Контент.** Цитата (≤25 слов) + имя + роль + customer + 1 метрика.
- **Ассеты.** Customer logo. Иногда фото.
- **Когда применять.** Когда есть permission на customer-цитату. Один cite на 3 feature row достаточно.
- **Когда НЕ применять.** Без permission. Без подтверждённой цифры. Без имени человека.
- **Примеры.** Sift (Harry's «85% chargeback drop»), Forter (Wayfair/Instacart inline), Seon (industry tab cards). У нас сейчас НЕТ.

---

### 11. Industries grid

- **Назначение.** «Для каких индустрий мы». Точка входа в industry hub.
- **Визуал.** 3-col × 2 row (или 2-col × 3 row на mobile). Per cell: иконка + название + 1-line + arrow link.
- **Контент.** 6 industries × (название, 1-line desc, ссылка).
- **Ассеты.** 6 lucide-иконок (по одной per industry).
- **Когда применять.** Когда есть multi-vertical хаб со страницами. Для high-risk audience особенно важен — показывает что мы их vertical понимаем.
- **Когда НЕ применять.** Если фокус на одной vertical. Если сегментация по geo вместо vertical (Signifyd-паттерн).
- **Примеры.** Seon (5-tab industries с case studies), Signifyd (geo вместо vertical), Ravelin (6-tab use cases). У нас НЕТ на главной, но есть hub `industries.html`.

---

### 12. Customer story card

- **Назначение.** Один яркий клиентский кейс с метриками. Углубление proof-story.
- **Визуал.** Широкая карточка во весь грид. 60/40 split: логотип + headline metric (большим шрифтом) + цитата + автор слева; 3-4 secondary metrics + ссылка на full case study справа.
- **Контент.** Headline metric + цитата + customer + автор + 3 secondary metrics + CTA.
- **Ассеты.** Customer logo, опционально фото.
- **Когда применять.** Когда есть permission на детальный кейс. Размещать после product features, перед CTA.
- **Когда НЕ применять.** Без permission. Если кейс < 3 месяцев — слишком сырой. Aggregate-кейс («across our clients…») допустим как fallback.
- **Примеры.** Все 5 конкурентов делают вариацию. У нас НЕТ.

---

### 13. Compliance bar

- **Назначение.** PCI DSS / GDPR / ISO 27001 / SOC 2 / PSD2. Trust для регулируемых ICP.
- **Визуал.** 4-5 col grid. Per cell: badge/иконка + standard name + 1-2 sentence объяснение «что это значит».
- **Контент.** Per standard: name + объяснение.
- **Ассеты.** Иконки или badges (часто standard graphics).
- **Когда применять.** Для regulated B2B-аудитории (PSP, EMI, банки). Когда certs реально подтверждены.
- **Когда НЕ применять.**
  - **Для high-risk merchant audience — НЕ применять.** Compliance-pitch напоминает о mainstream-вендорах, которые их выгнали «по compliance». Контр-продуктивно.
  - Без подтверждённых certs. Никогда не публиковать неподтверждённое.
- **Примеры.** Ravelin (детальный с описаниями — единственный из 5 конкурентов). У нас спрятан на `/security`.

---

### 14. Resource cards

- **Назначение.** Reports / blog / events / case studies. Lead-gen surface + SEO.
- **Визуал.** 3-card grid. Per card: image + type tag + heading + ссылка.
- **Контент.** 3 ресурса. Заголовки актуальные.
- **Ассеты.** 3 cover images.
- **Когда применять.** Когда есть контент-машина и регулярные publications. На главной — 3 latest.
- **Когда НЕ применять.** Если контент полупустой или старый — лучше не показывать.
- **Примеры.** Sift (3 reports), Signifyd (mixed formats), Ravelin (mixed). У нас есть `resources.html` хаб.

---

### 15. FAQ accordion

- **Назначение.** Снятие возражений + SEO (rich snippets через FAQPage schema).
- **Визуал.** Accordion в 1 колонку. Шевроны раскрытия. 6-8 вопросов.
- **Контент.** Per Q: вопрос + ответ ≤60 слов.
- **Ассеты.** Никаких.
- **Когда применять.** На pricing / product-deep-dive / detailed pages. **Не на homepage** — индустрия не делает (0/5).
- **Когда НЕ применять.** На homepage если хочешь следовать индустрии. Если ответы дублируют другие секции.
- **Примеры.** 0/5 конкурентов на homepage. На pricing-страницах — повсеместно.

---

### 16. CTA block

- **Назначение.** Финальный призыв перед footer.
- **Визуал.** Полногрид centered блок. Eyebrow + H2 + subtitle + 1-2 CTA. Опционально — animated background.
- **Контент.** Eyebrow (≤4 слов), H2 (≤8 слов), subtitle (≤30 слов), 1-2 CTA.
- **Ассеты.** Опционально — animated dots или gradient.
- **Когда применять.** Всегда в конце страницы. Не пропускать.
- **Когда НЕ применять.** Никогда не пропускать.
- **Примеры.** Все 5 конкурентов. У нас существующий.

---

### 17. Footer

- **Назначение.** Sitemap + legal + brand info.
- **Визуал.** 3-4 col ссылок + brand col + bottom bar (legal links + ©).
- **Контент.** Все секции сайта в виде ссылок + privacy/terms/cookies.
- **Ассеты.** Logo.
- **Когда применять.** Всегда.

---

## Анти-паттерны (что мы выучили)

1. **Не дублировать одни и те же продукты в 4 местах.** Если у тебя есть feature rows — не нужны value prop trio + 3-col features С ТЕМИ ЖЕ продуктами. Один продукт описывается максимум в 2 формах.

2. **Не делать 2 metrics-блока на одной странице.** Один в начале или один в конце, не оба.

3. **Не пушить compliance bar для high-risk audience.** См. блок 13.

4. **Не делать customer logo bar без permission.** Текстовая альтернатива лучше пустоты, но logo wall с 1-2 лого — хуже его отсутствия.

5. **Не клонировать FAQ с homepage конкурентов** — они его не делают. На pricing — да.

6. **Не использовать lifestyle-фото в hero для technical B2B audience.** Product UI mockup в 5-10 раз сильнее.

---

## Когда добавлять блок vs не добавлять — quick decision tree

```
1. Решает ли блок один из 3-5 вопросов посетителя из brief.секция 3?
   ├─ НЕТ → не добавлять
   └─ ДА → 2

2. Есть ли у нас все ассеты для этого блока?
   ├─ НЕТ → искать альтернативу или не добавлять
   └─ ДА → 3

3. Не дублирует ли он информацию из другого блока на той же странице?
   ├─ ДА → не добавлять или объединить
   └─ НЕТ → 4

4. Подходит ли он для нашего ICP (high-risk vs mainstream)?
   ├─ НЕТ → не добавлять
   └─ ДА → добавляем
```

---

*Версия каталога: v1 · 2026-05-07*
*Источник: `projects/2026-05-07_homepage-competitor-analysis/`*
