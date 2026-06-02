# Homepage Competitor Analysis & Block-by-Block Structure — Brief

**Date:** 2026-05-07
**Owner:** Dmitry
**Lead agent:** UX Architect (синтез) + Brand Guardian / SEO / Content Creator (research-валидация)
**Sub-agents:** 5 parallel general-purpose research workers

---

## Зачем

PM прислала вайрфрейм, который структурно слабее текущего scanfraud.com и не опирается ни на один индустриальный паттерн. Нам нужен **базовый, доказательный документ**: «вот как делает индустрия, вот что у нас, вот наша обоснованная структура». Без этого диалог с PM продолжит идти по кругу.

Цель: дать PM (и команде) единственный источник истины по структуре главной. Документ должен:
1. Опираться на реальные паттерны 5 ключевых конкурентов
2. Сверяться с тем, что уже есть на scanfraud.com
3. Заканчиваться **block-by-block** спецификацией: каждый блок = цель + контент + визуал-паттерн + копий

## Скоуп

### Что делаем
- Research-обзор 5 конкурентов: Seon, Sift, Forter, Signifyd, Ravelin
- Аудит current scanfraud.com (расширенный)
- Pattern matrix (секция × конкурент)
- **Block-by-block структура главной** (★ главный делив)
- Сводка для Дмитрия

### Что НЕ делаем
- Не правим index.html (только spec)
- Не обновляем CONTENT-PLAN.md (отдельная задача)
- Не делаем v2 wireframe (если понадобится — отдельный заход)
- Не анализируем продуктовые страницы конкурентов (только homepage)

## Конкуренты — почему именно эти

| # | Конкурент | URL | Почему важен |
|---|-----------|-----|--------------|
| 1 | **Seon** | seon.io | Самый близкий по позиционированию: fraud + KYC + risk для PSP/fintech, EU-родина, модульный |
| 2 | **Sift** | sift.com | Большой US-enterprise игрок, эталон ML-driven fraud detection |
| 3 | **Forter** | forter.com | E-commerce / merchant focus, real-time decisioning |
| 4 | **Signifyd** | signifyd.com | Chargeback guarantee model, SMB+ merchants |
| 5 | **Ravelin** | ravelin.com | UK-based, размер ближе к нашему, payment fraud + 3DS |

Не берём (по решению Dmitry): Riskified, Kount, Stripe Radar, Sumsub.

## Глоссарий блоков (унифицированный язык research)

Чтобы все 5 sub-agents использовали одни термины:

| Term | Что означает |
|------|--------------|
| `hero` | Первый экран: H1 + subtitle + CTA + визуал |
| `proof bar` | Полоска с лого клиентов / индустрий / партнёров |
| `value prop trio` | 3 (или 3+) карточки с product pillars сразу после hero |
| `feature row` | 50/50 split: визуал + текст с буллетами, обычно про один модуль |
| `metrics block` | Полоса с цифрами (counters, % uplift) |
| `industries grid` | Карточки/иконки отраслей |
| `integration logos` | Лого технических интеграций / партнёров |
| `case study` | Кейс конкретного клиента: лого + цитата + цифра |
| `testimonial` | Цитата без жёсткой привязки к кейсу |
| `comparison table` | Сравнение с конкурентами или с предыдущим инструментом |
| `resource cards` | Блог / отчёты / гайды |
| `compliance bar` | Иконки SOC2 / PCI DSS / GDPR / ISO |
| `faq` | Аккордеон вопросов |
| `cta block` | Финальный призыв перед footer |
| `secondary nav` | Sub-nav под hero (anchor links по странице) |

## Шаблон для research-репортов sub-agents

Все 5 отчётов должны иметь идентичную структуру (упрощает синтез):

```markdown
# [Competitor] — Homepage Audit

## Snapshot
- URL fetched: ...
- Date fetched: 2026-05-07
- Positioning (1 sentence):
- Target audience (ICP):
- Visual identity (1 line):
- Theme (light/dark/both):

## Block-by-block

### Block N: [Type from glossary]
- Position: above-fold / mid / bottom
- Visual pattern: ...
- Copy excerpt (≤15 words verbatim, в кавычках):
- Notable: ...

[повторяется для каждой секции]

## Patterns to learn from (3-5 пунктов)
- ...

## Patterns to skip (3-5 пунктов)
- ...

## Notable copy patterns
- Eyebrow words used:
- H1 length (words):
- CTA labels (verbatim):
- Bullet count per feature:
```

## Ограничения

- WebFetch может не получить динамический контент — фиксируем что увидели
- Не цитируем больше 15 слов из любого конкурента (copyright)
- Документ — для внутреннего использования и для PM, не публичный
- Английский для копирайт-черновиков, русский для документа

## Финальный делив для PM

`02_block-by-block.md` должен быть таким, чтобы PM:
1. Прочитала
2. Не задала «а почему вот это так»
3. Согласилась с структурой
4. Дала ОК на верстку

То есть каждое решение должно быть подкреплено: «вот у [Seon, Sift] это есть в таком виде, у нас (или отсутствует) — добавляем/оставляем».

## Дальнейшие шаги (если структура принята)

1. PM ОК → апдейтим CONTENT-PLAN.md под новую структуру
2. Завести задачу: Frontend Developer строит обновлённую главную
3. Workflow #1 (New Page) — все агенты по цепочке
4. Деплой ручным триггером
