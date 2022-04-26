import React, {useState, useEffect} from "react"
import axios from "axios"

const MainContext = React.createContext()

function ContextProvider(props) {

    const [TreeData, setTreeData] = useState([])

    function getAllTrees(){
        axios.get('/tree')
        .then(res => setTreeData(res.data))
        .catch(err => console.log(err))
    }

    useEffect(() => {
        getAllTrees()
    }, [])

    return(
        <MainContext.Provider value={{
            TreeData,
            setTreeData,
        }}>
            {props.children}
        </MainContext.Provider>
    )
}

export {ContextProvider, MainContext}