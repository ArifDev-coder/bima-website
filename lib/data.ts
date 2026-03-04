import { cache } from "react";
import "server-only";

// Simulated database/API call
const fetchProducts = async () => {
  // Simulate network delay
  await new Promise((resolve) => setTimeout(resolve, 100));
  
  return [
    {
      id: 1,
      name: "Telur Ayam Ras",
      price: 26500,
      description: "Telur segar pilihan langsung dari peternakan.",
      image: "/products/telur-ras.jpg",
      category: "fresh",
    },
    // ... more products
  ];
};

// 1. Request Memoization (cache):
// Useful if you call getProducts() in multiple components (e.g., Navbar and ProductGrid)
// during the same render pass. It executes the fetch only once.
export const getProducts = cache(async () => {
  return await fetchProducts();
});

// 2. Data Cache (next: { revalidate }):
// Use this if you want to cache the result across multiple requests (users).
// Ideal for product catalogs that don't change every second.
export const getCachedProducts = async () => {
  const res = await fetch("https://api.juragantelur.com/products", {
    next: { 
      revalidate: 3600, // Revalidate every hour
      tags: ['products'] // Enable on-demand revalidation
    }
  });
  
  if (!res.ok) {
    throw new Error('Failed to fetch products');
  }
 
  return res.json();
};

// 3. Force Static (force-cache):
// Use this for data that rarely changes (e.g., contact info, FAQ).
// This is the default in Next.js for fetch requests without options.
export const getStaticInfo = async () => {
  const res = await fetch("https://api.juragantelur.com/info", {
    cache: "force-cache" 
  });
  return res.json();
};
