import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgr from 'vite-plugin-svgr'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  // place svgr before react so the svg?component import is handled correctly
  plugins: [svgr(), react()],
  resolve: {
    alias: [
      { find: 'components', replacement: path.resolve(__dirname, 'src/components') },
      { find: 'styles', replacement: path.resolve(__dirname, 'src/styles') },
      { find: 'images', replacement: path.resolve(__dirname, 'src/images') },
      { find: 'fonts', replacement: path.resolve(__dirname, 'src/fonts') },
      { find: 'constants', replacement: path.resolve(__dirname, 'src/constants') }
    ]
  }
})
