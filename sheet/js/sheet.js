const scriptURL = 'https://script.google.com/macros/s/AKfycbxmcidGXwE_gibH76D2r07E-STHWg-3t7wkoYTouVwHsnxDBUkHZIr_7gOXS44FcEKz/exec'

const form = document.forms['contact-form']

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
  .then( response => alert("Thank you! your form is submitted successfully." ))
  .then(() => { window.location.reload(); })
  .catch(error => console.error('Error!', error.message))
})