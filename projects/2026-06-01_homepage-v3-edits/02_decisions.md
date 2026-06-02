# Финальные решения PM перед имплементацией (2026-06-01)

## По первой итерации (структура)
1. **PRODUCTS:** заголовок секции + **4 ряда** (Rule Engine, Payment Routing, Case Management, Fast GTM). H2 subtitle поправить с «3 rows».
2. **WHY SCANFRAUD:** 6 карточек, асимметричный layout, project-style borders.
3. **STATS:** 3 counter (<300ms / 3 days / 99.9%).
4. **HERO Lead form:** НЕ делаем. Hero остаётся центрированный + Three.js dots.
5. **Row 01 bullets:** два раздельных (Hybrid workflow + Velocity & geo precision). Итого 3 bullets в Row 01.
6. **Row 03 eyebrow:** CAPS — «03 — ADVANCED CASE MANAGEMENT».

## По второй итерации (контент и layout)
1. **HERO copy:** берём из брифа v3 целиком:
   - H1: **Pure Traffic. No Friction.**
   - Subtitle: **Real-time fraud detection and payment orchestration designed to protect revenue without blocking legitimate customers.**
   - CTA: **Book a demo** (primary) + **Explore platform** (→ /products)
2. **HERO bullets:** ДА, добавляем три bullets из брифа inline под subtitle перед CTA:
   - No-code Rule Engine
   - Advanced Case Management
   - Fast REST API Integration
3. **STATS:** с анимацией. «<» — статичный prefix, число 0→300 animate. «3» — 0→3. «99.9» — 0→99.9.
4. **WHY SCANFRAUD layout:** **Вариант B** — `grid-template-columns: 1.5fr 1fr 1fr` × 2 row. Тематические кластеры по колонкам. Подробности в `01_delta_audit.md`.
5. **INDUSTRIES footer-line:** просто текст со ссылкой на лид-форму (а не отдельная mini-CTA-секция). Текст: «If your industry isn't listed, contact us — we adapt rule sets to specific business models.» Ссылка → форма (anchor на CTA-секцию или /contact).

## Что не меняется
- NAV — без изменений.
- FOOTER — без изменений.
- Three.js dots в HERO и CTA — переиспользуем existing.
- Тема (dark default + light toggle) — без изменений.

## Что Frontend Developer должен сделать

Имплементация в `index.html`:
1. Сохранить NAV/FOOTER без изменений.
2. HERO — переписать копи (H1, subtitle, 3 bullets, 2 CTA), удалить hero-monitor-mockup + связанный link на `hero-monitor.css`.
3. **Добавить CLIENT TICKER** (новая секция после HERO, text-only auto-scroll: PSP / EMI / Crypto / High Risk / BIN Sponsors / Acquirer).
4. **Удалить:** PROOF BAR (если есть), FEATURE CAROUSEL, верхний дубль STATS, 3-COL FEATURES с isometric SVG, обе строки 2-COL CARDS.
5. PRODUCTS — section header + 4 feature rows. Row 02 и Row 04 — reversed. Копии из брифа.
6. **Добавить WHY SCANFRAUD** (новая секция, layout B, 6 карточек).
7. STATS — 3 counter с анимацией.
8. **Добавить INDUSTRIES grid** (6 карточек, ссылки на industry-pages) + footer-line с ссылкой на форму.
9. CTA — обновить копию (H2: «Stop fraud. Protect revenue. Launch in 3 days.», subtitle + 2 CTA).
10. Все новые стили — **inline `<style>`**, не в shared.css.
11. Обе темы (dark + light) — обязательно.
12. 5 breakpoints (1280 / 1024 / 900 / 768 / 480) — учесть в новых секциях.
