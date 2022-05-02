import React from 'react'

import "../styles/serviceCard.css"

function ServiceCard(props) {
    
    const {service,  priceRange, imgUrl, description} = props
  return (
      <div className='service-card'>
            <img src={imgUrl} alt="" className='serviceimg'/>
          <div className='details'>
            <div className='service'>{service}</div>
            <p className='description'>{description}</p>
            <span className='price'>Starting at: <span className='bold-price'>{`$${priceRange}`}</span></span>
          </div>
      </div>
  )
}

export default ServiceCard