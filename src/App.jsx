import './GlobalStyle.jsx'
import { useState } from 'react'
import Header from './components/Header/Header'
import Main from './components/Main/Main.jsx'
import Cards from './components/Cards/Cards.jsx'
import styled from 'styled-components'
import blocos from "./components/Blocos/blocos.json"

function App() {
  const [buscarBloco, setBuscarBloco] = useState("");
  const [cidade, setCidade] = useState("");

const CardsContainer = styled.div`
    max-width: 1200px;
    margin: 0 auto;
    margin-bottom: 10rem;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 32px;
`


  return (
    <>
        <Header buscarBloco={buscarBloco} setBuscarBloco={setBuscarBloco} cidade={cidade} setCidade={setCidade} />
        <Main />
        <CardsContainer>
          {blocos
          .filter((bloco) => {
            return bloco.name.toLowerCase().includes(buscarBloco.toLowerCase())
          })
          .filter((bloco) => {
            return cidade ? bloco.location.includes(cidade) : bloco;
          })
          .map((bloco) => {
            return (
              <Cards key={bloco.id} bloco={bloco}/>
            )
          })
          }
        </CardsContainer> 
    </>
  )
}

export default App
