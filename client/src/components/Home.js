import React, {useContext} from 'react'
import { MainContext } from '../contextProvider'
import TreeCard from './TreeCard'

function Home() {

    const {TreeData} = useContext(MainContext)

    
  return (
    <>
       {TreeData.map(tree => <TreeCard {...tree} key={tree.name}/>)}
    </> 
  )
}

export default Home