import React from "react";
import Contact from "./Contact";

const ContactList = ({ contacts, style }) => {
    const sortedContacts = contacts.sort((a,b) => a.lastName.localeCompare(b.lastName))
    return (
    <table>
      <thead>
        <tr>
          <th style={style.tableCell}>First name</th>
          <th style={style.tableCell}>Last name</th>
          <th style={style.tableCell}>Phone</th>
        </tr>
            </thead>
              <tbody >
            {sortedContacts && sortedContacts.length > 0 ? (sortedContacts.map((contact, i) => (
              
                    <tr key={i}>
                        <td style={style.tableCell}>{contact.firstName}</td>
                        <td  style={style.tableCell}>{contact.lastName}</td>
                        <td style={style.tableCell}>{contact.phoneNumber}</td>    
                   </tr>     
       
            ))) : (
                <tr >    
          <td style={style.tableCell}>First name</td>
          <td style={style.tableCell}>Last name</td>
          <td style={style.tableCell}>Phone</td>
       </tr>
            )}
        
     </tbody>
    </table>
    )
}
export default ContactList

