# ANTF-857 — Итоговый отчёт по итерации

**Дата:** 2026-04-24
**Эпик:** [ANTF-857 Замена экранов веб сайта](https://coddys.atlassian.net/browse/ANTF-857) (исключая ANTF-858)
**Code Reviewer:** пройден, READY TO MERGE

---

## Что сделано

| Задача | Файл | Суть правки | Статус |
|--------|------|-------------|--------|
| [ANTF-859](https://coddys.atlassian.net/browse/ANTF-859) | `bin-checker.html` | Hero h-sub → "Stop fraud at the first 6 digits…" | ✅ |
| [ANTF-860](https://coddys.atlassian.net/browse/ANTF-860) | `dispute-resolution.html` | Eyebrow/H1/h-sub + 4 новых буллета (feature-row 01) | ✅ |
| [ANTF-861](https://coddys.atlassian.net/browse/ANTF-861) | `industries.html` | 6 industry-desc переписаны | ✅ |
| [ANTF-862](https://coddys.atlassian.net/browse/ANTF-862) | `ecommerce.html` | Hero + 5 новых буллетов (feature-row 01) | ✅ |
| [ANTF-863](https://coddys.atlassian.net/browse/ANTF-863) | `documentation.html` | Удалена DPA-карточка, grid → 3-column | ✅ |
| [ANTF-864](https://coddys.atlassian.net/browse/ANTF-864) | `transaction-monitoring.html` | Новый H1, 4 feature-row вместо 3 (Data Enrichment + Root Cause + For Review + Notifications) | ✅ |

**CONTENT-PLAN.md** обновлён для всех 6 правок (пометки `Updated 2026-04-24 — ANTF-XXX`).

## Code Review (summary)

Прогнали агентом по всем 6 файлам — вердикт **READY TO MERGE**. Проверено:
- Баланс тегов (`<ul>`/`</ul>` — 9/9 в монитринге; `<strong>` — 5/5)
- Alternation классов `.feature-row` / `.feature-row.reversed` на transaction-monitoring
- Grid-бордеры после перехода documentation.html на `card-grid-3`
- Использование CSS-переменных во всех новых inline-стилях (только `var(--bd)`, `var(--bg)`, `var(--bg2)`, `var(--t1)`, `var(--t3)`, `var(--accent)` + согласованные rgba)
- `shared.css` не трогали
- JS/theme-toggle не сломан (`#heroWrap` ссылка жива)
- Обе темы работают (dark + light)

## Рекомендации перед коммитом

1. **Evidence Collector** — прогнать скриншоты на 5 breakpoints (1440 / 1280 / 1024 / 768 / 480) в обеих темах. Особенно важно для:
   - `transaction-monitoring.html` (4 feature-rows, новый inline-визуал)
   - `documentation.html` (grid 3-column, проверить на 768px что карточки корректно схлопываются)
2. **Accessibility Auditor** — новый визуал data-enrichment card не имеет `aria-label`/`aria-hidden`. Т.к. это decorative — можно либо добавить `aria-hidden="true"` на обёртку, либо оставить как есть (согласован с существующими rule-card и graph-wrap, которые тоже без ARIA).
3. **Legal Compliance** — удаление DPA-карточки: убедиться, что ссылки на DPA нигде в legal-текстах (Privacy/Cookie/Terms) не висят как обязательные. В security.html осталось упоминание "Standard DPAs available" — оно намеренно оставлено (задача 863 трогает только documentation.html).

## Jira

Статусы в Jira не обновлял — финальное нажатие на "Move to Done" остаётся за тобой после ревью скриншотов.

## Файлы

- Этот отчёт: `projects/2026-04-24_antf-857-analysis/REPORT.md`
- Первоначальный анализ: `projects/2026-04-24_antf-857-analysis/README.md`
