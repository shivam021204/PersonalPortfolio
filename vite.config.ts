import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [
    react(),
    // Removed Replit-specific plugins as they are not needed for Vercel deployment
    // and can cause issues.
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
      // These aliases are now relative to the 'client' directory,
      // as 'import.meta.dirname' will resolve to the 'client' directory itself.
      "@": path.resolve(import.meta.dirname, "src"), // Correctly points to client/src
      "@shared": path.resolve(import.meta.dirname, "..", "shared"), // Points to the shared folder outside client
      "@assets": path.resolve(import.meta.dirname, "..", "attached_assets"), // Points to attached_assets outside client
    },
  },
  // Set the root to the directory where this vite.config.ts file resides (i.e., 'client/').
  // This tells Vite that 'index.html' and your source files are directly within this directory.
  root: import.meta.dirname,

  build: {
    // The output directory for the build. Vercel will look for this 'dist' folder
    // inside the 'client' directory (because 'client' is your Vercel Root Directory).
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
