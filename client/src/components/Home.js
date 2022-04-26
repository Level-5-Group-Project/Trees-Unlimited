import React, {useContext, useEffect} from 'react'
import { MainContext } from '../contextProvider'
import TreeCard from './TreeCard'
import "../styles/Home.css"

function Home() {

  const {TreeData, getAllTrees} = useContext(MainContext)

  useEffect(() => {
      getAllTrees()
      console.count("get requests made")
  }, [])
  
    
  return (
    <div>
      <h1 className='home-title'>Welcome to Trees Unlimited!</h1>
      <br />
      <br />
      <div className='fieldset-container'>
        <h3 className='fieldset-title'>Browse our products</h3>
        <div className='tree-fieldset'>
          <div className='tree-cards'> 
            {TreeData.map(tree => <TreeCard {...tree} key={tree.name}/>)}
          </div>
        </div>
      </div>
      <br />
      <br />
    </div> 
  )
}

export default Home