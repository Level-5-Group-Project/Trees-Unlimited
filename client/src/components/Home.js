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
    <>
    <div className='tree-cards'> 
      {TreeData.map(tree => <TreeCard {...tree} key={tree.name}/>)}
    </div>
      
    </> 
  )
}

export default Home