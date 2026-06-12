# Отчёт: аудит + доводка TM / RC (прерванный прогон)

**Дата:** 2026-06-12 · **Агент:** Frontend Developer · **Файлы:** transaction-monitoring.html, routing-cascading.html

## transaction-monitoring.html

### Уже сделано прерванным прогоном (проверено против explorer — всё корректно)
- 4 визуала feature-rows заменены на выбранные паны (сверены построчно с `ver-pane.active` в explorer — совпадают 1:1, обёртки ver-pane/ver-switch не утекли).
- CSS перенесён полностью: rbx-, av-, gen-/g-, gp-, cs-, dp-st, xt- + обе темы (`[data-theme="dark"]`-варианты на месте), ширины фреймов по правилу 4 (`.feature-row-visual .rbx-frame{460}`, `.ep-frame{400}`, `.xt-frame{420}` = значениям explorer; av-frame без спец-ширины — верно).
- Старые статичные мокапы (MOCK UI / ALERT / LINK GRAPH / RULE) удалены вместе с CSS — мёртвых ссылок на классы нет (grep чистый).
- JS-модуль: startAv + startGen, идемпотентные (`dataset.started`), свой IO threshold 0.3 ставит/снимает `.in-view` на `.feature-row` с `.rbx-frame`, `closest('.feature-row')`, REDUCE-ветки дают полное статичное финальное состояние.
- `@media (prefers-reduced-motion: reduce)` для av-/gen- присутствовал.
- JetBrains Mono в font-link (с весом 600 — нужен tm-term).
- Копирайт feature-rows / stats / CTA не тронут (diff против HEAD — только визуалы). nav/footer не тронуты. `aria-hidden="true"` на всех фреймах, `<button>` внутри мокапов нет.

### Исправлено/добавлено мной
- **prefers-reduced-motion для hero-терминала** (tm-term live decision stream — новая анимация в этом же uncommitted-батче, гарда не было): CSS `.tm-tx{animation:none;opacity:1}` + `.tm-pulse::before{animation:none}` в reduce-блок; в JS hero-стрима REDUCE-ветка — 6 строк рендерятся статично, интервал не запускается.
- Больше ничего: интеграция блоков была завершена корректно.

### Заголовок → блок/версия
| .feature-heading на странице | Блок explorer | Версия | Статус |
|---|---|---|---|
| Complete data enrichment per event | 25 Data Enrichment | v1 (startGen reveal) | ✓ перенесён |
| Instant root cause analysis | 13 Root Cause | v1 (av- typewriter) | ✓ перенесён |
| "For Review" strategic pipeline | 26 For Review | v1 (startGen reveal) | ✓ перенесён (заголовок страницы с прямыми кавычками vs «» в explorer — копирайт не трогали) |
| Instant notifications | 27 Notifications | v1 (startGen reveal) | ✓ перенесён |

### Пропущено
- **08 Transaction Monitoring v2 (tm- live stream)** — на странице НЕТ feature-heading «Real-time decisions on every transaction» (правило 2 плана: секции не выдумываем). Функционально роль закрывает hero-терминал tm-term (live decision stream) в сплит-hero страницы — он уже был в worktree до этого прогона (вместе с переписанным hero-копирайтом; это изменение более ранней uncommitted-сессии, не блочной интеграции).

## routing-cascading.html

### Уже сделано прерванным прогоном (проверено — всё корректно)
- 3 визуала заменены на выбранные паны (1:1 с explorer, без утечек обёрток).
- CSS полностью: rbx- (+badge.live+monPulse), gen-/g- (+wave), ep-sub(+warn), pr-, gp-, pc- (все режимы), pa-/ec-h + обе темы. Ширины: ep-frame 400 перенесён; pc-frame без правила — верно (в explorer `.rbx-frame.pc-frame{404}` перебивается `.fdr .fi .rbx-frame{460}`, правило 4: переносим только `.fdr .fi .rbx-frame.NN`-селекторы).
- Старые ROUTE MOCK / PROVIDER TABLE визуалы и CSS удалены, мёртвых классов нет.
- JS-модуль: startPc (cascade/reveal/calm) + startGen (reveal/wave/calm), идемпотентные, IO-гейтинг на `.feature-row.in-view`, REDUCE → полные статичные финалы (showAll/finish), reduce-CSS блок есть (pc--reveal/pc--seq/gen + live::before + pulse).
- Копирайт не тронут, nav/footer не тронуты, aria-hidden на фреймах, кнопок внутри мокапов нет, JetBrains Mono в font-link.

### Исправлено/добавлено мной
- Ничего — страница была доведена до конца.

### Заголовок → блок/версия
| .feature-heading на странице | Блок explorer | Версия | Статус |
|---|---|---|---|
| Route payments based on any parameter | 28 Payment Routing RC | v1 (startGen reveal) | ✓ перенесён |
| Rescue failed payments automatically | 11 Payment Cascading | v2 (startPc reveal, pc--reveal) | ✓ перенесён |
| Know exactly how every provider is performing | 29 Provider Analytics | v1 (startGen reveal, pa-таблица) | ✓ перенесён |

### Пропущено
- **09 R&C rules v2 (rc-card/startRc)** — fh блока «Route every payment to the right provider» совпадает только с hero-H1 страницы, feature-heading с таким текстом нет → по правилу 2 не переносим, новых секций не создаём.

## Self-check
- `node --check` извлечённых `<script>` обеих страниц — **OK** (включая мой фикс TM).
- `grep ver-pane|ver-switch|ex-block` → **0** на обеих.
- Старые классы удалённых визуалов → **0** упоминаний на обеих.
- `.feature-row:not(.in-view) .rbx-track.is-auto` пауза — **N/A**: ни один перенесённый блок не использует `.rbx-track.is-auto` (нет автоскроллов).
- `.mon-foot`-скоупинг счётчиков — **N/A**: mon-таблиц на страницах нет.
- Обе темы: все перенесённые правила имеют dark-варианты, хардкоды только вердиктные (green/amber/red), синий — `var(--accent)`.
- Мобильные: flex/grid-строки мокапов сжимаются без переполнения при фрейме ~300px (gp/cs/xt/pc — flex с ellipsis/nowrap-бейджами; pa — fr-грид).

## Примечания (вне скоупа, не трогал)
- Дангл-селектор `[data-theme="light"]` перед `.btn-dark` в инлайн-CSS обеих страниц — артефакт уже в HEAD (зачистка nav-CSS прошлых сессий), парсится как `[data-theme="light"] .btn-dark` с теми же декларациями, что в shared.css — визуально безвреден.
- `other-card` переведён с `<a>` на `<div>` + внутренний `<a.other-link>` — изменение текущего worktree (паттерн spark-border сессии), к блочной интеграции не относится.
