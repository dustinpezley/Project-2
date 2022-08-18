async function addEmployeeHandler(event) {
  event.preventDefault();

  const firstName = document.getElementById('#employee-first-name').value;
  const lastName = document.getElementById('#employee-last-name').value;
  const role = document.getElementById('#employee-role').value;
  const primaryVenue = document.getElementById('#employee-primary-venue').value;

  const response = await fetch('api/employees/', {
    method: 'POST',
    body: JSON.stringify(firstName, lastName, role, primaryVenue),
    headers: { 'Content-Type': 'application/json' },
  });

  if (response.ok) {
    document.location.reload();
  } else {
    alert(response.statusText);
  }
}

document
  .querySelector('#add-employee-btn')
  .addEventListener('click', addEmployeeHandler);
