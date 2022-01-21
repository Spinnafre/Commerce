import styles from './styles.module.css'
import ProductSingle from '../ProductSingle'
import { useState, useEffect } from 'react'

//PS - URL, Categories, Name, Price

export default function Products() {
    const props = {
        URL: "https://picsum.photos/100",
        Categorie1: "Category1",
        Categorie2: "Category2",
        Name: "Name",
        Price: "Price"
    }

    const [category1, setCategory1] = useState("1")
    const [category2, setCategory2] = useState("1")

    const sendData = () => {

    }
    
    return(
        <>
        <div className={styles.topBar}>
            <form onSubmit={sendData()}>
                <div className={styles.selectCategory}>
                    <label>
                        Categoria:
                        <select value={category1} onChange={e => setCategory1(e.target.value)}>
                            <option defaultValue value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                        </select>
                    </label>
                </div>
                <div className={styles.selectCategory}>
                    <label>
                        Categoria:
                        <select value={category2} onChange={e => setCategory2(e.target.value)}>
                            <option defaultValue value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                        </select>
                    </label>
                </div>
                <input type="submit" value="Pesquisar" />
            </form>
        </div>

        <div className={styles.products}>
            <div className={styles.productList}>
                <ProductSingle {...props}/>
                <ProductSingle {...props}/>
                <ProductSingle {...props}/>
                <ProductSingle {...props}/>
                <ProductSingle {...props}/>
                <ProductSingle {...props}/>
                <ProductSingle {...props}/>
                <ProductSingle {...props}/>
                <ProductSingle {...props}/>
                <ProductSingle {...props}/>
                <ProductSingle {...props}/>
                <ProductSingle {...props}/>
            </div>
        </div>
        </>
    )
}
