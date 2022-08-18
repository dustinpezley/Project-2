// async function viewEmployeesHandler(event) {
//   event.preventDefault();

//   const response = await fetch('/api/employees/', {
//     method: 'GET',
//     headers: { 'Content-Type': 'application/json' },
//   });

//   if (response.ok) {
//     document.querySelector('#view-employees-modal').modal('show');
//   } else {
//     alert(response.statusText);
//   }
// }

document
  .querySelector('#view-employees-button')
  .addEventListener('click', (event) => {
    event.preventDefault();

    const response = fetch('/api/employees');
    if (response.ok) {
      response.json();
    } else {
      alert(response.statusText);
    }
  });

// document
//   .querySelector('#view-employees-button')
//   .addEventListener('click', viewEmployeesHandler);

// document.addEventListener('DOMContentLoaded', () => {
//   if (window.location.href.indexOf('#view-employees-modal') !== -1) {
//     document.getElementById('view-employees-modal').modal('show');
//   }
// });
