import './style.css'
export default function Cart ({currentSale, reduceProducts, removeItem}) {
    return(
      <>
        <section className="CartSection">
          <div className="CartTitle">
            <h1>Carrinho de Compras</h1>
          </div>
          <div className="CartDiv">
            <ul className="CartList">
            {currentSale.map((item, index) => (
              <div key={index} className="CartItem">
                <img  className="ImageCart" scr={item.img} alt={item.name}></img>
                <li className="NameCart">{item.name}</li>
                <li className="CategoryCart">{item.category}</li>
                <button className="ButtonRemove" onClick={()=> removeItem(item.id)}>Remover</button>
              </div>
          ))}
          </ul>
          <div className="LineStyle"></div>
            <div className="TotalContainer">
              <p className="TotalCost">Total:</p>
              <p>R$ {reduceProducts}</p>
            </div>
            </div>
      </section>
      </>
    )
}