#!/usr/bin/env bash
# Deploy script — ANTF-857 site refresh
# Usage: bash deploy.sh

set -e
cd "$(dirname "$0")"

echo "▶ Проверка статуса репо..."
git status --short

echo ""
echo "▶ Добавляю все изменения..."
git add -A

echo ""
echo "▶ Коммит..."
git commit -m "ANTF-857: site content refresh across 6 pages + project scaffolding

Content updates (ANTF-857 epic, excluding ANTF-858):
- ANTF-859 bin-checker: new hero subtitle
- ANTF-860 dispute-resolution: Chargeback Management hero + 4 bullets
- ANTF-861 industries: rewrote 6 industry cards
- ANTF-862 ecommerce: 'Reduce fraud without hurting conversion' hero + 5 bullets
- ANTF-863 documentation: removed DPA card, 3-column grid
- ANTF-864 transaction-monitoring: new H1 + 4 feature blocks (Data Enrichment, Root Cause, For Review, Notifications)
- CONTENT-PLAN.md: synced

Also includes:
- index.html: pending edits from prior session
- .claude/launch.json: dev server switch to serve.sh on :3002
- Project scaffolding: CLAUDE.md, WORKFLOW.md, agents/, system/, serve.sh
- img/: payment-method logos
- hero-monitor/hero-rules/rule-builder demos
- projects/2026-04-24_antf-857-analysis/: analysis + final report"

echo ""
echo "▶ Пуш в origin/main..."
git push origin main

echo ""
echo "✓ Готово. Теперь запусти Pages workflow вручную (workflow_dispatch):"
echo "  https://github.com/oliverbone3-commits/scanfraud-site/actions/workflows/pages.yml"
echo ""
echo "Открываю страницу Actions в браузере..."
open "https://github.com/oliverbone3-commits/scanfraud-site/actions/workflows/pages.yml" 2>/dev/null || true
