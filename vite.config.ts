
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

export default defineConfig(({ mode }) => ({
  base: './', // This ensures assets are loaded correctly from relative paths
  server: {
    host: "::",
    port: 8080,
  },
  build: {
    outDir: 'dist', // Output directory for production build
    assetsDir: 'assets', // Where to place assets
    sourcemap: false, // Disable sourcemaps in production
    rollupOptions: {
      output: {
        manualChunks: undefined, // Optimize chunking for shared hosting
      },
    },
  },
  plugins: [
    react(),
    mode === 'development' &&
    componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
