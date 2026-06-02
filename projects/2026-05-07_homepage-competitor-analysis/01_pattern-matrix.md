# Pattern Matrix — секция × конкурент

Сводная таблица: какие блоки используются на homepage у каждого из 5 конкурентов и у нас. Источник — `research/*.md`. Цель — увидеть индустриальные нормы и наши пробелы.

## Легенда

- ✅ — есть, в явном виде
- 🟨 — есть, но в нестандартной форме / частично
- ❌ — отсутствует
- 🆕 — наш кандидат на добавление

---

## Матрица: какие блоки есть у кого

| Block (по глоссарию) | Seon | Sift | Forter | Signifyd | Ravelin | **ScanFraud (now)** | **Норма** |
|----------------------|:----:|:----:|:------:|:--------:|:-------:|:-------------------:|:---------:|
| Sticky nav | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | 5/5 |
| Promo top strip | ❌ | ✅ | ✅ | ✅ | ✅ | ❌ | 4/5 |
| Hero (split или center) | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | 5/5 |
| Hero secondary CTA | ❌ | ❌ | ❌ | ❌ | ❌ | ✅ | 0/5 (мы аутсайдеры) |
| Hero — реальный product UI как визуал | 🟨 | ❌ | ❌ | ❌ | ✅ | ✅ | 2/5 |
| **Customer logo proof bar** | ✅ | ✅ | 🟨 (inline) | ✅ | ✅ | ❌ | **5/5 — мы пропускаем** |
| Value prop trio (3 продукта) | ✅ | ✅ | ✅ | ✅ | ❌ | ✅ (3 раза) | 4/5 |
| Lifecycle / customer-journey timeline | ✅ (6 шагов carousel) | ✅ (5 tabs) | ❌ | ❌ | ❌ | 🟨 (carousel есть) | 2/5 |
| Tabbed widget для use cases / differentiators | 🟨 (industries tabs) | ✅ (lifecycle tabs) | ❌ | ❌ | ✅ (6+5 tabs) | ❌ | 3/5 |
| Differentiator section («why us») | ✅ | ✅ | ✅ | 🟨 | ✅ | 🟨 (section header reframing) | 4/5 |
| Feature rows (split) | ✅ | ✅ (×3) | ✅ (×6) | ✅ | ✅ | ✅ (×3) | 5/5 |
| Bullet lists в feature rows | ❌ | ❌ | ❌ | 🟨 | ❌ | ✅ (3-4 per row) | **0/5 (мы уникальны)** |
| **Named customer + hard number в feature row** | ✅ | ✅ | ✅ | ❌ | 🟨 | ❌ | **3/5 — мы пропускаем критичное** |
| Standalone metrics block | ❌ | ✅ (3 stats) | ✅ (×2) | ❌ | ❌ | ✅ (×2) | 2/5 |
| **Industries grid / segmentation** | ✅ (tabs + cases) | 🟨 (нет на главной) | ❌ | ✅ (geo) | ✅ (use-case tabs) | ❌ | **3/5 — мы пропускаем** |
| Case study карточка | ✅ (внутри industries) | ✅ (analyst award) | ✅ (carousel) | ✅ (analyst quote) | ✅ (resource cards) | ❌ | **5/5 — мы пропускаем** |
| Testimonial без кейса | ❌ | ✅ (внутри feature rows) | ✅ (carousel) | ❌ | ❌ | ❌ | 2/5 |
| **Compliance / certifications bar** | ❌ | ❌ | ❌ | 🟨 (awards) | ✅ (детальный) | ❌ | **1/5 — но критично для PSP-рынка** |
| Awards / analyst recognition | 🟨 | ✅ | 🟨 | ✅ | ❌ | ❌ | 3/5 |
| Resource cards (reports/blog) | ❌ | ✅ | 🟨 (live data) | ✅ | ✅ | ❌ | 3/5 |
| Integration logos | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | 0/5 |
| Comparison table (vs конкурентов) | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | 0/5 |
| Pricing teaser | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | 0/5 |
| **FAQ** | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | **0/5** |
| Final CTA block | ✅ | ✅ | ✅ (×2) | ✅ | ✅ | ✅ | 5/5 |
| Footer | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | 5/5 |

## Что вытекает из матрицы

### Критичные пробелы (где индустрия 4-5 из 5, а мы 0)

1. **Customer logo proof bar** — 5/5 конкурентов делают. Мы НЕТ. Это самый базовый B2B-элемент, отсутствие которого подрывает доверие. Вопрос: какие лого можем показать?
2. **Named customer + hard number в feature row** — 3/5 (Sift, Forter, Seon). Sift с «Harry's: 85% chargeback drop» — эталонный пример. Без этого все наши feature rows звучат как пресс-релиз.
3. **Case study карточка** — 5/5 конкурентов имеют хотя бы одну. Может быть в industries или в resources, но обязательно есть.
4. **Industries grid с реальной сегментацией** — 3/5. У нас есть `industries.html` хаб, но на главной нет даже намёка.

### Важные пробелы (где 3/5 и тренд)

5. **Compliance bar** — Ravelin делает с описаниями, у Signifyd awards. Для PSP/банков/EMI compliance — топ-3 критерий выбора. Один блок с PCI DSS / GDPR / PSD2 / SOC2 закрыл бы существенный gap.
6. **Resource cards** — 3/5. SEO + lead-gen двойная польза. Можно отложить, если контент-машина не готова.

### Что у нас есть, а у других нет (наши преимущества)

- **Dual theme** — никто не делает. Сильный визуал.
- **Bullet lists в feature rows** — 0/5 конкурентов. Мы единственные. Делает текст сканируемым для технического читателя. Сохранять.
- **Реальный product UI в hero** — 2/5 (мы + Ravelin). Сильное преимущество vs Sift/Forter/Signifyd, которые показывают абстракцию или lifestyle.

### Откровения от матрицы

- **FAQ нет ни у одного из 5.** Наша рекомендация добавить FAQ в предыдущей задаче была реакцией на PM, но это не индустриальная норма для homepage. Это либо отличает нас (плюс), либо усиливает «smaller player» сигнал (минус). Решение — **сохранить FAQ в плане, но как наш осознанный выбор**, не «потому что так делают все».
- **Pricing teaser** — никто не делает на homepage. Наш CONTENT-PLAN тоже не предлагает pricing. Согласовано.
- **Comparison table** — никто не делает (политически рискованно). Не делаем.
- **Hero secondary CTA** — мы единственные. Это не плохо, но если хотим Forter-style discipline — стоит обдумать. Для меньшего игрока (мы) обычно полезно дать второй путь («Explore platform») — оставляем.

## Топ-5 решений, которые матрица диктует

| # | Решение | Обоснование |
|---|---------|-------------|
| 1 | **Добавить customer logo proof bar** под hero | 5/5 индустрии. Без логов главная выглядит как pre-launch. Нужны 6-12 лого. |
| 2 | **Добавить customer story с цифрой в feature rows** (хотя бы 1 из 3) | 3/5 индустрии. Sift-pattern. Нужен 1 кейс с метрикой. |
| 3 | **Добавить compliance bar** (PCI DSS / GDPR / PSD2 / ISO 27001 / SOC2) | Ravelin-pattern. Для нашего ICP (PSP/EMI) compliance — критерий выбора. |
| 4 | **Добавить industries grid** (со ссылками на industries.html) | 3/5 индустрии. У нас есть хаб с 6 страницами — на главной должна быть точка входа. |
| 5 | **Удалить дубли** (carousel + proof bar Block 3 + 3-col f3 — это 3-я итерация одних продуктов) | Из аудита текущего сайта. |

Эти 5 решений — основа block-by-block структуры в `02_block-by-block.md`.
