import { icons } from "../../../helpers/icons"
import style from './productCard2.module.css'

export const ProductCard2 = ({ name, price, image, quantity }: { name: string, price: number, image: string, quantity: number }) => {
    return (
        <div className={style.card3Container}>
            <img className={style.imageCard2} src={image} alt="" />
            <div className={style.ButtonAndInfo2}>
                <div className={style.infoContainer2}>
                    <div className={style.nameAndQuantity}>
                        <h3 className={style.quantity}>{quantity + " disponible(s)"}</h3>
                        <h2 className={style.name2}>{name}</h2>
                    </div>
                    <h1 className={style.price}><span>$</span>{price}</h1>
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
