import {Link} from "react-router-dom";
import styles from "../styles./product.module.css"
//Los nombre dentro de Product bienen de la misma api de mercadoLibre
const Product = ({title, thumbail, permalink, id})=>{
    return(
        <div className={styles.product}>
            <img src={thumbail} alt={title}></img>
            <h5>{title}</h5>
            //esta Linea a donde esta el producto en la pagina 
            oficial de mercadoLibre
            <a href={permalink} target="blank">A Meli</a>
            <Link to= {`/products/${id}`}>Detalle</Link>
        </div>
    )
}

export default Product;