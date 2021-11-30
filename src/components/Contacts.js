import contacts from '../contacts.json';
import { useState } from 'react'



 function Contacts() {
    const [allContacts, setContact] = useState(contacts.slice(0,5));


    function handleNewContact() {
        let randomContact = contacts[Math.floor(Math.random() * contacts.length)]
    
        setContact([randomContact, ...contacts])
    }

    function handleNameOrder () {

        let clone = JSON.parse(JSON.stringify(contacts))
        clone.sort((first, second) => {
            if (first.name > second.name) {
                return 1
            } 
            else if (first.name < second.name) {
                return -1
            }
            else {
                return 0
            }
        })
        setContact(clone)
    }

    function handlePopularity() {
        let clone = JSON.parse(JSON.stringify(contacts))
        clone.sort((first, second) => {
            if (first.popularity > second.popularity) {
                return -1
            } 
            else if (first.popularity < second.popularity) {
                return 1
            }
            else {
                return 0
            }
        })
        setContact(clone)

    }

    function handleDelete(id) {
        let filterContacts = contacts.filter((elem) => {
            return elem.id !== id
        })
        setContact(filterContacts)
    }
  
    return (
        <div>
           <h1>IronContacts</h1>
           <button onClick={handleNewContact}>Add Contact</button>
           <button onClick={handleNameOrder}>A-Z</button>
           <button onClick={handlePopularity}>20-0</button>
           <ul>
            {allContacts.map((elem) => {
                      return (
                        <li key={elem.id}>
                            Picture: <img src={elem.pictureUrl} alt=""/><br/>
                            Name: {elem.name}<br/>
                            Popularity: {elem.popularity.toFixed(2)}<br/>
                            Won Oscar: {elem.wonOscar === true && '🏆'}<br/>
                            Won Emmy: {elem.wonEmmy === true && '🏆'}<br/>
                            <button onClick={() => { handleDelete(elem.id) }}>Delete</button>
                        </li>

                      )  

                })
            }


           </ul>
        </div>
    )
}
export default Contacts