const path = require('path')
const fs = require('fs').promises

const contactsPath = path.join(__dirname, 'db', 'contacts.json')

// TODO: задокументировать каждую функцию
function listContacts() {
fs.readFile(contactsPath)
  .then((data) => console.table(JSON.parse(data)))
  .catch((err) => console.log(err.message))
}

// listContacts()

function getContactById(contactId) {
fs.readFile(contactsPath)
    .then((data) => {
        const users = JSON.parse(data)
        const user = users.find(user => user.id == contactId)
        console.table(user)
    })
  .catch((err) => console.log(err.message))
}

//  getContactById(3)

function removeContact(contactId) {
  fs.readFile(contactsPath)
    .then((data) => {
        const users = JSON.parse(data)
        const user = users.filter(user => user.id != contactId)
        console.table(user)
    })
  .catch((err) => console.log(err.message))
}

function addContact(name, email, phone) {
    let users =[]
  fs.readFile(contactsPath)
    .then((data) => {
       users =JSON.parse(data)
       const newUser = {
        id: users.length + 1,
        name,
        email,
        phone
       }
       users.push(newUser)

      fs.writeFile(contactsPath, JSON.stringify(users))
        .then(console.table(users))
        .catch((err) => console.log(err.message))
    })
    .catch((err) => console.log(err.message))
}

module.exports = { listContacts, getContactById, removeContact, addContact }