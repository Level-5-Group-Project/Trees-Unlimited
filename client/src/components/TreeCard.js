import React from 'react'
import "../styles/TreeCard.css"

function TreeCard(props) {
    const {name, type, color, size, price, imgUrl, description } = props
    console.log(props)
  return (
    <div className='tree-card-container'>
        <p className='tree-type'>{type}</p>
        <h1 className='tree-name'>{name}</h1>
        <img src={imgUrl} alt="cherry tree" className='tree-image'/>
        <p className='tree-description'>{description}
          <h3 className='tree-color'>{`Color: ${color}`}</h3>
          <h3 className='tree-size'>{`Size: ${size}`}</h3>
          <h3 className='tree-price'>{`Price: $${price}`}</h3>
        </p>
    </div>
  )
}

export default TreeCard