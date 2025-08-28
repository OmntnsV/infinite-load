export default defineEventHandler(async (event) => {
  const query = getQuery(event)

  const limit = Number(query.limit) || 10
  const skip = Number(query.skip) || 0

  return await $fetch(`https://dummyjson.com/products?limit=${limit}&skip=${skip}`)
})
