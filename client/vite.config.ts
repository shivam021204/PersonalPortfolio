import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path"; // Keep path for aliases if needed

export default defineConfig({
  plugins: [
    react(),
    // Temporarily remove replit-specific plugins
    // runtimeErrorOverlay(),
    // ...(process.env.NODE_ENV !== "production" &&
    // process.env.REPL_ID !== undefined
    //   ? [
    //       await import("@replit/vite-plugin-cartographer").then((m) =>
    //         m.cartographer(),
    //       ),
    //     ]
    //   : []),
  ],
  resolve: {
    alias: {
      // You can keep these if they are essential
      "@": path.resolve(import.meta.dirname, "src"),
      "@shared": path.resolve(import.meta.dirname, "..", "shared"),
      "@assets": path.resolve(import.meta.dirname, "..", "attached_assets"),
    },
  },
  root: import.meta.dirname,

  build: {
    rollupOptions: {
      // Revert to simpler 'index.html' here
      input: 'index.html' // <--- CHANGE THIS BACK TO 'index.html'
    },
    outDir: "dist",
    emptyOutDir: true,
  },
  server: {
    fs: {
      strict: true,
      deny: ["**/.*"],
    },
  },
});
