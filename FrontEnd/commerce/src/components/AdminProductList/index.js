import styles from './styles.module.css'
import { useState, useEffect } from 'react'

import AddProduct from '../../components/AddProduct'

//PS - URL, Categories, Name, Price

export default function AdminProductList() {

  const [products, setProducts] = useState([])

	const GetProducts = async () => {
    const List = await fetch('http://localhost:3333/product', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    }).then((res) => res.json())
    console.log(List)

    setProducts(List);
  }

  useEffect(() => {
      GetProducts();
  }, [])

	return (
		<div className={styles.Products}>
		  <div className={styles.ProductList}>
      {
        products ? products.map(element => {
          console.log(element)
          return (
            <ProductSingle {...element} />
          )
        }) : "Não há itens para mostrar, adicione itens para mostrar!"
      }
      </div>
    </div>
	)
}
