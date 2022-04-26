import React from 'react'
import "../styles/TreeCard.css"

function TreeCard(props) {
    const {name, type, color, size, price } = props
    console.log(props)
  return (
    <div className='tree-card-container'>
        <h3 className='tree-type'>{type}</h3>
        <h1 className='tree-name'>{name}</h1>
        <h3 className='tree-color'>{color}</h3>
        <h3 className='tree-size'>{size}</h3>
        <h3 className='tree-price'>{price}</h3>
    </div>
  )
}

export default TreeCard