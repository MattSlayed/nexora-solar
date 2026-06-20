import { defineConfig, type Plugin } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "path";

const port = Number(process.env.PORT) || 5173;
const basePath = process.env.BASE_PATH || "/";

// The bundled NEXORA diagnostics app (static Next.js export in
// public/diagnostics-app) uses trailing-slash directory URLs, e.g.
// /diagnostics-app/diagnostics/. Vite's dev server doesn't map a directory URL
// to its index.html and instead hands it to the SPA fallback (serving this
// site's React shell). This middleware rewrites those directory requests to the
// concrete index.html so Vite's static handler serves the real app. Asset and
// .html requests pass through untouched. (Production static hosts resolve
// directory indexes themselves, so this is only needed for `vite dev`.)
function serveBundledDiagnosticsApp(): Plugin {
  return {
    name: "serve-bundled-diagnostics-app",
    configureServer(server) {
      server.middlewares.use((req, _res, next) => {
        if (req.url && req.url.startsWith("/diagnostics-app/")) {
          const [pathname, query] = req.url.split("?");
          if (pathname.endsWith("/")) {
            req.url = pathname + "index.html" + (query ? "?" + query : "");
          }
        }
        next();
      });
    },
  };
}

export default defineConfig({
  base: basePath,
  plugins: [serveBundledDiagnosticsApp(), react(), tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(import.meta.dirname, "src"),
      "@assets": path.resolve(import.meta.dirname, "..", "..", "attached_assets"),
    },
    dedupe: ["react", "react-dom"],
  },
  root: path.resolve(import.meta.dirname),
  build: {
    outDir: path.resolve(import.meta.dirname, "dist/public"),
    emptyOutDir: true,
  },
  server: {
    port,
    host: true,
    // Auto-open the browser on the home page when the dev server starts.
    open: "/",
  },
  preview: {
    port,
    host: true,
  },
});
