import useCart from "../hooks/useCart"
import useProducts from "../hooks/useProducts"
import { UseProductsContextType } from "../context/ProductsProvider"
import { ReactElement } from "react"
import Product from "./Product"

const ProductList = () => {
  const { dispatch, REDUCER_ACTIONS, cart } = useCart()
  const { products } = useProducts()

  let pagecontent: ReactElement | ReactElement[] = 
  <p>Loading...</p>

  if (products?.length) {
    pagecontent = products.map(product => {
      const inCart: boolean = cart.some(item =>item.sku === product.sku)

      return (
        <Product
            key = {product.sku}
            product = {product}
            dispatch = {dispatch}
            REDUCER_ACTIONS = {REDUCER_ACTIONS}
            inCart= {inCart}
          />
      )
    })
  }
  const content = (
    <main className="main main--products">
      {pagecontent}
    </main>
  )

  return content
}

export default ProductList