import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // Since we are deploying to github pages on a custom domain or a repo path, we use base. 
  // We'll set it to relative path for generic hosting, but for gh-pages repo deployments, 
  // it usually needs to be '/repo-name/'. Relative base './' works for most cases!
  base: './',
})
