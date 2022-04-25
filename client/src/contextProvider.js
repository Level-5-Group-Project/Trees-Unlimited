import React, {useState} from "react"

const MainContext = React.createContext()


function ContextProvider(props) {

    const [color, setColor] = useState("red")
    console.log(color)
    return(
        <MainContext.Provider value={{
            color,
            setColor
        }}>
            {props.children}
        </MainContext.Provider>
    )
}

export {ContextProvider, MainContext}