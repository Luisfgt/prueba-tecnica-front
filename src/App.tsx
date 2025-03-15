import './App.css'
import { NavBar } from './components/organisms/navBar/navBar'
import { PrincipalBanner } from './components/organisms/principalBanner/PrincipalBanner'
import { ProductCart1 } from './components/organisms/productCard1/ProductCart1'
import { ProductCard2 } from './components/organisms/productCard2/ProductCard2'
import { articlesMock } from './helpers/mocks/articlesMock'

function App() {

  return (
    <div className='AppContainer'>
      <NavBar />
      <PrincipalBanner />
      <div className='bannersContainer'>
        {
          articlesMock.slice(0, 2).map((article) => {
            return <ProductCart1 key={article.id} name={article.name} price={article.price} image={article.image || ''} />
          })
        }
      </div>
      <div className='containerCards'>
        {
          articlesMock.slice(2).map((article) => {
            return <ProductCard2
              image={article.image}
              name={article.name}
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
