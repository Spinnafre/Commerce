import styles from './styles.module.css'
import { useState, useEffect } from 'react'

export default function MinhasCompras() {

  const compra = {
    id: 1,
    nome: 'Caderno Xuxa',
    preco: '23.45',
    quant: 3
  }

  async function getCompras(){
  	const UserToken = sessionStorage.getItem('token')

    const result = await fetch('http://localhost:3333/sales', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        "Authorization": `Bearer ${UserToken}`
      },
    }).then((res) => res.json())
    console.log(result)
  
    setCompras(result)
  }

  useEffect(() => {
    getCompras();
  }, []);

  const [compras, setCompras] = useState([compra]);

	return (
		<div className={styles.Page}>

      <div className={styles.Panel}>
        <div className={styles.PanelHeader}>
          <h3>Suas Compras</h3>
        </div>
        <ul className={styles.List}>
          {
            compras && compras.length ? compras.map(elem => {
              const total = (parseFloat(elem.products.price) * parseInt(elem.qtd)).toFixed(2);
              return(
                <li className={styles.BuySingle} key={elem.products.id} value={elem.products.id}>
                  <span>{elem.products.name}</span>
                  <div>
                    <span>Preço unit.: R${elem.products.price}</span>
                    <span>Quant: {elem.qtd}</span>
                    <span>Total: R${total}</span>
                  </div>
                </li>
              )
            }) : "Não há compras, faça uma!"
          }
        </ul>
      </div>

    </div>
	)
}
