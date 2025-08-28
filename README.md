# Infinite Loading Demo (Nuxt 3 + Vue 3)

This is a simple demo project showing how to implement **infinite scrolling / lazy loading** in a Nuxt 3 app using Vue 3's `ref`, `onMounted`, and the **Intersection Observer API**.

## Features
- Fetches paginated products from a server endpoint (`/api/products`).
- Automatically loads more items when the user scrolls to the bottom.
- Shows loading indicator while fetching.
- Stops loading when all products are displayed.

## Tech Stack
- [Nuxt 3](https://nuxt.com/)
- [Vue 3](https://vuejs.org/)
- [Tailwind CSS](https://tailwindcss.com/)

## How It Works
1. The app starts by fetching the first batch of products from `/api/products`.
2. An `IntersectionObserver` watches a target element at the bottom of the list.
3. When the target becomes visible, the next batch of products is loaded.
4. Continues until all products are fetched.

## Setup
Clone the repo and install dependencies:
```bash
bun install
bun dev