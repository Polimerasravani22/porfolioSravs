const scriptURL = 'https://script.google.com/macros/s/AKfycbyeTUOrXpi3Pn00kUxOu6qryMHs7jG70yCLxL7qtclLy4LuhNRLm2r0j7Eb_F1_mjEQ/exec'

const form = document.forms['contact-form']

form.addEventListener('submit', e => {
  
  e.preventDefault()
  
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
  .then(response => alert("Thank you! Form is submitted" ))
  .then(() => { window.location.reload(); })
  .catch(error => console.error('Error!', error.message))
})
