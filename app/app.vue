<script setup lang="ts">
import { ref } from 'vue'
import type {Product, ProductResponse} from "~~/types/product";

const products = ref<Product[]>([])
const skip = ref(0)
const limit = 10
const total = ref(0)
const loading = ref(false)

const loadMore = async () => {
	if (loading.value) return
	loading.value = true

	const data = await $fetch<ProductResponse>('/api/products', {
		query: { skip: skip.value, limit }
	})
	if (data) {
		products.value.push(...data.products)
		total.value = data.total
		skip.value += limit
	}

	loading.value = false
}

await loadMore()

const target = ref<HTMLElement | null>(null)
let observer: IntersectionObserver | null = null
onMounted(() => {
	observer = new IntersectionObserver((entries) => {
		if (entries[0]?.isIntersecting && products.value.length < total.value) {
			loadMore()
		}
	})
	if (target.value) observer.observe(target.value)
})
onUnmounted(() => {
	observer?.disconnect()
})
</script>

<template>
	<div class="max-w-3xl mx-auto p-4">
		<h1 class="text-xl font-bold mb-4">Products</h1>

		<div class="grid grid-cols-2 gap-4">
			<ProductCard v-for="p in products" :key="p.id" :product="p" />
		</div>

		<div ref="target" class="flex justify-center p-4">
			<span v-if="loading">Loading...</span>
			<span v-else-if="products.length >= total">No more products</span>
		</div>
	</div>
</template>
