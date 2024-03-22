import css from './ContactList.module.css';
import Contact from '../Contact/Contact';

const ContactList = ({ contacts, deleteContact }) => {
  console.log(contacts)
  return (
    <ul className={css.contactList}>

       {contacts.map((item) => {
        return <li key={item.id}>
                  <Contact
                  contact={item}
                  deleteContact={deleteContact}
                  // addContact={addContact}
                  />
               </li>
           })}
    </ul>  
    )  
}

export default ContactList

// userContact
// userData={userData}
// name={item.name}
// number={item.number}
// console.log(contacts)
// console.log(users)