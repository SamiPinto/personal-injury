import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// Default-deny: every build is noindex until SITE_INDEXABLE=true is set for the live launch.
const indexable = process.env.SITE_INDEXABLE === 'true'

function robots() {
  return {
    name: 'robots',
    transformIndexHtml() {
      if (indexable) return []
      return [{ tag: 'meta', attrs: { name: 'robots', content: 'noindex, nofollow, noimageindex' }, injectTo: 'head' }]
    },
    generateBundle() {
      // Crawling stays allowed so search engines can read the noindex tag; a Disallow would hide it.
      this.emitFile({ type: 'asset', fileName: 'robots.txt', source: 'User-agent: *\nAllow: /\n' })
    },
  }
}

export default defineConfig({
  plugins: [react(), tailwindcss(), robots()],
})
