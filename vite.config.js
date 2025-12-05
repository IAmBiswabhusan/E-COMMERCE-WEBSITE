import { defineConfig } from "vite";

export default defineConfig({
  root: "./", // Your project root
  publicDir: "public", // Folder for static assets
  build: {
    outDir: "dist", // Build output folder
    rollupOptions: {
      input: {
        main: "index.html",
        about: "about.html",
        contact: "contact.html",
        products: "products.html",
        login: "login.html",
        signup: "signup.html",
        addToCart: "addToCart.html",
      },
    },
  },
  server: {
    port: 4173, // You can change it if needed
    open: true,
  },
});
