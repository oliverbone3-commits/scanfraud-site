# Summary — Homepage Competitor Analysis

**Для Дмитрия, кратко.**

## Что в папке

```
projects/2026-05-07_homepage-competitor-analysis/
├── 00_brief.md                       — задача, скоуп, конкуренты
├── 01_pattern-matrix.md              — таблица «секция × конкурент»
├── 02_block-by-block.md              ★ ГЛАВНЫЙ для PM
├── 03_summary.md                     — этот
└── research/
    ├── seon.md                        — Seon homepage audit
    ├── sift.md                        — Sift homepage audit
    ├── forter.md                      — Forter homepage audit
    ├── signifyd.md                    — Signifyd homepage audit
    ├── ravelin.md                     — Ravelin homepage audit
    └── scanfraud-current.md           — расширенный аудит scanfraud.com
```

## 5 главных выводов из research

1. **5/5 конкурентов имеют customer logo proof bar под hero. У нас — НЕТ.**
   Это самый базовый B2B-элемент. Без него главная читается как pre-launch.

2. **3/5 конкурентов вшивают named customer + hard number прямо в feature row** (Sift с Harry's «85% chargeback drop» — эталон). У нас — НЕТ. Все feature rows звучат как пресс-релиз.

3. **3/5 конкурентов имеют industries grid на homepage.** У нас есть `industries.html` хаб с 6 страницами, но на главной нет ни одной точки входа в него. Разрыв IA.

4. **Compliance bar (PCI DSS, GDPR, PSD2, ISO 27001) есть только у Ravelin** — но для нашего ICP (PSP/EMI) compliance входит в топ-3 критериев выбора. Сейчас спрятан на `/security`.

5. **FAQ нет ни у одного из 5 конкурентов на homepage.** Наша рекомендация в предыдущей задаче добавить FAQ — была реакцией на PM, не на индустрию. Решение: оставить FAQ как наше осознанное решение (мы меньший игрок, больше типовых вопросов), но это уже не «индустриальная норма», а наш выбор.

## Что у нас уже сильнее, чем у конкурентов

- **Dual theme (dark+light)** — никто из 5 не делает. Сильный визуал.
- **Real product UI в hero** (наш Hero Monitoring Dashboard) — только Ravelin делает похоже. Forter/Signifyd показывают lifestyle-фото, Sift — абстракцию.
- **Глубокие feature rows** с 3-4 sub-features (heading+body) — ни у кого из 5. У них 1-2 строки на row. Наш паттерн лучше для технического читателя.
- **Isometric stack-SVG в 3-col features** — оригинальный визуал, не стоковые иконки.

## Net diff текущая → предлагаемая

```
                          NEW              REMOVED          REVISED
Customer logo bar         ★ +1
Customer cite в row 01    ★ +1 (внутри)
Industries grid           ★ +1
Customer story card       ★ +1
Compliance bar            ★ +1
FAQ                       ★ +1
                          —————————        —————————
                          +6                                  
Carousel → Lifecycle tabs                                   ~1 (paradigm shift)
Stats консолидация                          -1 (объединение Block 5+14)
Proof bar дубль продуктов                   -1 (Block 3 удаляем)
2-col row 2                                 -1 (Block 13 удаляем)
                                            —————————
                                            -3
```

**Итого:** 16 предлагаемых блоков vs 15 текущих (+1 чистый прирост, но другое распределение содержания).

## Ключевые блокеры для PM (что нужно подготовить)

| Блок | Что нужно | Без чего НЕ верстаем |
|------|-----------|-----------------------|
| 03. Logo proof bar | 6-12 customer logos с permission ИЛИ текстовую альтернативу | Главный блокер — без него секцию пропускаем |
| 06. Customer cite в feature row | 1 quote + цифра + permission | Можно без, но это самая большая «упущенная мощность» |
| 14. Customer story card | 1 hero case с metrics + permission | Можно временно скрыть |
| 15. Compliance bar | Список реально подтверждённых стандартов | Не показывать неподтверждённое |
| 16. FAQ | Подтверждение 8 вопросов из предыдущей задачи | Можно отложить — независимо |

**Ключевое:** 4 из 5 блокеров — это **«нужны permission/факты от клиентов»**. Не дизайн-решения. Это разговор PM ↔ Sales/Customer Success, не PM ↔ дизайн-команда.

## Что показать PM

**Открыть в порядке:**
1. `02_block-by-block.md` — главный документ. TL;DR в начале даёт сразу картину.
2. `01_pattern-matrix.md` — таблица «у кого что есть». Если PM сомневается в каком-то добавлении — пусть посмотрит, кто из конкурентов это делает.
3. `research/[имя].md` — конкретный конкурент, если будет точечный спор.

**Talking points:**
- «5 из 5 конкурентов делают customer logos под hero — мы единственные без них. Это не моё мнение, это аудит индустрии.»
- «Sift делает customer-цитаты с цифрами прямо в feature rows — это сильнее, чем наши абстрактные буллеты. Нам нужен 1 такой quote.»
- «Industries есть на отдельных 6 страницах, но с главной нет ни одной ссылки. Это разрыв IA — пользователь в индустрии не понимает, что мы про него.»
- «Compliance — для PSP/EMI это критерий выбора в топ-3. Сейчас спрятан. Нужно вытащить.»
- «PM была права про FAQ как полезную вещь, но при этом ни у одного конкурента FAQ на главной нет. Мы делаем — но как осознанное наше решение, не следование тренду.»

## Если PM начнёт спорить

| PM скажет | Ответ из research |
|-----------|---------------------|
| «Зачем нам industries grid если есть отдельный хаб» | Все 3/5 конкурентов имеют industries на homepage даже при наличии хаба. Хаб без точки входа = разрыв IA. |
| «Forter делает один CTA — нам тоже» | Forter — известный enterprise-бренд с 100+ employees sales. Нам нужны 2 CTA для меньшей friction. |
| «У нас и так много секций» | После предлагаемых изменений — 16 vs 15 текущих. Но содержательно богаче (минус дубли, плюс proof). Чистый прирост ясности. |
| «Compliance — это для security страницы» | Для нашего ICP (PSP/EMI) compliance — топ-3 критерий выбора. Прятать его за кликом — потеря квалифицированного трафика. |
| «FAQ нигде нет — давайте уберём» | Валидно. Это наше решение. Можем убрать без структурного ущерба, только контент-решение. |

## Дальнейшие шаги (последовательность)

1. **PM читает `02_block-by-block.md`** + (если нужно) `01_pattern-matrix.md`
2. **Договариваемся по блокерам** (logos / cite / case / compliance / FAQ)
3. **Sprint 0:** собираем blockers — это разговор PM ↔ Sales/CS, не дизайн-команда
4. **Sprint 1:** Frontend Developer строит новую главную, Content Creator пишет копий
5. **Sprint 2:** UI Designer + Brand Guardian валидируют
6. **Sprint 3:** Accessibility audit + Code review + Evidence (screenshots обоих тем + 5 breakpoints)
7. **Deploy** ручным триггером после полного прохода (per memory: `feedback_deploy_workflow`)

## Связь с предыдущей задачей

`projects/2026-05-07_homepage-counter-wireframe/` — там был быстрый «контр-вайрфрейм PM» с FAQ как единственным изменением. Этот проект — глубже: после того как мы посмотрели на индустрию, **рекомендация из 1 изменения превращается в 6 изменений** (logo bar + cite + industries + story + compliance + FAQ). FAQ-контент из той задачи (`03_faq-content.md`) переиспользуется без изменений.
