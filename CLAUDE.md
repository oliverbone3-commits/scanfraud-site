# ScanFraud — Project Instructions

1. ПРЕЛАЙТ (блокирующий): Первое сообщение = прочитать WORKFLOW.md + создать projects/YYYY-MM-DD_задача/ + загрузить агента. Вывести: «📋 папка / агент / первый шаг». До этого — никаких действий, создания файлов, правок HTML.

2. LAYOUT: Все стили — через CSS-переменные из shared.css. Структура секций — строго по паттернам ниже. Новые стили — только в inline `<style>`, никогда в shared.css. Обе темы (dark + light) обязательны.

3. КОНТЕНТ: Только из CONTENT-PLAN.md. Тон — B2B, конкретика, без воды. Английский для сайта, русский для общения.

4. РЕЖИМ: Агенты по одному (или параллельно, если указано в WORKFLOW.md). Отчёты компактно. Без подтверждений — сразу делать.

5. ФИНИШ: Перед «готово» — мини-отчёт: что проверил, обе темы, 5 breakpoints. Code Reviewer — обязательный финальный гейт.

---

## Project Overview

ScanFraud — B2B marketing site for a fraud prevention & payment management platform.
Company: SFC GROUP LTD, London, UK.
Static site: pure HTML5, CSS, vanilla JS. No frameworks, no build tools.

## Tech Stack

- **HTML5** — semantic markup, all pages self-contained
- **CSS** — `shared.css` (global) + inline `<style>` blocks per page
- **JS** — Three.js r128 (hero/CTA dots animation), Lucide (icons via CDN)
- **Fonts** — Geist (headings), Inter (body) via Google Fonts
- **Dev server** — `bash serve.sh` → Ruby server on localhost:3002
- **Deploy** — GitHub Pages via `.github/workflows/pages.yml`

## Content Principles

- B2B tone: professional, concrete, no fluff
- No buzzwords, no clichés, no "revolutionary/cutting-edge"
- Every claim must be specific (numbers, timeframes, mechanics)
- English only for site content
- Reference `CONTENT-PLAN.md` for approved copy

---

## Design System

### CSS Variables (`:root`)

```
--col-width:  1160px      /* main container width */
--side-pad:   140px       /* horizontal page padding */
--cell-pad:   40px        /* internal cell/section padding */
--nav-h:      65px        /* fixed nav height */
--accent:     #1a56ff     /* blue accent color */
--font-g:     'Geist'     /* headings font */
--font-i:     'Inter'     /* body font */
```

### Theme Colors

Dark theme (`data-theme="dark"` — default):
```
--bg: #08090a    --bg2: #141516    --bg3: #0d0f14
--bd: #212223    --bdl: 1px solid #212223
--t1: #ffffff    --t2: rgba(255,255,255,0.6)    --t3: #8b909e    --tb: rgba(255,255,255,0.55)
--nav-bg: rgba(8,9,10,0.92)
--btn-bg: #ffffff    --btn-fg: #08090a    --btn-ob: rgba(255,255,255,0.6)    --btn-ot: #ffffff
```

Light theme (`data-theme="light"`):
```
--bg: #ffffff    --bg2: #f7f8fa    --bg3: #f0f1f3
--bd: #e4e7ed    --bdl: 1px solid #e4e7ed
--t1: #171717    --t2: #4d4d4d    --t3: #8b909e    --tb: #86888b
--nav-bg: rgba(255,255,255,0.92)
--btn-bg: #0d0f14    --btn-fg: #ffffff    --btn-ob: #d0d4dd    --btn-ot: #3d4151
```

### Typography Scale

| Element          | Font   | Weight | Size  | Line-height | Letter-spacing |
|------------------|--------|--------|-------|-------------|----------------|
| Hero H1 (home)   | Geist  | 600    | 64px  | 68px        | -2.4px (override in index.html inline styles) |
| Hero H1 (inner)  | Geist  | 600    | 48px  | 52px        | -2.4px         |
| Section title     | Geist  | 600    | 32px  | 36px        | -1.6px         |
| Feature heading   | Geist  | 600    | 24px  | 30px        | -0.8px         |
| Card title        | Geist  | 600    | 18px  | 24px        | -0.4px         |
| Industry name     | Geist  | 600    | 20px  | 26px        | -0.6px         |
| Body / desc       | Geist  | 400    | 13-15px | 20-22px   | —              |
| Eyebrow           | Inter  | 700    | 10px  | —           | 1px (accent color; CTA eyebrow uses --t3 gray) |
| Stat number       | Geist  | 700    | 36px  | 36px        | -2px           |
| CTA title         | Geist  | 600    | 36px  | 40px        | -2px           |
| CTA subtitle      | Geist  | 400    | 15px  | 22px        | —              |

### Buttons

| Class       | Height | Style                              | Use               |
|-------------|--------|------------------------------------|--------------------|
| `.btn-sl`   | 35px   | Filled, padding 0 12px, radius 8px   | Nav primary        |
| `.btn-ol`   | 35px   | Outlined, padding 0 13px, radius 8px  | Nav secondary      |
| `.btn-dark` | auto   | Filled, padding 14px 20px, radius 10px | Page CTA primary   |
| `.btn-ghost`| auto   | Outlined, padding 14px 21px, radius 10px | Page CTA secondary |

### Icons

- Lucide icons loaded via CDN: `<script src="https://unpkg.com/lucide@latest/dist/umd/lucide.min.js"></script>`
- Card icons: 36×36px container, radius 8px, bg `rgba(26,86,255,.1)` (light: `.07`), icon 18×18px stroke accent
- Industry icons: 40×40px container, radius 10px, bg `rgba(26,86,255,.08)` (light: `.07`), icon 20×20px stroke accent
- Initialize with `lucide.createIcons()` at bottom of page

---

## Layout Rules

### Scroll Reveal

Add `.reveal` class to any section/element for scroll-triggered fade-in:
```html
<section class="page-section reveal">...</section>
```
- Default: `opacity: 0; transform: translateY(24px)`
- Revealed (via JS IntersectionObserver): `opacity: 1; transform: translateY(0)`
- Transition: 0.6s ease

### Page Container

Every page wraps content in `.grid-wrap` — a 1160px centered container with left/right borders:
```html
<div class="grid-wrap">
  <!-- all page sections go here -->
</div>
```
At ≤1280px, container becomes 100% width and side borders disappear.

### Page Shell Template

```html
<!DOCTYPE html>
<html lang="en" data-theme="dark">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>ScanFraud — {Page Title}</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Geist:wght@400;500;600;700&family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="shared.css">
  <script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js"></script>
  <script src="https://unpkg.com/lucide@latest"></script>
  <style>
    /* page-specific styles here */
  </style>
</head>
<body>
  <!-- NAV (shared across all pages) -->
  <nav>...</nav>

  <div class="grid-wrap">
    <!-- HERO -->
    <!-- SECTIONS -->
    <!-- CTA -->
  </div>

  <!-- FOOTER (shared across all pages) -->
  <footer>...</footer>

  <!-- SCRIPTS -->
  <script>/* theme toggle, Three.js dots, lucide.createIcons(), scroll reveal */</script>
</body>
</html>
```

### Section Patterns

#### 1. Hero — Homepage
```html
<section class="hero-sec">
  <div id="dots"></div>
  <div class="hero-main">
    <span class="page-eyebrow">Eyebrow text</span>
    <h1 class="h-title">Main headline</h1>
    <p class="h-sub">Subtitle description</p>
    <div class="h-cta">
      <a href="#" class="btn-dark">Primary CTA</a>
      <a href="#" class="btn-ghost">Secondary CTA</a>
    </div>
  </div>
</section>
```
- Padding top: `calc(var(--nav-h) + 100px)`, bottom: 80px
- Three.js animated dots background, radial gradient overlay
- Title: 64px on homepage

#### 2. Page Hero (non-dots inner pages)
For pages that don't use the Three.js dots background:
```html
<section class="page-hero">
  <div class="page-hero-inner">
    <span class="page-eyebrow">Breadcrumb / Label</span>
    <h1 class="page-title">Page Title</h1>
    <p class="page-subtitle">Subtitle text</p>
  </div>
</section>
```
- Padding: `calc(var(--nav-h) + 80px) 0 60px`
- Has bottom border

#### 3. Hero — Inner Pages (with dots)
Same structure as homepage hero but:
- Title: 48px (class `.h-title` at 48px in shared.css; homepage overrides to 64px)
- Always has `.page-eyebrow` with breadcrumb-style text (e.g., "Products / Transaction Monitoring")

#### 4. Text Section
```html
<section class="page-section page-section--divider">
  <div class="page-section-inner">
    <span class="sec-eyebrow">SECTION LABEL</span>
    <h2 class="sec-title">Section Title</h2>
    <p class="sec-desc">Description text...</p>
  </div>
</section>
```
- Padding: 60px top/bottom
- Use `page-section--divider` only for standalone text sections (no child grid)
- When followed by a grid, the grid provides the edge-to-edge divider

#### 5. Card Grid (2-column)
```html
<section class="page-section">
  <div class="page-section-inner">
    <span class="sec-eyebrow">LABEL</span>
    <h2 class="sec-title">Title</h2>
  </div>
</section>
<div class="card-grid">
  <div class="card">
    <div class="card-icon"><i data-lucide="icon-name"></i></div>
    <h3 class="card-title">Card Title</h3>
    <p class="card-desc">Card description</p>
    <a href="#" class="card-link">Learn more →</a>
  </div>
  <!-- more cards... -->
</div>
```
- 2-column by default; use `.card-grid-3` for 3-column
- Border-right on odd cards, border-bottom on all except last row
- Hover: inset blue glow `box-shadow: inset 0 60px 120px -50px rgba(26,86,255,0.12)`

#### 6. Feature Row (50/50 split)
```html
<div class="feature-row">
  <div class="feature-row-content">
    <span class="feature-number">01</span>
    <h3 class="feature-heading">Feature Title</h3>
    <p class="feature-desc">Description</p>
    <ul class="feature-list">
      <li>Item with blue dot bullet</li>
    </ul>
  </div>
  <div class="feature-row-visual">
    <!-- visual content, illustration, or screenshot -->
  </div>
</div>
```
- Add `.reversed` class to swap content/visual sides
- Content side has border-right; reversed has border-left
- Visual side gets `background: var(--bg2)`

#### 7. Stats Row (4-column metrics)
```html
<div class="stats-row">
  <div class="stat">
    <div class="stat-num">300ms</div>
    <div class="stat-label">Decision speed</div>
  </div>
  <!-- 3 more stats -->
</div>
```
- Always 4 columns; collapses to 2 at 768px, 1 at 480px

#### 8. Industry Grid (3-column)
```html
<div class="ind-grid">
  <div class="industry-card">
    <div class="industry-icon"><i data-lucide="icon-name"></i></div>
    <h3 class="industry-name">Industry Name</h3>
    <p class="industry-desc">Description</p>
    <a href="#" class="industry-link">Learn more <svg>→</svg></a>
  </div>
</div>
```

#### 9. CTA Section (bottom of every page)
```html
<section class="cta-sec">
  <div id="cta-dots"></div>
  <div class="cta-inner">
    <span class="cta-eyebrow">GET STARTED</span>
    <h2 class="cta-title">CTA Headline</h2>
    <p class="cta-sub">CTA description</p>
    <div class="cta-btns">
      <a href="#" class="btn-dark">Book a demo</a>
      <a href="#" class="btn-ghost">Contact us</a>
    </div>
  </div>
</section>
```
- Has its own Three.js dots canvas (`#cta-dots`)
- Edge-to-edge dividers via box-shadow technique

### Divider Rules

- Full-width dividers extend beyond `.grid-wrap` via `::after` pseudo-elements with box-shadow
- Only the LAST element of a semantic block gets a divider
- `.page-section` alone does NOT get a divider — its child grid does
- Use `.page-section--divider` for text-only sections that need a bottom divider
- Grid/list components (`.card-grid`, `.stats-row`, `.feature-row`, `.ind-grid`, etc.) automatically get edge-to-edge dividers via shared CSS

### Responsive Breakpoints

| Breakpoint | Changes |
|------------|---------|
| ≤1280px    | Container → 100%, side borders removed, cell-pad stays 40px |
| ≤900px     | Industry grid → 2 columns |
| ≤768px     | Burger menu shown, hero title → 36px, card grids → 1 column, feature rows → stacked, stats → 2 columns, footer → 2 columns |
| ≤600px     | Industry grid → 1 column |
| ≤480px     | cell-pad → 20px, nav brand hidden, titles → 28px, stats → 1 column, footer → 1 column |

---

## Sub-Agents

Agent personality files are stored in `agents/` directory. Use them as sub-agents for parallel tasks.

### Frontend Developer (`agents/engineering-frontend-developer.md`)
- HTML structure, CSS styling, responsive layout, performance
- Must follow layout rules and section patterns from this file
- Always use existing CSS classes from `shared.css` before creating new ones
- New page-specific styles go in inline `<style>` block, not in shared.css
- Test both dark and light themes

### UI Designer (`agents/design-ui-designer.md`)
- Visual design decisions, component consistency, spacing, color usage
- Enforces the design system: CSS variables, typography scale, icon sizes
- Validates visual hierarchy across pages

### UX Architect (`agents/design-ux-architect.md`)
- CSS architecture, layout systems, responsive behavior
- Reviews section nesting, grid patterns, divider placement
- Ensures breakpoint behavior matches documented rules

### Brand Guardian (`agents/design-brand-guardian.md`)
- Brand consistency: tone, visual identity, messaging alignment
- Validates against `CONTENT-PLAN.md` approved copy
- Ensures B2B professional tone, no buzzwords or clichés

### Content Creator (`agents/marketing-content-creator.md`)
- Writing/editing page copy, headlines, descriptions
- Must follow `CONTENT-PLAN.md` as source of truth
- Tone: B2B professional, concrete, no fluff
- Always write in English

### SEO Specialist (`agents/marketing-seo-specialist.md`)
- Technical SEO: meta tags, semantic HTML, structured data
- Content SEO: keyword strategy, headings hierarchy, internal linking
- Performance: Core Web Vitals impact on rankings

### Code Reviewer (`agents/engineering-code-reviewer.md`)
- Reviews HTML/CSS/JS changes for quality and consistency
- Checks: correct CSS variables, proper section nesting, theme support
- Cross-references with design system rules in this file

### Technical Writer (`agents/engineering-technical-writer.md`)
- Documentation: CLAUDE.md updates, CONTENT-PLAN.md maintenance
- API docs if needed, developer-facing documentation
- Keeps instructions clear and structured

### Accessibility Auditor (`agents/testing-accessibility-auditor.md`)
- WCAG compliance: semantic HTML, color contrast, keyboard navigation
- Screen reader compatibility, ARIA attributes
- Focus management, form labels, alt text

### Evidence Collector (`agents/testing-evidence-collector.md`)
- Screenshot-based QA across themes and breakpoints
- Visual regression verification after changes
- Documents before/after state of modifications

### Document Generator (`agents/specialized-document-generator.md`)
- Generates formatted outputs: PDF, reports, structured documents
- Useful for creating client-facing materials from site content

### Legal Compliance Checker (`agents/support-legal-compliance-checker.md`)
- Reviews Privacy Policy, Cookie Policy, Terms of Use
- GDPR, PCI DSS, PSD2 compliance checks
- Validates legal pages on documentation.html

### Emil Kowalski Craft (`agents/design-emil-kowalski-craft.md`)
- Micro-interactions, motion, hover/focus/active states, easing curves
- Inspired by Emil Kowalski (Sonner, Vaul, animations.dev)
- Tunes timing, enforces `prefers-reduced-motion`, polishes the "feel"

### Impeccable Detail (`agents/design-impeccable-detail.md`)
- Pixel-perfect audit: spacing, optical balance, border seams, icon centering
- 5 breakpoints × 2 themes systematic walkthrough
- Catches magic numbers, divider doubling, half-pixel drift

### Taste Editor (`agents/design-taste-editor.md`)
- Editorial cuts, restraint, redundancy elimination
- Removes filler eyebrows, decorative icons, duplicate CTAs
- Enforces banned-buzzword list from `system/content-voice.md`

### How to Use Agents

When delegating work, reference the agent file in the sub-agent prompt:
```
Read agents/engineering-frontend-developer.md and use its personality
to build the new page following CLAUDE.md layout rules.
```

For parallel tasks, launch multiple agents simultaneously:
- Content Creator writes copy → Frontend Developer builds HTML → Code Reviewer validates

---

## File Structure

```
scanfraud-site/
├── index.html                    # Homepage
├── overview.html                 # Company overview
├── products.html                 # Products hub
├── transaction-monitoring.html   # Product page
├── dispute-resolution.html       # Product page
├── risk-management.html          # Product page
├── routing-cascading.html        # Product page
├── industries.html               # Industries hub
├── gambling.html                 # Industry page
├── crypto.html                   # Industry page
├── ecommerce.html                # Industry page
├── fintech.html                  # Industry page
├── payment-providers.html        # Industry page
├── trading.html                  # Industry page
├── resources.html                # Resources hub
├── security.html                 # Security page
├── documentation.html            # Legal docs
├── bin-checker.html              # BIN lookup tool
├── hero-monitor.html             # 3D demo (standalone)
├── hero-rules.html               # Rules demo (standalone)
├── rule-builder-preview.html     # Rule builder demo (standalone)
├── shared.css                    # Global styles
├── hero-monitor.css              # Hero monitor specific styles
├── rule-builder.css              # Rule builder specific styles
├── CONTENT-PLAN.md               # Approved content for all pages
├── serve.sh                      # Dev server launcher
├── img/                          # Payment logos (SVG)
├── agents/                       # Sub-agent personality files
│   ├── engineering-frontend-developer.md
│   ├── engineering-code-reviewer.md
│   ├── engineering-technical-writer.md
│   ├── design-ui-designer.md
│   ├── design-ux-architect.md
│   ├── design-brand-guardian.md
│   ├── marketing-content-creator.md
│   ├── marketing-seo-specialist.md
│   ├── testing-accessibility-auditor.md
│   ├── testing-evidence-collector.md
│   ├── specialized-document-generator.md
│   └── support-legal-compliance-checker.md
└── .github/workflows/pages.yml   # GitHub Pages deploy
```

## Rules for Editing

1. Never edit `shared.css` for page-specific styles — use inline `<style>` instead
2. Always preserve both theme variants when adding colors
3. Keep nav and footer identical across all pages (copy from index.html if creating new page)
4. Every new page must follow the page shell template above
5. Use Lucide icon names, not raw SVGs (except in nav/footer where icons are inline)
6. All content changes must be reflected back in `CONTENT-PLAN.md`
7. Test at all 5 breakpoints before committing
