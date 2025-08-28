export interface Product {
  id: string
  name: string
  description?: string
  price: number
  thumbnail?: string
  inStock: boolean
}

export interface ProductResponse {
  limit: number,
  total: number,
  skip: number,
  products: Product[]
}