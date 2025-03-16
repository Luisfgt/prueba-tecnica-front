import { icons } from "../../../helpers/icons"
import style from './productCard2.module.css'

export const ProductCard2 = ({ name, price, image, quantity, isLogged, secondPrice }: { name: string, price: number, image: string, quantity: number, isLogged: boolean, secondPrice: number | false }) => {

    return (
        <div className={style.card3Container}>
            <img className={style.imageCard2} src={image} alt="" />
            <div className={style.ButtonAndInfo2}>
                <div className={style.infoContainer2}>
                    <div className={style.nameAndQuantity}>
                        <h3 className={style.quantity}>{quantity + " disponible(s)"}</h3>
                        <h2 className={style.name2}>{name}</h2>
                    </div>
                    <div style={{ display: "flex", gap: "1rem", flexDirection: "column", position: "relative" }}>
                        <h1 style={{ textDecoration: (isLogged && secondPrice) ? "line-through" : "none", fontSize: (isLogged && secondPrice) ? "20px" : "30px", margin: "0", position: (isLogged && secondPrice) ? "absolute" : "relative", top: (isLogged && secondPrice) ? "-1rem" : "" }} className={style.price}>{!secondPrice && <span>$</span>}{parseFloat(price.toFixed(2))}</h1>
                        {secondPrice && <h1 className={style.price}><span>$</span>{parseFloat(secondPrice.toFixed(2))}</h1>}
                    </div>
                </div>
                <button className={style.buttonContainer2}>
                    <div className={style.button2}>
                        {icons().cart}
                    </div>
                </button>
            </div>
        </div>
    )
}
