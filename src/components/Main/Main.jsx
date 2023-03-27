import React from 'react'
import { ListButton, MainContainer, MapButton } from './MainStyle'

const Main = () => {
  return (
    <MainContainer>
        <h2>Blocos recomendados</h2>
        <div className='show-content'>
          <ListButton>Lista</ListButton>
          <MapButton>Mapa</MapButton>
        </div>
    </MainContainer>
  )
}

export default Main