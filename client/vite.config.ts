import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import runtimeErrorOverlay from "@replit/vite-plugin-runtime-error-modal";

export default defineConfig({
  plugins: [
    react(),
    runtimeErrorOverlay(),
    ...(process.env.NODE_ENV !== "production" &&
    process.env.REPL_ID !== undefined
      ? [
          await import("@replit/vite-plugin-cartographer").then((m) =>
            m.cartographer(),
          ),
        ]
      : []),
  ],
  resolve: {
    alias: {
      "@": path.resolve(import.meta.dirname, "src"), // Corrected: Assuming src is directly under client/
      "@shared": path.resolve(import.meta.dirname, "..", "shared"), // If shared is outside client/
      "@assets": path.resolve(import.meta.dirname, "..", "attached_assets"), // If attached_assets is outside client/
    },
  },
  // Remove or correct this line. If your source files are directly under client/,
  // Vite will infer client/ as the root correctly.
  // If you MUST specify it, it should be import.meta.dirname.
  // Corrected below:
  root: import.meta.dirname, // OR remove this line entirely if src is directly in client/

  build: {
    // Change outDir to 'dist' so it matches the esbuild output and Vercel's expectation
    outDir: "dist", // <--- CHANGE THIS LINE!
    emptyOutDir: true,
  },
  server: {
    fs: {
      strict: true,
      deny: ["**/.*"],
    },
  },
});
