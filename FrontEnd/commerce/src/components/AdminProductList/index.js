import styles from './styles.module.css'
import { useState, useEffect } from 'react'

import ProductAdmin from '../ProductAdmin'
import AddProduct from '../AddProduct'

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

    setProducts(List);
    console.log(List)
  }

  const GetNewProductList = (childData) => {
    if(childData){
      GetProducts();
    }
  }

  useEffect(() => {
      GetProducts();
  }, [])

	return (
		<div className={styles.Products}>
      <div className={styles.ProductListHeader}>
        <h4>Produtos</h4>
				<AddProduct GetNewProductList={GetNewProductList}/>
      </div>
		  <div className={styles.ProductList}>
      {
        products && products.length ? products.map(element => {
          const product = {
            URL: element.products.img_url || "https://picsum.photos/100", 
            Categorie: element.categories.name,
            Name: element.products.name,
            Price: element.products.price,
            Quantidade: element.products.qtd,
            Id: element.products.id
        }
          return (
            <ProductAdmin {...product} key={element.products.id}/>
          )
        }) : "Não há itens para mostrar, adicione itens para mostrar!"
      }
      </div>
    </div>
	)
}
