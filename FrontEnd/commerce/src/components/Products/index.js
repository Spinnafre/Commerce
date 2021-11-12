import styles from './styles.module.css'

export default function Products() {
    
    return(
        <div className={styles.products}>
            <div className={styles.productList}>
                <div className={styles.productWrapper}>
                    <img src="https://picsum.photos/100" alt=""/>
                    <div className={styles.productCategories}>
                        <span>Categoria 1</span>
                        <span>Categoria 2</span>
                    </div>
                    <p>Nome do Produto</p>
                    <span>R$ 33,33</span>
                </div>
            </div>
        </div>
    )
}
