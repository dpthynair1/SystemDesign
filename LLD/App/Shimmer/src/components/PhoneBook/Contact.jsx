import React, {useState} from "react";
import ContactList from "./ContactList";
import PhoneBookForm from "./phoneBookForm";

const style = {
 table: {
    borderCollapse: 'collapse'
  },
  tableCell: {
    border: '1px solid gray',
    margin: 0,
    padding: '5px 10px',
    width: 'max-content',
    minWidth: '150px'
  },
  form: {
    container: {
      padding: '20px',
      border: '1px solid #F0F8FF',
      borderRadius: '15px',
      width: 'max-content',
      marginBottom: ''
    },
    inputs: {
      marginBottom: '5px'
    },
    submitBtn: {
      marginTop: '10px',
      padding: '10px 15px',
      border: 'none',
      backgroundColor: 'lightseagreen',
      fontSize: '14px',
      borderRadius: '5px'
    }
  }
  
};



const Contact = ({}) => {

    const [contacts, setContacts] = useState([])
    
    const addEntryToPhoneBook = (contact) => {
setContacts([...contacts, contact])
    }
    
    return (
         <section>
            <PhoneBookForm addEntryToPhoneBook={ addEntryToPhoneBook}   style={style}/>
            <ContactList style={style} contacts={contacts } />
    </section>
    )
}

export default Contact;