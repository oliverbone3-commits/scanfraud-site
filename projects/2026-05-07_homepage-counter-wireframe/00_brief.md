# Homepage Counter-Wireframe — Brief

**Date:** 2026-05-07
**Owner:** Dmitry
**Driver agent:** UX Architect (+ Brand Guardian для FAQ)
**Workflow:** #3 Design Iteration (только spec, без правок index.html)

---

## Контекст

PM прислала вайрфрейм-предложение по редизайну главной (Balsamiq-стиль).
Перед тем как уходить в верстку, делаем контр-предложение, чтобы предметно обсудить с PM альтернативный вариант.

## Что было в макете PM

Структура (сверху вниз):
1. **Hero** — split: H1 «Pure Traffic. No Friction.» + 3 буллета слева | большая форма с полями `Title / First name / Middle name / Last name / Suffix` справа
2. **Industry strip #1** — `PSP / EMI / Cripto / High Risk / BIN Sporsors / Acquirer`
3. **Feature block A** — placeholder картинка слева | «Uninterrupted Payment Flow» + 4 буллета справа
4. **Feature block B** — «Fast go-to-market» + 3 буллета слева | placeholder картинка справа
5. **Industry strip #2** — `P2P / Ecom / AMP`
6. **Feature block C** — placeholder картинка слева | «Risk Ops Solution» + 4 буллета справа
7. **FAQ** — секция с шевронами (контент обещан позже)
8. Footer

## Проблемы в макете PM

| # | Проблема | Почему критично |
|---|----------|-----------------|
| 1 | 5-полевая форма с middle name/suffix в герое | Конверсия-убийца. Похоже на дефолт Balsamiq, не лид-капча. C-level не оставляет middle name за value prop, который ещё не показан. |
| 2 | Две полоски индустрий с разными таксономиями | Смешаны типы клиентов (PSP/EMI/Acquirer/BIN Sponsors), вертикали (Crypto), risk-категории (High Risk), бизнес-модели (P2P/Ecom). Разные сущности в одной плоскости — путает. |
| 3 | Дубликат буллетов в hero и в feature block A | «No-code Rule Engine» и «Advanced Case Management» повторяются. Сигнал: нет иерархии value prop. |
| 4 | Однообразная структура (4 одинаковых image+bullets блока) | Нет визуального ритма. У текущего сайта 4 разных паттерна секций (cards / stats / feature rows / metrics). |
| 5 | Опечатки: Cripto, Sporsors, Advansed | Не корректура — но индикатор недоработки макета. |
| 6 | Нет stats / proof points | Существующий сайт даёт `+15%`, `3 days`, `100+`, `99.9%` — это главный B2B-аргумент. У PM этого нет. |
| 7 | Нет финального CTA-блока | После FAQ пользователь уходит в footer без призыва. |
| 8 | Потеря визуальной идентичности | Текущий сайт: dark тема, animated dots, dashboard preview, isometric SVG. Макет PM — generic SaaS template. |

## Что берём из макета PM

**Только FAQ-секция.** Это единственное добавление, которого нет на текущей главной и которое реально полезно (SEO + снятие возражений).

Решение: вписать FAQ в существующую структуру, перед финальным CTA.

## Цели контр-предложения

1. **Сохранить текущие сильные стороны** — dashboard preview, metrics, isometric SVG cards, dual-theme.
2. **Добавить FAQ** в правильное место (перед CTA), с реальным B2B-контентом.
3. **Дать PM альтернативу с обоснованием** каждой секции — не просто «нет», а «вот почему это лучше».
4. **Не менять навигацию и footer** — они общие для всех 21 страниц.
5. **Не править index.html** — только spec. Если предложение принимаем — заводим отдельную задачу на верстку.

## Ограничения

- Все решения — в рамках design system из CLAUDE.md (CSS variables, существующие паттерны секций).
- Контент опирается на CONTENT-PLAN.md как источник истины, не выдумываем.
- Тон — B2B, конкретика, без «революционности».
- Английский для копирайта, русский для документа.

## Ожидаемые артефакты

```
projects/2026-05-07_homepage-counter-wireframe/
├── 00_brief.md                  ← этот файл
├── 01_current-site-audit.md     ← карта секций текущей главной
├── 02_structure-proposal.md     ← посекционная раскадровка (главный документ для PM)
├── 03_faq-content.md            ← черновик 6-8 FAQ с ответами
└── 04_summary.md                ← сводка для Дмитрия
```

## Следующий шаг

Аудит текущего index.html → карта секций с тем, что каждая решает. Без этого нельзя строить контр-предложение.
