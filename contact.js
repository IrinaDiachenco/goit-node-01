const path = require('path')
const fs = require('fs').promises

const contactsPath = path.join(__dirname, 'db', 'contacts.json')

// TODO: задокументировать каждую функцию
function listContacts() {
  // ...твой код
fs.readdir(__dirname)
  .then((contacts) => {
    return Promise.all(
      contacts.map(async (id) => {
        const stats = await fs.stat(id)
        return {
          Id: id,
          Name: stats.name,
          Email: stats.email,
          Phone: stats.phone,
        }
      }),
    )
  })
  .then((result) => console.table(result))
}

function getContactById(contactId) {
  // ...твой код
}

function removeContact(contactId) {
  // ...твой код
}

function addContact(name, email, phone) {
  // ...твой код
}