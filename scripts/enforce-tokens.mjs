import fs from 'node:fs'
import path from 'node:path'
import process from 'node:process'

const repoRoot = process.cwd()
const srcDir = path.join(repoRoot, 'src')
const allowedFile = path.join(srcDir, 'styles', 'tokens.css')

const fileExtensions = new Set(['.ts', '.tsx', '.css'])

function walk(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true })
  const out = []
  for (const e of entries) {
    const full = path.join(dir, e.name)
    if (e.isDirectory()) out.push(...walk(full))
    else if (e.isFile()) out.push(full)
  }
  return out
}

function findViolations(filePath, content) {
  const rel = path.relative(repoRoot, filePath)
  const violations = []

  const hexColor = /#[0-9a-fA-F]{3,8}\b/g
  const fnColor = /\b(?:rgb|rgba|hsl|hsla)\(/gi
  const cssFontFamily = /(^|[\s{;])font-family\s*:\s*([^;]+);/gi
  const tsFontFamily = /fontFamily\s*:\s*(['"`])([^\1]*?)\1/g

  const lines = content.split(/\r?\n/)

  for (let i = 0; i < lines.length; i += 1) {
    const line = lines[i]

    if (hexColor.test(line)) {
      hexColor.lastIndex = 0
      const matches = [...line.matchAll(hexColor)].map((m) => m[0])
      violations.push({ rel, line: i + 1, rule: 'hex', matches, text: line.trim() })
    }

    if (fnColor.test(line)) {
      fnColor.lastIndex = 0
      violations.push({ rel, line: i + 1, rule: 'rgb/hsl', matches: [], text: line.trim() })
    }

    for (const m of line.matchAll(cssFontFamily)) {
      const value = (m[2] ?? '').trim()
      if (value === 'inherit') continue
      if (!value.startsWith('var(--')) {
        violations.push({ rel, line: i + 1, rule: 'font-family', matches: [value], text: line.trim() })
      }
    }

    for (const m of line.matchAll(tsFontFamily)) {
      const value = (m[2] ?? '').trim()
      if (value.length > 0 && !value.startsWith('var(--')) {
        violations.push({ rel, line: i + 1, rule: 'fontFamily', matches: [value], text: line.trim() })
      }
    }
  }

  return violations
}

function main() {
  if (!fs.existsSync(srcDir)) {
    console.error('Expected src/ directory at:', srcDir)
    process.exit(1)
  }

  const files = walk(srcDir)
    .filter((f) => fileExtensions.has(path.extname(f)))
    .filter((f) => path.resolve(f) !== path.resolve(allowedFile))

  const allViolations = []

  for (const f of files) {
    const content = fs.readFileSync(f, 'utf8')
    allViolations.push(...findViolations(f, content))
  }

  if (allViolations.length > 0) {
    console.error('Design token enforcement failed. Hardcoded colors/fonts found:')
    for (const v of allViolations) {
      const suffix = v.matches.length > 0 ? ` (${v.matches.join(', ')})` : ''
      console.error(`- ${v.rel}:${v.line} [${v.rule}]${suffix}`)
      console.error(`  ${v.text}`)
    }
    process.exit(1)
  }
}

main()
