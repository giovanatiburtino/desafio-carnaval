import React from 'react'
import { Card } from './CardsStyle'
import locationIcon from '../../assets/location.svg'
import { getId } from '../../utils/ReturnImageById'

const Cards = (props) => {
  return (
    <Card>
      <img src={getId(props.bloco.id)} alt={props.bloco.imageUrl} />

      <div className='content'>
        <h3>{props.bloco.name}</h3>
        <p>{props.bloco.description}</p>
        <div className="location">
          <img src={locationIcon} alt="Location icon" />
          {props.bloco.location}
        </div>
      </div>
    </Card>
  )
}

export default Cards