# ScanFraud Site — Team Workflow

## Folder Structure

```
scanfraud-site/
├── agents/                          ← agent personality files (rarely changed)
├── system/                          ← living design system docs
│   ├── tokens.md                    ← CSS variables, colors, typography reference
│   ├── content-voice.md             ← B2B tone rules, banned words, patterns
│   └── glossary.md                  ← product terminology (fraud, payments domain)
├── projects/                        ← one folder per task
│   └── YYYY-MM-DD_task-name/        ← all deliverables inside
├── CLAUDE.md                        ← design system + layout rules + agent index
├── CONTENT-PLAN.md                  ← approved content for all pages
└── WORKFLOW.md                      ← this file
```

### Folder Rules

1. **Новая задача = новая папка** в `projects/` с форматом `YYYY-MM-DD_short-name`
2. **Все артефакты задачи** (ревью, спеки, отчёты, скриншоты) — внутри папки задачи
3. **`system/`** — только живые документы, обновляются между задачами. Не дублировать в проектах
4. **`agents/`** — трогаем только для обновления/добавления агентов
5. **Завершённые проекты** остаются на месте как архив

---

## The Team

### Development
| Agent | File | Role |
|-------|------|------|
| Frontend Developer | `agents/engineering-frontend-developer.md` | HTML structure, CSS styling, responsive layout, performance |
| Code Reviewer | `agents/engineering-code-reviewer.md` | Code quality, CSS variables, section nesting, theme support |
| Technical Writer | `agents/engineering-technical-writer.md` | CLAUDE.md, CONTENT-PLAN.md, developer documentation |

### Design
| Agent | File | Role |
|-------|------|------|
| UI Designer | `agents/design-ui-designer.md` | Visual design system, component consistency, spacing |
| UX Architect | `agents/design-ux-architect.md` | CSS architecture, layout systems, responsive behavior |
| Brand Guardian | `agents/design-brand-guardian.md` | Brand identity, tone, visual consistency |

### Marketing
| Agent | File | Role |
|-------|------|------|
| Content Creator | `agents/marketing-content-creator.md` | Page copy, headlines, descriptions, B2B tone |
| SEO Specialist | `agents/marketing-seo-specialist.md` | Meta tags, semantic HTML, keywords, structured data |

### Quality
| Agent | File | Role |
|-------|------|------|
| Accessibility Auditor | `agents/testing-accessibility-auditor.md` | WCAG, contrast, keyboard nav, screen readers |
| Evidence Collector | `agents/testing-evidence-collector.md` | Screenshot QA, visual regression, before/after |

### Specialized
| Agent | File | Role |
|-------|------|------|
| Document Generator | `agents/specialized-document-generator.md` | PDF, reports, client-facing materials |
| Legal Compliance | `agents/support-legal-compliance-checker.md` | GDPR, PCI DSS, PSD2, legal pages review |

---

## Workflows

### 1. New Page (full cycle)

```
Content Creator     → Write copy per CONTENT-PLAN.md, headlines, descriptions
        ↓
SEO Specialist      → Meta tags, heading hierarchy, keyword placement
        ↓
Frontend Developer  → Build HTML structure per CLAUDE.md layout rules
        ↓
UI Designer         → Verify visual system: spacing, colors, typography
  + Brand Guardian  → Check tone and brand consistency (parallel)
        ↓
Accessibility Auditor → WCAG audit: contrast, semantics, keyboard nav
        ↓
Code Reviewer       → Final gate: CSS vars, theme support, section nesting
        ↓
Evidence Collector  → Screenshots: both themes, 5 breakpoints
```

### 2. Content Update (copy changes)

```
Content Creator     → Write/edit copy, check against CONTENT-PLAN.md
  + Brand Guardian  → Tone and voice consistency (parallel)
        ↓
SEO Specialist      → Verify heading structure, meta updates if needed
        ↓
Frontend Developer  → Apply changes to HTML
        ↓
Code Reviewer       → Quick review (content accuracy, no broken layout)
```

### 3. Design Iteration (visual/layout changes)

```
UI Designer         → Define what changes and why, check design system
        ↓
UX Architect        → Validate layout patterns, grid, responsive behavior
        ↓
Frontend Developer  → Implement CSS/HTML changes
        ↓
Evidence Collector  → Before/after screenshots, both themes
        ↓
Code Reviewer       → Review against CLAUDE.md rules
```

### 4. Site Audit (quality review)

```
Code Reviewer       → HTML/CSS/JS quality, shared.css compliance
  + Accessibility Auditor → WCAG audit (parallel)
  + SEO Specialist  → Technical SEO check (parallel)
        ↓
Brand Guardian      → Content tone review across pages
        ↓
Evidence Collector  → Document all findings with screenshots
        ↓
Report with prioritized fixes
```

### 5. Legal / Compliance Review

```
Legal Compliance    → Review Privacy Policy, Cookie Policy, Terms of Use
        ↓
Content Creator     → Update legal copy if needed
        ↓
Frontend Developer  → Apply changes to documentation.html
        ↓
Code Reviewer       → Verify no layout breakage
```

### 6. New Section / Component

```
UI Designer         → Design component, check design system tokens
        ↓
UX Architect        → Validate section pattern, divider rules, responsive
        ↓
Frontend Developer  → Build HTML/CSS per CLAUDE.md patterns
        ↓
Accessibility Auditor → Check new component accessibility
        ↓
Code Reviewer       → Final review
```

### 7. Quick Fix (bug/typo)

```
Frontend Developer  → Fix directly
        ↓
Code Reviewer       → Quick review (theme check, no regressions)
```

---

## Agent Selection Guide

### By Task Type

| Task | Primary Agent | Supporting Agents |
|------|--------------|-------------------|
| Написать текст для страницы | Content Creator | Brand Guardian, SEO Specialist |
| Сверстать новую страницу | Frontend Developer | UI Designer, UX Architect |
| Исправить баг в вёрстке | Frontend Developer | Code Reviewer |
| Проверить SEO | SEO Specialist | Content Creator |
| Проверить доступность | Accessibility Auditor | Evidence Collector |
| Проверить юридические тексты | Legal Compliance | Content Creator |
| Обновить дизайн-систему | UI Designer | UX Architect, Code Reviewer |
| Сделать скриншоты для QA | Evidence Collector | — |
| Обновить документацию проекта | Technical Writer | — |
| Создать отчёт / PDF | Document Generator | — |

### By Skill Level

| Complexity | How Many Agents | Workflow |
|-----------|----------------|----------|
| Typo/quick fix | 1-2 | Quick Fix (#7) |
| Content edit | 2-3 | Content Update (#2) |
| New section | 3-5 | New Section (#6) |
| Full page | 5-7 | New Page (#1) |
| Site-wide audit | 4-5 | Site Audit (#4) |

---

## How to Use

### Start a Session
When starting work, state the task. The system will:
1. Read WORKFLOW.md to select the right workflow
2. Create `projects/YYYY-MM-DD_task-name/` folder
3. Load the first agent in the chain
4. Report: folder / workflow / agent / first step

### From Jira Task
Say "Возьми ANTF-XXX" or paste a Jira link. The system will:
1. Fetch task via Jira API (cloudId: `coddys.atlassian.net`)
2. Parse description → extract requirements (texts, screenshots, files)
3. Select workflow based on task type (content change, new page, bug fix, etc.)
4. Run the workflow
5. On completion: update Jira status + add comment with summary

### Activate Agents
Reference agents by role:

```
"As Frontend Developer, build the new pricing page following CLAUDE.md layout rules"
"As Content Creator, write copy for the gambling industry page per CONTENT-PLAN.md"
"As Code Reviewer, check this page for design system compliance"
```

### Parallel Work
Some agents work well in parallel:

- Content Creator + Brand Guardian (text + tone in one pass)
- Code Reviewer + Accessibility Auditor (code + a11y in one pass)
- UI Designer + UX Architect (visual + structural review)
- SEO Specialist + Brand Guardian (meta + brand in one pass)

### Multi-Agent Chain
Run a full workflow by chaining:

```
"Run New Page workflow for the pricing page.
Start with Content Creator for copy,
then Frontend Developer for HTML,
then Code Reviewer for validation."
```

---

## Principles

1. **Content first** — copy drives structure, not the other way around
2. **CLAUDE.md is law** — all layout, CSS, and section patterns come from there
3. **CONTENT-PLAN.md is source of truth** — all page copy references it
4. **Code Reviewer is the gate** — nothing ships without passing review
5. **Brand Guardian has veto** on tone-inconsistent content
6. **Both themes always** — every change must work in dark and light
7. **Smallest team possible** — not every task needs all 12 agents
8. **Iterate, don't waterfall** — quick loops over big cascades
9. **Evidence over opinion** — screenshots prove correctness, not assertions
10. **English for content, Russian for communication** — site copy in English, discussions in Russian
