import style from './navBar.module.css'
import logo from '../../../assets/logo.png'
import { useState } from 'react';
import { Login } from '../login/Login';
import { Register } from '../register/Register';
import { User } from '../../../App';

export const NavBar = ({ userLogged, setUserLogged, setUser }: { userLogged: boolean, setUserLogged: React.Dispatch<React.SetStateAction<boolean>>, setUser: React.Dispatch<React.SetStateAction<User>> }) => {

    const [login, setLogin] = useState(false);
    const [register, setRegister] = useState(false);

    return (
        <div className={style.navBarContainer}>
            <img src={logo} className={style.logo} alt="click & buy" />
            <section className={style.linksContainer}>
                {!userLogged && <h1 onClick={() => setLogin(true)} className={style.link}>Login</h1>}
                {!userLogged && <h1 onClick={() => setRegister(true)} className={style.link}>Regístrate</h1>}
                {userLogged && <button onClick={() => setUserLogged(false)} style={{ background: "#FFB73B", borderRadius: "0rem" }}>Cerrar Sesión</button>}
            </section>
            {login && <Login setToRegister={() => {
                setRegister(true)
                setLogin(false)
            }}
                closeModal={() => setLogin(false)} logUser={() => setUserLogged(true)} setUser={setUser} />}
            {register && <Register setToLogin={() => {
                setRegister(false)
                setLogin(true)
            }} setUser={setUser} closeModal={() => setRegister(false)} logUser={() => setUserLogged(true)} />}
        </div>
    )
}
