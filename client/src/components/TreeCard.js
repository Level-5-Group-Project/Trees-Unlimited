import React from 'react'
import "../styles/TreeCard.css"

function TreeCard(props) {
    const {name, type, size, price, imgUrl, description } = props
  return (
      <div className='tree-card-container'>
            <img src={imgUrl} alt="cherry tree" className='tree-image'/>
          <div className='card-details'>
            <a href="www.google.com" className='tree-name'>{name}</a>
            <p className='tree-description'>{description}</p>
            <span className='tree-price'>Starting at: <span className='bold-price'>{`$${price}`}</span></span>
            <div className='tree-size'>Maturity Size: <span className='bold-price'>{`${price}ft`}</span></div>
          </div>
          <div className="tree-type">{type}</div>
      </div>
  )
}

export default TreeCard