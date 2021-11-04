import Products from '../Product/index'
import './style.css'
export default function MenuContainer ({products, handleClick, filteredProducts}) {
  return( 
    <>
    {filteredProducts.length < 1 ?
      
      (
        <ul className="ContainerItems">
        {products.map((item, index) => (
          <Products item={item} key={index} index={index} handleClick={handleClick} />
        ))}
        </ul>
      )
      :

      (
        <ul className="ContainerItems">
        {filteredProducts && filteredProducts.map((item, index) => ( 
        <Products item={item}  key={index} index={index} handleClick={handleClick} />
        ))}
        </ul>
      )
    }
    </>
  )}