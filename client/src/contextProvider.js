import React, { useState } from "react"
import axios from "axios"

const MainContext = React.createContext()

function ContextProvider(props) {

    const [TreeData, setTreeData] = useState([])
    const [newService, setNewService] = useState([])
    const [formData, setFormData] = useState([])

    function getAllTrees() {
        return axios.get('/tree')
            .then(res => setTreeData(res.data))
            .catch(err => console.log(err))
    }

    function getAllServices(){
        return axios.get('/service')
            .then(res =>{
                // console.log(res.data)
                setNewService(res.data)
            })
            .catch(err => console.log(err))
    }
    function getFormData(){
        return axios.get('/form')
            .then(res => setFormData(res.data))
            .catch(err => console.log(err))
    }
    // post request made for services form
    function postForm (newFormData) {
        return axios.post("/form", newFormData)
            .then(res => setFormData(prevData => [...prevData, res.data]))
            .catch(error => console.log(error))
    }

    // const service = {
    //     firstName: props.firstName|| '',
    //     lastName: props.lastName|| '',
    //     email: props.email||'',
    //     requestedCall:props.requestedCall|| '',
    //     phoneNumber: props.phoneNumber|| ''
    // }
   
    // function addService(event, service) {
    //     console.log(service)
    //     event.preventDefault()
    //     axios.post('/service', service)
    //         .then(res => {
    //             setNewService(prevService => [...prevService, res.data])
    //             console.log(res.data)
    //         })
    //         .catch(err => console.log(err))
            
    // }
    // function deleteService(serviceId) {
    //     axios.delete(`/service/${serviceId}`)
    //         .then(res => {
    //             setNewService(prevService => prevService.filter(service => {
    //                 console.log(serviceId._id, service._id)
    //                 if (service._id !== serviceId._id) {
    //                     return service
    //                 }
    //             }))
    //         }
    //         ).catch(err => console.log(err))
    // }
    // function editService(update, serviceId){
    //     axios.put(`/services/${serviceId}`, update)
    //     .then(res =>{
    //         setNewService(prevService=> prevService.map(service => service._id !== serviceId ? service:res.data)
    //         )
    //     })
    //     .catch(err=> console.log(err))
    // }
    
    // const [input, setInput] = React.useState(service)
    // function handleChange(e) {
    //     const { name, value } = e.target
    //     console.log(name, value)
    //     setInput(prevInput => ({
    //         ...prevInput, [name]: value
    //     }))
    // }
    return (
        <MainContext.Provider value={{
            TreeData,
            newService,
            formData,
            getFormData,
            setTreeData,
            getAllTrees,
            getAllServices,
            postForm
        }}>
            {props.children}
        </MainContext.Provider>
    )
}

export { ContextProvider, MainContext }