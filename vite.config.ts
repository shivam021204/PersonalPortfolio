import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// This configuration assumes vite.config.ts and index.html are in the REPOSITORY ROOT.
// The actual client-side source code (src/main.tsx, etc.) is located within the 'client/' subdirectory.

export default defineConfig({
  plugins: [
    react(),
    // Removed Replit-specific plugins as they are not needed for deployment
  ],
  resolve: {
    alias: {
      // These aliases are now relative to the REPOSITORY ROOT (where this vite.config.ts is).
      // They must explicitly point into the 'client/' directory for client-side source files.
      "@": path.resolve(import.meta.dirname, "client", "src"), // Correctly points to repo_root/client/src
      "@shared": path.resolve(import.meta.dirname, "shared"), // Correctly points to repo_root/shared
      "@assets": path.resolve(import.meta.dirname, "attached_assets"), // Correctly points to repo_root/attached_assets
    },
  },
  // Set the root for Vite to the repository root (where index.html is located).
  // This tells Vite that 'index.html' is directly within this directory.
  // Since vite.config.ts is also in the root, import.meta.dirname resolves to the root.
  root: import.meta.dirname, // This resolves to the repository root

  build: {
    // The output directory for the build. It will be created directly in the repository root.
    outDir: "dist",
    emptyOutDir: true, // Clears the output directory before building
  },
  server: {
    fs: {
      strict: true,
      deny: ["**/.*"],
    },
  },
});