// src/App.js
import "./App.css";
import contactsList from "./contacts.json"
import React, { useState } from "react";



function App() {

  const [contacts, setContacts] = useState(contactsList.slice(0,5));
  RandomList = Math.random * (contactsList.length - 6 + 1) + 6
  const filteredList = contactsList.filter(contact, index, contacts)
  
  return (
  <div className="App">
    <table>
      <h1>Inronhack Contacts</h1>
      <button /*onClick={() => setContacts() => filteredList}*/

       // fucntion filter de la list à partir de la table


       // function prenant [contacts, setContacts] = useState(contactsList.slice(6,contactsList.length))
       // suppression des contacts randomisés de la liste pour éviter les doublons
       // intégration du contact randomisé à la fin de la table
       

      >Add Random Contact
      </button>

      <tr><th>Picture</th><th>Name</th><th>Popularity</th><th>Won Oscar</th><th>Won Emmy</th></tr>
      <tr>
        <td><img src={contacts[0].pictureUrl} alt={contacts[0].name} /></td>
        <td>{contacts[0].name}</td>
        <td>{contacts[0].popularity}</td>
        {contacts[0].wonOscar && <td>🏆</td>}
        {contacts[0].wonEmmy && <td>🏆</td>}
      </tr>
      <tr>
        <td><img src={contacts[1].pictureUrl} alt={contacts[1].name} /></td>
        <td>{contacts[1].name}</td>
        <td>{contacts[1].popularity}</td>
        {contacts[1].wonOscar && <td>🏆</td>}
        {contacts[1].wonEmmy && <td>🏆</td>}
      </tr>
      <tr>
        <td><img src={contacts[2].pictureUrl} alt={contacts[2].name} /></td>
        <td>{contacts[2].name}</td>
        <td>{contacts[2].popularity}</td>
        {contacts[2].wonOscar && <td>🏆</td>}
        {contacts[2].wonEmmy && <td>🏆</td>}
      </tr>
      <tr>
        <td><img src={contacts[3].pictureUrl} alt={contacts[3].name} /></td>
        <td>{contacts[3].name}</td>
        <td>{contacts[3].popularity}</td>
        {contacts[3].wonOscar && <td>🏆</td>}
        {contacts[3].wonEmmy && <td>🏆</td>}
      </tr>
      <tr>
        <td><img src={contacts[4].pictureUrl} alt={contacts[4].name} /></td>
        <td>{contacts[4].name}</td>
        <td>{contacts[4].popularity}</td>
        {contacts[4].wonOscar && <td>🏆</td>}
        {contacts[4].wonEmmy && <td>🏆</td>}
      </tr>

    </table>
  </div>
  )
}
export default App;
