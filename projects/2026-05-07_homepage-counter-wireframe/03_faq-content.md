# FAQ Section — Content Draft

**Section header:**
- Eyebrow: `FAQ`
- H2: «Questions teams ask before they integrate»
- Right column body: «Quick answers on integration, compliance, pricing, and how the platform fits into existing payment infrastructure. Need something specific? [Contact us →]»

**8 questions** — отсортированы по убыванию частоты возникновения у B2B-входящих.
Тон: B2B, конкретика, без воды. Каждый ответ ≤ 60 слов. Все цифры — из CONTENT-PLAN.md и текущего сайта.

---

## Q1. How long does integration take?

Most teams go from API keys to live production traffic in **2-3 days**. The integration is a single REST API for monitoring, routing, disputes, and analytics — no separate connectors per module. Pre-configured rules and a sandbox environment let you test against historical data before going live.

**Tags:** integration, time-to-live
**SEO target:** «fraud detection api integration time»

---

## Q2. Which compliance standards do you support out of the box?

PCI DSS, GDPR, and PSD2/SCA are supported by default. Data is stored in dedicated databases per client, encrypted with AES-256 at rest and TLS 1.3 in transit. The platform is independently audited. For details, see our [Security page →].

**Tags:** compliance, security, GDPR, PCI DSS
**SEO target:** «fraud platform PCI DSS GDPR PSD2»

---

## Q3. How is pricing structured?

Pay per transaction, modular pricing. You only pay for the products you use — Transaction Monitoring, Payment Routing, Dispute Resolution, or Risk Management Outsourcing. Dispute resolution is a fixed fee from EUR 40 per case. No setup fees, no minimum volume, no lock-in contracts.

**Tags:** pricing, commercial
**SEO target:** «fraud detection pricing per transaction»

---

## Q4. Can we use just one product, or is it all-or-nothing?

Modular by design. Start with one product — most clients begin with Transaction Monitoring or Routing — and add modules as you scale. All four products share the same API and dashboard, so adding a module later is a configuration change, not a new integration.

**Tags:** modularity, scalability
**SEO target:** «modular fraud prevention platform»

---

## Q5. Do you support our industry?

We work with PSPs, EMIs, acquirers, gambling and iGaming operators, crypto, e-commerce, fintech, and trading platforms. Pre-built rule sets exist for each vertical. If your business model isn't on the list, [contact us →] — we adapt rules to specific risk profiles.

**Tags:** industries, fit
**SEO target:** «fraud prevention for PSP gambling crypto»

---

## Q6. How fast does the platform make decisions?

Under **300ms** per transaction, real-time. Decisions are returned synchronously through the API, so you can route, decline, or challenge within the customer's checkout flow. Average uptime SLA is 99.9% across all regions.

**Tags:** performance, latency, SLA
**SEO target:** «real-time fraud detection latency»

---

## Q7. Can we migrate historical data and existing rules?

Yes. We import your historical transaction data and recreate existing fraud rules in our engine before go-live, so you can compare outcomes side-by-side. Migration from competitor platforms (Sift, Forter, Riskified, custom in-house) is supported.

**Tags:** migration, data-portability
**SEO target:** «migrate from sift forter to scanfraud»

---

## Q8. Who manages fraud rules — your team or ours?

Both options. Use our visual no-code rule builder yourself, or delegate to our risk team via Risk Management Outsourcing. Outsourced rules are white-box — you see every rule, every threshold, every change. No black box.

**Tags:** rule management, outsourcing, transparency
**SEO target:** «fraud rule management outsourcing white-box»

---

## Открытые вопросы (требуют подтверждения от PM или Дмитрия)

| # | Что подтвердить | Текущая формулировка |
|---|-----------------|----------------------|
| Q1 | Реальное время интеграции — 2-3 дня — это median или best-case? | «2-3 days» |
| Q2 | Кто аудитор PCI DSS / какой уровень? Не упоминаем имя без подтверждения. | «independently audited» — обтекаемо, без имени |
| Q3 | Дисп. resolution фикс. цена 40 EUR — актуально? | Из CONTENT-PLAN.md, проверить |
| Q3 | «No minimum volume» и «no lock-in» — точно так? | Подтвердить с PM |
| Q5 | List отраслей по CONTENT-PLAN — без trading? | В Industries Hub trading есть |
| Q6 | 300ms / 99.9% — обе из CONTENT-PLAN, проверить актуальность |
| Q7 | Миграция с Sift/Forter/Riskified — было ли реально? | Если нет кейсов — переформулировать обтекаемо |
| Q8 | «White-box rules» — это формулировка из текущего сайта, оставляем? |

---

## Schema.org markup (для технического writer'а / разработчика)

После согласования контента — добавить в `<head>` index.html JSON-LD:

```json
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How long does integration take?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Most teams go from API keys to live production traffic in 2-3 days..."
      }
    }
    // ... один объект на каждый Q
  ]
}
```

Это даёт rich-snippet раскрытия в Google SERP.
