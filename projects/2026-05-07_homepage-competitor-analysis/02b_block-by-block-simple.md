# ScanFraud Homepage — Block-by-Block (упрощённая, v3)

**Контекст:** ScanFraud работает с high-risk merchants (gambling, crypto, adult, regulated CBD, forex и т.п.) — теми, кому mainstream-вендоры (Sift, Forter, Signifyd) обычно отказывают. Это меняет позиционирование:
- **Не делаем** customer logos / customer story / compliance bar — нет реальных permission, и compliance-pitch контр-продуктивен для high-risk ICP
- **Делаем** упор на «we work where others refuse», прозрачность правил, скорость онбординга, отсутствие industry-rejections

**Финал — 8 блоков.** Самая короткая жизнеспособная версия.

---

## Структура

```
01  Nav (sticky)              KEEP — без описания, не меняется
02  Hero                      KEEP
03  Products (3 feature rows) KEEP — под одним H2
04  ★ Why ScanFraud           NEW — 6 benefits cards (high-risk-focused)
05  Stats                     REVISE — единый блок (было 2)
06  Industries grid           NEW — 6 cards
07  CTA                       KEEP
08  Footer                    KEEP — без описания, не меняется
```

**Что НЕ делаем (vs предыдущие версии):**
- ❌ Customer logo proof bar — нет permission, текстовая альтернатива слабее самого блока
- ❌ Customer story / case study — нет реальных кейсов с цифрами
- ❌ Compliance bar — для high-risk audience compliance-pitch отталкивает; mainstream-вендоры выгоняют high-risk merchants именно «по compliance», поэтому ставить compliance в центр — поднимать ассоциацию с этими отказами
- ❌ FAQ — 0/5 конкурентов делают; держим главную чище
- ❌ Lifecycle tabs — current carousel удаляем без замены
- ❌ Section headers ×2, 2-col cards ×2, isometric SVG features — содержательно дублируют feature rows

---

## 02. Hero
- **Что:** value prop + 2 CTA + dashboard preview справа. Animated dots fon.
- **Изменения:** none. Контент в `04_homepage-content.md`.

## 03. Products — 3 feature rows под одним H2
- **Что:** existing 3 feature rows (Rule Constructor / Traffic Flow / Case Management) объединены под общий H2.
- **Изменения:** добавить section header сверху. Без customer cite (нет permission).

## 04. ★ Why ScanFraud (NEW, ключевой блок этой версии)
- **Что:** 6 карточек преимуществ в 3-col × 2 row. Иконка + heading + 1-2 строки.
- **Зачем:** ответ на «почему вы, а не [конкурент]» — особенно остро для high-risk merchants, у которых уже был отказ от mainstream.
- **Контент:** см. `04_homepage-content.md` (6 cards, заточено под high-risk ICP)
- **Position:** **сразу после Products** — естественный переход «вот что мы делаем → вот почему именно у нас».

## 05. Stats — единый консолидированный блок
- **Что:** 4 цифры в 1 ряд, animated counters.
- **Изменения:** объединение current Block 5 (early stats) + Block 14 (late metrics) в один.

## 06. Industries grid
- **Что:** 6 industry-карточек (3-col × 2 row). Иконка + название + 1-line + ссылка на industry-страницу.
- **Зачем:** для high-risk это реально важно — пользователь сразу видит «они работают с моей вертикалью».
- **Контент:** в `04_homepage-content.md` (синхронизировано с CONTENT-PLAN).

## 07. CTA
- **Что:** existing centered блок с animated dots, 2 CTA.
- **Изменения:** none.

---

## Net diff vs current scanfraud.com

```
                          ADD             REMOVE
Why ScanFraud (Block 04)  ★ +1
Industries grid           ★ +1
                          —————————       —————————
                          +2
Proof bar (3 pillars)                     -1
Feature carousel                          -1
Stats early (дубль)                       -1
Section header ×2                         -2
3-col features (f3)                       -1
2-col cards ×2                            -2
Metrics late (дубль с Stats)              -1
                                          —————————
                                          -9
```

**Net:** -7 (current 15 → proposed 8). Это самая значительная оптимизация из всех версий. Контента БОЛЬШЕ (Benefits добавлены), секций меньше — потому что убраны дубли.

---

## Что от PM до старта верстки

| Блок | Что нужно | Без чего |
|------|-----------|----------|
| 04. Benefits — финальные 6 карточек | Согласование 6 формулировок (или предложение замен) | Можно стартовать с предложенных вариантов (см. 04_homepage-content.md) |
| 05. Stats — финальные 4 цифры | Подтверждение чисел (+15%, 300ms, 3 days, 99.9%) | Если цифры не подтверждены — заменить на «scale-style» (см. варианты в 04) |
| 06. Industries — однострочники | Согласование 6 формулировок | Можно стартовать с CONTENT-PLAN-варианта |

**Ключевое:** в этой версии **нет блокеров на customer permissions**. Это значит, что верстку можно начать в течение 1-2 дней после согласования копий.

---

## Когда и кому показывать

- **Этот документ** + `04_homepage-content.md` — основная подача PM. Структура (8 блоков) + готовый копирайт. Принять/отвергнуть на одной встрече.
- **`02_block-by-block.md` (детальная v1)** — backup, если PM/команда захотят углубиться в индустриальные паттерны (logos, customer story, compliance).
- **`research/*.md`** — на случай точечных споров типа «зачем нам industries».

---

## Дальнейшие шаги после ОК PM

1. Sprint 1 (день 1-2): Frontend Developer строит новую главную по этому spec, копий из `04_homepage-content.md`
2. Sprint 2 (день 2-3): UI Designer + Brand Guardian валидируют тон/визуал
3. Sprint 3 (день 3-4): Accessibility audit + Code review + Evidence (screenshots, обе темы, 5 breakpoints)
4. Deploy ручным триггером
