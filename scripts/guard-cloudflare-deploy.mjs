import process from 'node:process'

const isCloudflarePages = process.env.CF_PAGES === '1'
const branch = process.env.CF_PAGES_BRANCH
const allowProdDeploy = process.env.QUESTERIX_ALLOW_PROD_DEPLOY === 'true'

if (isCloudflarePages && branch === 'main' && !allowProdDeploy) {
  console.error(
    [
      'Blocked Cloudflare Pages build on branch "main".',
      '',
      'This repo is intentionally preventing production deploys while the site is incomplete.',
      '',
      'To override (explicitly): set env var QUESTERIX_ALLOW_PROD_DEPLOY=true in Cloudflare Pages.',
    ].join('\n'),
  )
  process.exit(1)
}
