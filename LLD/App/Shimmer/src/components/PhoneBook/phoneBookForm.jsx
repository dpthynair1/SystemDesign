import React, {useState} from "react";

const PhoneBookForm = ({addEntryToPhoneBook, style}) => {

    const initialState = {
        firstName: 'coder',
        lastName: 'byte',
        phoneNumber: '8885559999'
    }
    const [user, setUser] = useState(initialState)
    
    const handleChange = (e) => {
        
      
        const inputName = e.target.name;
      const value = e.target.value
        console.log(inputName, value)
      setUser({...user, [inputName]: value})
    }
  
  const handleSubmit = (e) => {
    e.preventDefault()
    if (!user.firstName || !user.lastName || !user.phoneNumber) return;
    setUser({
      firstName: '',
      lastName: '',
      phoneNumber: ''
    })
   addEntryToPhoneBook(user)
  }

    return (
    <form onSubmit={handleSubmit} style={style.form.container}>
      <label>First name:</label>
      <br />
      <input
        style={style.form.inputs}
        className='firstName'
        name='firstName'
        type='text'
        value={user.firstName}
        onChange={handleChange}
      />
      <br />
      <label>Last name:</label>
      <br />
      <input
        style={style.form.inputs}
        className='lastName'
        name='lastName'
        type='text'
        value={user.lastName}
        onChange={handleChange}
      />
      <br />
      <label>Phone:</label>
      <br />
      <input
        style={style.form.inputs}
        className='phoneNumber'
        name='phoneNumber'
        type='text'
        value={user.phoneNumber}
        onChange={handleChange}
      />
      <br />
      <input
        style={style.form.submitBtn}
        className='submitButton'
        type='submit'
        value='Add User'
      />
    </form>
    )
}

export default PhoneBookForm;