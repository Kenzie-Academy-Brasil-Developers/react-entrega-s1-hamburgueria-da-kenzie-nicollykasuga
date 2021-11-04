import './style.css'
export default function Products ({item, index, handleClick}) {
    return (
    <ul className="List" key={index}>
    <div className="backgroundImage"><img className="Image" src={item.img} alt={item.name}></img></div>
    <li className="Name">{item.name}</li>
    <li   className="Category">{item.category}</li>
    <li  className="Price">R$ {item.price}</li>
    <button   className="ButtonAdd" onClick={() => {handleClick(item.id)}}>Adicionar</button>
    </ul>
    
    )}