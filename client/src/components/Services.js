import React from 'react'
import '../styles/Services.css'
import { MainContext } from '../contextProvider'
import ServiceCard from './ServiceCard'
function Services() {
  const{newService, getAllServices} = React.useContext(MainContext)
  React.useEffect(()=>{
    getAllServices()
    console.log('ok')
  },[])
  return (
    <div>
      <div className="showcase2">
        <h1>Trees Unlimited</h1>
        <div className="24">
          <h2> 24/7 emergancy service</h2>
          <p>Serving residential areas and companies near you! Check out the services we provide!</p>
        </div>
      </div>
      <div className="services">
      <p>We not only promise to deliver expert work, but that you will never have to worry about clean-up. We leave every site immaculate. Trees Unlimited, we specialize in large, dangerous tree removal and trimming, tree planting and delivery. We are extremely experienced at working around wires, houses, decks, or any other obstruction underneath the tree, and are extreamly passionate about planting trees, and maintaining the health of the tree. </p>
      </div>
      <div className="serviceCards">
        <h3>Our services Includes:</h3>
        {newService.map(service => <ServiceCard {...service} key={service.service}/>)}
      </div>

    </div>

  )
}

export default Services