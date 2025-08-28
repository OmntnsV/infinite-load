<script setup lang="ts">
import type { Product } from "~~/types/product";

defineProps<{
	product: Product
}>()
</script>

<template>
	<div class="p-4 border rounded">
		<img
				v-if="product.thumbnail"
				:src="product.thumbnail"
				:alt="product.name"
				class="w-full h-48 object-cover rounded mb-2"
		>
		<h2 class="text-lg font-bold">{{ product.name }}</h2>
		<p class="text-gray-600">{{ product.description }}</p>
		<p class="mt-2 font-semibold">${{ product.price.toFixed(2) }}</p>
		<span
				class="text-sm"
				:class="product.inStock ? 'text-green-600' : 'text-red-600'"
		>
      {{ product.inStock ? 'In Stock' : 'Out of Stock' }}
    </span>
	</div>
</template>