# ScanFraud Homepage — Bare Structure

---

## 01. HERO

> **Что:** 50/50 split. Слева — eyebrow / H1 / subtitle / 2 CTA. Справа — Hero Monitoring Dashboard preview (mock dashboard с tabs, фильтрами, таблицей событий). Animated Three.js dots на заднем плане.
> **Нужно:** Hero Monitoring Dashboard component (existing), Three.js dots animation (existing). Без новых ассетов.

**Eyebrow:** FRAUD PREVENTION & PAYMENT MANAGEMENT
**H1:** Pure Traffic. No Friction.
**Subtitle:** Real-time fraud detection and payment orchestration designed to protect revenue without blocking legitimate customers.
**CTAs:** Book a demo · Explore platform

---

## 02. PRODUCTS

> **Что:** Section header + 3 feature rows под одним H2. Каждый ряд — 50/50 split: текст с 3 sub-features + dashboard UI mockup. Row 02 reversed (визуал слева, текст справа) для визуального ритма.
> **Нужно:** 3 dashboard UI mockups (по одному per продукт). В текущем сайте уже есть — переиспользуем.

**Eyebrow:** THE PLATFORM
**H2:** Three products. One platform. Zero patchwork.
**Subtitle:** Single API, shared dashboard, common rule engine. Use one product or all three — modular pricing, no minimums, no lock-in.

### Row 01 — Rule Constructor
**Eyebrow:** 01 — RULE ENGINE
**H3:** Intelligent Rule Constructor
**Tagline:** Your business. Your logic.
**Body:** Deploy fraud rules without waiting for engineering. Visual builder for risk teams, custom code for edge cases — both in the same workflow.
- Hybrid workflow — No-code builder + custom Python/SQL. Same deployment pipeline.
- Velocity & geo precision — Per-customer, per-corridor, per-BIN limits. Millisecond evaluation.
- Deploy in minutes — Push to production without engineering review. Roll back in one click.

### Row 02 — Traffic Flow
**Eyebrow:** 02 — PAYMENT ROUTING
**H3:** Frictionless Traffic Flow
**Tagline:** Protect revenue, not just transactions.
**Body:** Route every transaction to the optimal provider based on BIN, currency, risk score, and provider performance. Cascade automatically when a provider declines.
- Real-time risk scoring — Score every transaction in <300ms.
- Smart routing logic — By BIN country, currency, payment method, customer tier, time of day.
- Auto-cascade on failure — Failed transactions reroute to a fallback provider in the same session.

### Row 03 — Case Management
**Eyebrow:** 03 — CASE MANAGEMENT
**H3:** Cross-Entity Case Management
**Tagline:** Connect the dots.
**Body:** Investigate linked accounts, cards, devices, and IPs from a single workspace. Detect fraud rings before they scale.
- Graph-based linkage — Surface accounts sharing devices, IPs, BINs, or behavioural patterns.
- Role-based collaboration — Each role sees what they need. Audit log on every decision.
- Smart limits from connections — Tighter limits for entities linked to flagged accounts.

---

## 03. WHY SCANFRAUD

> **Что:** Section header + 6 карточек в 3-col × 2 row grid. Каждая карточка: lucide-иконка (~36×36 в blue-accent квадрате) + heading + 2-3 строки body. Без изображений.
> **Нужно:** 6 lucide-иконок (например: alert-triangle, trending-up, zap, dollar-sign, eye, package — точный список финализируем при верстке).

**Eyebrow:** WHY SCANFRAUD
**H2:** Built where mainstream fraud vendors won't bid
**Subtitle:** High-risk merchants get the same risk infrastructure mainstream payments enjoy — without industry exclusions, multi-month onboarding, or hidden bundling.

### Card 1 — Stay below card-network thresholds
Keep chargeback ratios within Visa and Mastercard limits. Avoid VFMP, MATCH, and excessive-chargeback fees.

### Card 2 — Recover declines that hurt margin
Reduce false positives that hit high-risk merchants disproportionately. Smart routing and per-BIN scoring lift approval rates by an average of 15%.

### Card 3 — Live in 2-3 days, not a quarter
From signed contract to live production traffic in 2-3 days. Existing rules from Sift, Ravelin, in-house engines, or anywhere else — imported, not rebuilt.

### Card 4 — Per-transaction pricing. No minimums.
Pay only for transactions screened and modules used. No setup fees, no annual minimums, no lock-in. Cancel any month.

### Card 5 — Every decision is auditable
See exactly which rules fired, with what threshold, on which transaction. No black-box ML scores you can't explain.

### Card 6 — No industry exclusions
Pre-tested rule libraries for gambling, crypto, adult, regulated CBD, forex, and high-volume e-commerce. We don't decline merchants based on what they sell.

---

## 04. STATS

> **Что:** Section header + 1 ряд из 4 колонок. В каждой — animated counter (большая цифра + suffix) + label под ней. Анимация счётчиков срабатывает при scroll в viewport.
> **Нужно:** Только типографика. Без иллюстраций, без иконок. Анимация — IntersectionObserver pattern (existing в site).

**Eyebrow:** BY THE NUMBERS
**H2:** Results teams actually care about

- **+15%** — Average approval rate lift after deploying smart routing
- **<300ms** — Decision speed per transaction
- **3 days** — Median time from signed contract to live production
- **99.9%** — Platform uptime SLA across all regions

---

## 05. INDUSTRIES

> **Что:** Section header + 6 карточек в 3-col × 2 row grid. Каждая карточка: lucide-иконка (40×40, blue accent) + heading + 1-line description + arrow link на industry-страницу. Hover — subtle border highlight.
> **Нужно:** 6 lucide-иконок (предложение: dice/joystick для gambling, bitcoin для crypto, shopping-cart для e-commerce, banknote для fintech, credit-card для payment providers, line-chart для trading — финализируем при верстке).

**Eyebrow:** INDUSTRIES
**H2:** Built for the way your business actually loses money
**Subtitle:** Pre-built rule sets and risk profiles for the verticals where fraud, abuse, and regulatory pressure overlap.

- **Gambling & iGaming** — Stop bonus abuse, multi-accounting, and chargebacks without slowing legitimate players. → /gambling.html
- **Crypto** — Detect mule networks, smurfing patterns, and structuring across hot wallets and on-ramps. → /crypto.html
- **High-volume E-commerce** — Reduce false declines and lift approval rates across regions, currencies, and payment methods. → /ecommerce.html
- **Fintech Solutions** — Onboard customers, monitor flows, meet PSD2/SCA requirements without custom infrastructure. → /fintech.html
- **Payment Providers** — Risk infrastructure for PSPs, EMIs, and acquirers — modular, white-labellable, multi-tenant. → /payment-providers.html
- **Trading & Forex** — Detect wash trading, layering, and market manipulation in real time. → /trading.html

**Footer:** If your industry isn't listed, contact us — we adapt rule sets to specific business models.

---

## 06. CTA

> **Что:** Full-grid centered блок. Eyebrow + H2 (2 строки, large) + subtitle + 2 CTA. Animated Three.js dots на заднем плане — закольцовывает визуальный язык с hero.
> **Нужно:** Three.js dots animation (existing). Без новых ассетов.

**Eyebrow:** GET STARTED TODAY
**H2:** Stop fraud. Protect revenue. Launch in 3 days.
**Subtitle:** Built and trusted by payment professionals operating in the verticals others won't touch. See how we handle your traffic in a 30-minute call.
**CTAs:** Book a demo · Contact us
