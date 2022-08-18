async function updateEmployeeHandler(event) {
  event.preventDefault();

  const id = document.getElementById('#select-employee-update').value;

  const firstName = document.getElementById(
    '#employee-first-name-update'
  ).value;
  const lastName = document.getElementById('#employee-last-name-update').value;
  const role = document.getElementById('#employee-role-update').value;
  const primaryVenue = document.getElementById(
    '#employee-primary-venue-update'
  ).value;

  const response = await fetch(`api/employees/${id}`, {
    method: 'PUT',
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
  .querySelector('#update-employee-btn')
  .addEventListener('click', updateEmployeeHandler);
