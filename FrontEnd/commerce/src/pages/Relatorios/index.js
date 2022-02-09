import styles from './styles.module.css'
import { useState, useEffect } from 'react'

export default function Relatorios() {

  const [comprasTotais, setComprasTotais] = useState([]);
  const [products, setProducts] = useState([]);
  const [gains, setGains] = useState([]);

  const getCompras = async () => {
  	const UserToken = sessionStorage.getItem('token')

    const result = await fetch('http://localhost:3333/sales', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        "Authorization": `Bearer ${UserToken}`
      },
    }).then((res) => res.json())
  
    setComprasTotais(result)
    getGains(result)
  }

  const GetProducts = async () => {
		let List = await fetch('http://localhost:3333/product', {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json'
			}
		}).then((res) => res.json())

    // filtrar pelos de menor quantidade
    List = List.filter((elem) => {
      if(elem.products.qtd <= 20)
        return true
      else{
        return false
      }
    })

    // ordenar em ordem crescente
    // Qual o sentido de ordenar uma lista de produtos faltando ela descrição
    // E NÃO PELA QUANTIDADE ??????
    List.sort((a, b) => {
      if(a.products.name > b.products.name){
        return 1
      }
      if(a.products.name < b.products.name){
        return -1
      }
      return 0
    })

		setProducts(List);
	}

  const getGains = (list) => {
    let BuyDays = []
    
    for(let i = 0; i < list.length; i++){
      let day = new Date(list[i].created_at).getDate()
      let month = new Date(list[i].created_at).getMonth()
      let year = new Date(list[i].created_at).getFullYear()
      
      // procurando data
      let index = BuyDays.findIndex(element => { return element.day === day && 
        element.month === month && 
        element.year === year})
      
      if ( index === -1){
          // Não achou um elemento
          // adicionando o dia
          BuyDays.push({
            day: day,
            month: month,
            year: year,
            total: 0
          })

          //valor do index adicionado
          index = BuyDays.length - 1
      }
      // aumentando valor
      BuyDays[index].total += ( parseFloat(list[i].products.price) * parseFloat(list[i].qtd) )
    }
    setGains(BuyDays)
  }

  useEffect(() => {
    getCompras();
    GetProducts();
  }, []);
  

	return (
		<div className={styles.Page}>

      <div className={styles.BuysPanel}>
        <div className={styles.PanelHeader}>
          <h3>Compras Totais</h3>
        </div>
        <ul className={styles.List}>
          {
            comprasTotais && comprasTotais.length ? comprasTotais.map(elem => {
              return(
                <li className={styles.BuySingle} key={elem.products.id} value={elem.products.id}>
                  <span>{elem.products.name}</span>
                  <div>
                    <span>Preço unit.: R${elem.products.price}</span>
                    <span>Quant: {elem.qtd}</span>
                    <span>Total: R${(parseFloat(elem.products.price) * parseInt(elem.qtd)).toFixed(2)}</span>
                  </div>
                </li>
              )
            }) : <li className={styles.BuySingle}>Não há compras!</li>
          }
        </ul>
      </div>

      <div className={styles.ProductsPanel}>
        <div className={styles.PanelHeader}>
          <h3>Produtos perto do fim</h3>
        </div>
        <ul className={styles.List}>
          {
            products && products.length ? products.map(elem => {
              return(
                <li className={styles.BuySingle} key={elem.id} value={elem.id}>
                  <span>{elem.products.name}</span>
                  <div>
                    <span>Quant: {elem.products.qtd}</span>
                  </div>
                </li>
              )
            }) : <li className={styles.BuySingle}>Não há produtos em falta!</li>
          }
        </ul>
      </div>

      <div className={styles.GainsPanel}>
        <div className={styles.PanelHeader}>
          <h3>Valor adquirido</h3>
        </div>
        <ul className={styles.List}>
          {
            gains && gains.length ? gains.map(elem => {
              return(
                <li className={styles.BuySingle} key={`${elem.day}${elem.month}${elem.year}`} value={`${elem.day}${elem.month}${elem.year}`}>
                  <span>Vendas feitas em: {elem.day}/{elem.month < 10 ? ('0'+(elem.month+1)) : ((elem.month+1))}/{elem.year}</span>
                  <div>
                    <span>Vendas Totais: R${elem.total}</span>
                  </div>
                </li>
              )
            }) : <li className={styles.BuySingle}>Sem vendas ainda!</li>
          }
        </ul>
      </div>

    </div>
	)
}
