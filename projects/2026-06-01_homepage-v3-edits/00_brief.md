# Homepage v3 — Block Structure (PM brief)

**Источник:** `ScanFraud Sales Playbook for High-Risk B2B.pdf` (uploaded 2026-06-01)
**Версия:** v3 · 2026-05-07
**Статус:** правки от PM на главную, требуется анализ дельты vs текущий index.html

---

## ICP / контекст (фиксируется брифом)

ScanFraud → high-risk merchants (gambling, crypto, adult, regulated CBD, forex, high-volume e-commerce). Это те, кому Sift/Forter/Signifyd обычно отказывают.
→ В структуре **нет** блоков compliance, customer logos, customer story (permission-блокеры + контр-продуктивно для ICP).

## Структура (8 секций)

1. **NAV (sticky)** — без изменений
2. **HERO** — 50/50 split: текст слева + лид-форма справа (новое!)
3. **CLIENT TICKER** — text-only horizontal scroll (PSP / EMI / Crypto / High Risk / BIN Sponsors / Acquirer)
4. **PRODUCTS** — section header + **4 feature rows** (нумерация в брифе сбита: Row 01–04, но H2 говорит «3 feature rows»)
5. **WHY SCANFRAUD ★ NEW** — 3×2 cards grid (но в брифе номера карточек 1, 2, 3, 4, 7, 8, 9 — 7 описано, надо 6)
6. **STATS** — 4 animated counters (но в таблице только 3: <300ms, 3 days, 99.9%)
7. **INDUSTRIES** — 3×2 cards, ссылки на industry-pages + footer-line «If your industry isn't listed…»
8. **CTA** — Three.js dots, eyebrow + H2 + subtitle + 2 CTA
9. **FOOTER** — без изменений

---

## HERO

- **H1:** Pure Traffic. No Friction.
- **Subtitle:** Real-time fraud detection and payment orchestration designed to protect revenue without blocking legitimate customers.
- **Bullets:** No-code Rule Engine · Advanced Case Management · Fast REST API Integration
- **CTA:** Book a demo (primary, триггерит форму) · Explore platform (→ /products)
- **Lead form (правая колонка):** First name*, Last name*, Work email*, Company*, Monthly transaction volume (optional). Form title: «Name» (?). Form CTA: Book a demo, full-width.

## CLIENT TICKER

Auto-scroll, uppercase, slash divider. Без логотипов. Items: PSP / EMI / Crypto / High Risk / BIN Sponsors / Acquirer.

## PRODUCTS

- **Eyebrow:** THE SCANFRAUD PLATFORM
- **H2:** Build Your Defense. Protect Your Revenue.
- **Sub:** Manage P2P, APM, and Ecom through one single API. Connect once to access our complete risk orchestration suite.

**Row 01 — No-code Rule Engine** | Tagline: Your business. Your logic.
Body: Deploy fraud rules without waiting for engineering. Visual builder for risk teams, custom code for edge cases — both in the same workflow.
- Hybrid workflow — No-code builder + custom SQL.
- Velocity & geo precision — hyper-granular limits per customer, payment corridor, BIN. Milliseconds.
- Deploy in minutes — push without IT review, single-click rollback.

**Row 02 — Payment Routing** (reversed) | H3: Frictionless Traffic Flow
Tagline: Protect revenue, not just transactions.
Body: Route every tx to optimal provider by BIN, currency, risk score, performance. Auto-cascade on decline.
- Real-time risk scoring — <300ms
- Smart routing logic — BIN country, currency, method, customer tier, time of day
- Auto-cascade on failure — fallback provider in same session

**Row 03 — Advanced Case Management** | H3: Cross-Entity Case Management
Tagline: Connect the dots.
Body: Investigate linked accounts, cards, devices, IPs from single workspace. Detect fraud rings before they scale.
- Graph-based linkage
- Role-based collaboration
- Smart limits from connections

**Row 04 — Fast Go-To-Market** (reversed) | Tagline: Your data. Your transactions. Live in days.
Body: Migrate from any vendor — live in 2–3 days, not a quarter.
- Rapid API Onboarding
- Legacy Data Portability
- Instant Configuration Import

## WHY SCANFRAUD ★ NEW

- **Eyebrow:** WHY SCANFRAUD
- **H2:** Built where mainstream fraud vendors won't bid
- **Sub:** High-risk merchants get the same risk infrastructure mainstream payments enjoy — without industry exclusions, multi-month onboarding, or hidden bundling.

Cards (3×2 grid, lucide icons 36×36 blue-accent):
- **Stay below card-network thresholds** — Visa/MC ratios, VFMP, MATCH, excessive-chargeback fees.
- **Live in 2-3 days, not a quarter** — contract → production in 2-3 days, vendor migration.
- **Per-transaction pricing. No minimums.** — no setup, no annual minimums, no lock-in, cancel any month.
- **Every decision is auditable** — which rules fired, threshold, transaction. No black-box ML.
- **No industry exclusions** — pre-tested rule libraries for gambling, crypto, adult, CBD, forex, e-comm. «We don't decline merchants based on what they sell.»
- **Fingerprint** — device fingerprinting surviving cleared storage, rotated IPs, anti-detect browsers.
- **Roles** — pre-configured roles, scope-level permissions (events/rules/lists/entities).

## STATS

- **Eyebrow:** BY THE NUMBERS
- **H2:** Results teams actually care about

| Number | Suffix | Label |
|---|---|---|
| <300 | ms | Decision speed per transaction |
| 3 | days | Median time from signed contract to live production |
| 99.9 | % | Platform uptime SLA across all regions |

## INDUSTRIES

- **Eyebrow:** INDUSTRIES
- **H2:** Built for the way your business actually loses money
- **Sub:** Pre-built rule sets and risk profiles for the verticals where fraud, abuse, and regulatory pressure overlap.

3×2 cards, lucide 40×40 accent + arrow link:
- Gambling & iGaming → /gambling.html — Stop bonus abuse, multi-accounting, chargebacks without slowing legitimate players.
- Crypto → /crypto.html — Detect mule networks, smurfing, structuring across hot wallets and on-ramps.
- High-volume E-commerce → /ecommerce.html — Reduce false declines and lift approval rates.
- Fintech Solutions → /fintech.html — Onboarding, monitoring, PSD2/SCA without custom infrastructure.
- Payment Providers → /payment-providers.html — Modular, white-labellable, multi-tenant risk infra for PSPs/EMIs/acquirers.
- Trading & Forex → /trading.html — Wash trading, layering, market manipulation in real time.

**Footer line:** If your industry isn't listed, contact us — we adapt rule sets to specific business models.

## CTA

- **Eyebrow:** GET STARTED TODAY
- **H2:** Stop fraud. Protect revenue. Launch in 3 days.
- **Sub:** Built and trusted by payment professionals operating in the verticals others won't touch. See how we handle your traffic in a 30-minute call.
- CTAs: Book a demo · Contact us

## FOOTER

Без изменений.

---

## Решения PM (2026-06-01)

1. **PRODUCTS:** заголовок секции + **4 ряда** (Rule Engine, Payment Routing, Case Management, Fast GTM). H2 subtitle «3 feature rows» — поправить.
2. **WHY SCANFRAUD:** **6 карточек**, layout НЕ стандартный 3×2 — асимметричная сетка (карточки разной ширины/высоты, разделители-бордеры в стиле проекта). Выбрать 6 из 7 → PM сама не уточнила; финал предложит UX Architect.
3. **STATS:** **3 counter** (не 4). H2 subtitle/layout поправить с «1 ряд из 4».
4. **HERO Lead form:** **НЕ делаем**. Hero остаётся центрированный с Three.js dots + текст + 2 CTA. Lead form убираем из брифа.
5. **Row 01 bullets:** **два** (Hybrid workflow и Velocity & geo precision раздельно). Итого в Row 01 — 3 bullets (Hybrid workflow, Velocity & geo precision, Deploy in minutes).
6. **Row 03 eyebrow:** «03 — ADVANCED CASE MANAGEMENT» — CAPS, как остальные.

## Открытые точки для UX Architect

- Какие **6 карточек из 7** оставляем в Why ScanFraud (1, 2, 3, 4, 7, 8, 9 = 7 описано). Кандидаты на склейку: «Fingerprint» + «Roles» (обе про trust/security control), либо «Per-tx pricing» + «No exclusions» в один. Решение — UX Architect + Brand Guardian.
- Конкретная **асимметричная сетка для Why ScanFraud** (6 карточек, разная ширина/высота, project-style borders). Предложить 2 варианта.
- Hero subtitle/CTA сохраняем как сейчас (Pure Traffic. No Friction.) или брать из v3 — sync с current `index.html`.
