import {useState} from 'react'
import './App.css';
import MenuContainer from'./components/MenuContainer/index'
import Cart from './components/Cart/index'
import Search from './components/Search/index'
import './components/Product/index'

function App() {

  const [products, setProducts] = useState([
    { id: 1, name: 'Hamburguer', category: 'Sanduíches', price: 14.00, img: 'https://i.ibb.co/fpVHnZL/hamburguer.png' },
    { id: 2, name: 'X-Burguer', category: 'Sanduíches', price: 16.00, img: 'https://i.ibb.co/djbw6LV/x-burgue.png' },
    { id: 3, name: 'Big Kenzie', category: 'Sanduíches', price: 18.00, img: 'https://i.ibb.co/FYBKCwn/big-kenzie.png' },
    { id: 4, name: 'Fanta Guaraná', category: 'Bebidas', price: 5.00, img: 'https://i.ibb.co/cCjqmPM/fanta-guarana.png'},
    { id: 5, name: 'Coca', category: 'Bebidas', price: 4.99, img:'https://i.ibb.co/fxCGP7k/coca-cola.png' },
    { id: 6, name: 'Fanta', category: 'Bebidas', price: 4.99, img: 'https://i.ibb.co/QNb3DJJ/milkshake-ovomaltine.png' },
  ]);
  const [filteredProducts, setFilteredProducts] = useState([])
  const [currentSale, setCurrentSale] = useState([])

  function showProducts(input){
    setFilteredProducts(products.filter((item) => {return item.name === input}))
    
  }


  function removeItem(productId){
    const filteredItem = currentSale.filter((item) => {
      return item.id !== productId
    })

    setCurrentSale(filteredItem)
  }
  const reduceProducts = currentSale
    .reduce((valorAnterior, valorAtual) => (
    valorAnterior + valorAtual.price), 0)
    .toFixed(2)
    
  function handleClick(productId){
    const foundedProduct = products.find((item) => ( item.id === productId))
    const cart = currentSale.find((item) => (item.id === productId))
    

    if(!cart){
    setCurrentSale([...currentSale,foundedProduct])
  
    }
  }
  

  return (
    <div className="App">
      <header className="App-header">
        <Search className="Search" showProducts={showProducts}/>
        <div className="Main">
        <MenuContainer className="Menucontainer" products={products} handleClick={handleClick} filteredProducts={filteredProducts}/>
        <Cart className="Cart" currentSale={currentSale} reduceProducts={reduceProducts} removeItem={removeItem}/>
        </div>
      </header>
    </div>
  );
}

export default App;
