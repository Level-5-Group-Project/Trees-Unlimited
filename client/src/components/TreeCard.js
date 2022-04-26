import React from 'react'
import "../styles/TreeCard.css"

function TreeCard(props) {
    const {name, type, size, price, imgUrl, description } = props
  return (
      <div className='tree-card-container'>
          <img src={imgUrl} alt="cherry tree" className='tree-image'/>
          <span className='tree-type'>{type}</span>
          <div className='card-details'>
            <a href="www.google.com" className='tree-name'>{name}</a>
            <p className='tree-description'>{description}</p>
            <span className='tree-price'>{`Price: $${price}`}</span>
            <div className='tree-size'>{`Size: ${size}ft.`}</div>
          </div>
      </div>
  )
}

export default TreeCard