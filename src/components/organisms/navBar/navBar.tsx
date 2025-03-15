import style from './navBar.module.css'
import logo from '../../../assets/logo.png'

export const NavBar = () => {
    return (
        <div className={style.navBarContainer}>
            <img src={logo} className={style.logo} alt="click & buy" />
            <section className={style.linksContainer}>
                <h1 className={style.link}>Artículos</h1>
                <h1 className={style.link}>Subida</h1>
            </section>
        </div>
    )
}
