import './style.css'
import {useState} from 'react'
export default function Search ({showProducts}) {
    const [userInput, setUserInput] = useState("")
    return(
    <nav className="Nav">
    <img scr="./BurguerKenzie.png" alt="Burguer Kenzie"></img>
    <input placeholder="Busque seu produto aqui"
    value={userInput}
    className="Input"
    onChange={(e) => setUserInput(e.target.value)}></input>
    <button className="ButtonInput" onClick={() => showProducts(userInput)}>Pesquisar</button>
    </nav>
    )

}