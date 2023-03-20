function displayContactModal() {
    const modal = document.getElementById("contact_modal");
    const bground = document.querySelector('.bground')
    modal.style.display = "block";
    bground.style.display = "block";
}

function closeContactModal() {
    const modal = document.getElementById("contact_modal");
    const bground = document.querySelector('.bground')
    modal.style.display = "none";
    bground.style.display = "none";
}

const formData = document.querySelectorAll('.formData')
const firstname = document.querySelector('#first-name')
const name = document.querySelector('#name')
const email = document.querySelector('#email')
const message = document.querySelector('#message')

function addErrorDataSet(index, message) {
    formData[index].dataset.error = message
    formData[index].dataset.errorVisible = true
}

function removeErrorDataSet(index) {
    formData[index].removeAttribute('data-error')
    formData[index].dataset.errorVisible = false
}

function isValidFirstName() {
    if (firstname.value.trim() === "") {
      addErrorDataSet(0, "Vous avez oublié de saisir le prénom")
      return false
    } else if (firstname.value.trim().length < 2) {
      addErrorDataSet(0, "Le prénom ne posséde pas assez de caractères")
      return false
    } else {
      removeErrorDataSet(0)
      return true
    }
  }
  
  function isValidName() {
    if (name.value.trim() === "") {
      addErrorDataSet(1, "Vous avez oublié de saisir le nom")
      return false
    } else if (name.value.trim().length < 2) {
      addErrorDataSet(1, "Le nom ne posséde pas assez de caractères")
      return false
    } else {
      removeErrorDataSet(1)
      return true
    }
  }
  
  function isValidEmail() {
    const regex = /[a-z0-9-_.]+@[a-z0-9-_.]+\.[a-z]{2,}/
    if (email.value.trim() === "") {
        addErrorDataSet(2, "Vous avez oublié de saisir l'email")
        return false
    } else if (!regex.test(email.value)) {
        addErrorDataSet(2, "Le format de l'email est incorrect")
        return false
    } else {
        removeErrorDataSet(2)
        return true
    }
  }

  function isValidMessage() {
    if (message.value.trim() === "") {
        addErrorDataSet(3, "Vous avez oublié de saisir un message")
        return false
      } else if (message.value.trim().length < 150) {
        addErrorDataSet(3, "Le message ne posséde pas assez de caractères (minimum 150)")
        return false
      } else {
        removeErrorDataSet(3)
        return true
      }
  }

document.querySelector('form').addEventListener('submit', function(e) {
    e.preventDefault()
    const isValid = [isValidFirstName(), isValidName(), isValidEmail(), isValidMessage()].every(Boolean);
    if (isValid) {
        console.log(`Nom : ${name.value}\nPrénom : ${firstname.value}\nEmail : ${email.value}\nMessage : ${message.value}`)
    }
})
