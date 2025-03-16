import { useEffect, useState } from 'react'
import './App.css'
import { NavBar } from './components/organisms/navBar/navBar'
import { PrincipalBanner } from './components/organisms/principalBanner/PrincipalBanner'
import { ProductCart1 } from './components/organisms/productCard1/ProductCart1'
import { ProductCard2 } from './components/organisms/productCard2/ProductCard2'
import { getFromBack } from './helpers/getFromBack'

interface Articulos {
  id: number;
  image: string;
  name: string;
  price: number;
  quantity: number;
  category: string;
}

export interface User {
  id: number;
  name: string;
  email: string;
  password: string;
  categoryDiscount: string;
  discount: number;
}

function App() {

  const [articles, setArticles] = useState<Articulos[]>([]);
  const [userLogged, setUserLogged] = useState(false);
  const [user, setUser] = useState<User>({
    id: 0,
    name: '',
    email: '',
    password: '',
    categoryDiscount: '',
    discount: 0
  })

  const getProducts = async () => {
    try {
      const products: Articulos[] = await new getFromBack().getProducts();
      setArticles(products);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getProducts();
  }, [])

  return (
    <div className='AppContainer'>
      <NavBar userLogged={userLogged} setUserLogged={setUserLogged} setUser={setUser} />
      <PrincipalBanner />
      <div className='bannersContainer'>
        {
          articles.slice(0, 2).map((article) => {
            return <ProductCart1 isLogged={userLogged} key={article.id} name={article.name} price={article.price} secondPrice={(userLogged && article.category === user.categoryDiscount) ? (article.price * user.discount) : false} image={article.image || ''} />
          })
        }
      </div>
      <div className='containerCards'>
        {
          articles.slice(2).map((article) => {
            return <ProductCard2
              isLogged={userLogged}
              image={article.image}
              name={article.name}
              secondPrice={(userLogged && article.category === user.categoryDiscount) ? (article.price * user.discount) : false}
              price={article.price}
              quantity={article.quantity}
              key={article.id}
            />
          })
        }
      </div>
    </div>
  )
}

export default App
