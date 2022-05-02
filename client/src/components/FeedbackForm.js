import axios from 'axios'
import React, {useContext, useState, useEffect} from 'react'
import { MainContext } from '../contextProvider'
import "../styles/FeedbackForm.css"

function FeedbackForm(props) {
  const {addFormEntry} = props
 
  const {formData, setFormData} = useContext(MainContext)
  const [newFormEntry,setNewFormEntry] = useState({
    firstName: "",
    lastName: "",
    requestedCall: "",
    email: "",
    phoneNumber: "",
    comment: ""
  })

  function handleNewFormData (e){
    const {value, name} = e.target
    setNewFormEntry(prevEntry => ({...prevEntry, [name]: value}))
  }

  function handleSubmit(e){
    e.preventDefault()
    addFormEntry(newFormEntry)
      console.log("clicked submit")
    setNewFormEntry({
      firstName: "",
      lastName: "",
      requestedCall: "",
      email: "",
      phoneNumber: "",
      comment: ""
    })
  }

  return (
    <form onSubmit={handleSubmit}
          className='feedback-form-container'>
      <h3 className='form-header'>Have any questions or comments?</h3>
      <input type="text" 
             name="firstName"
             value={newFormEntry.firstName}
             onChange={handleNewFormData}
             placeholder="First Name"
      />
      <input type="text" 
             name="lastName"
             value={newFormEntry.lastName}
             onChange={handleNewFormData}
             placeholder="Last Name"
      />
      <select type="text" 
             name="requestedCall"
             value={newFormEntry.requestedCall}
             onChange={handleNewFormData}>
        <option value="">Request a call?</option>
        <option value="Yes" >Yes</option>
        <option value="No">No</option>
      </select>
      <input type="text" 
             name="email"
             value={newFormEntry.email}
             onChange={handleNewFormData}
             placeholder="Email Address"
      />
      <input type="number" 
             name="phoneNumber"
             value={newFormEntry.phoneNumber}
             onChange={handleNewFormData}
             placeholder="Phone Number"
      />
      <textarea name="comment" 
                type="text"
                default-value={newFormEntry.comment}
                onChange={handleNewFormData}
                placeholder="Enter Comments here"
                />
                
      <button>Submit</button>
    </form>
  )
}

export default FeedbackForm