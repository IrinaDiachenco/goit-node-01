const path = require('path')
const fs = require('fs').promises

const contactsPath = path.join(__dirname, 'db', 'contacts.json')

// TODO: задокументировать каждую функцию
function listContacts() {
  // ...твой код
fs.readFile(contactsPath)
  .then((data) => console.log(data.toString()))
  .catch((err) => console.log(err.message))
}

function getContactById(contactId) {
  // ...твой код
fs.readFile(contactsPath)
    .then((data) => {
        const users = JSON.parse(data)
        const user = users.find(user => user.id === contactId)
        console.log(user)
    })
  .catch((err) => console.log(err.message))
}

getContactById()

function removeContact(contactId) {
  // ...твой код
}

function addContact(name, email, phone) {
  // ...твой код
}