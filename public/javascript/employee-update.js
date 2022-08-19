async function updateEmployeeHandler(event) {
  event.preventDefault();

  const id = document.getElementById('select-employee-update').value;

  const firstName = document.getElementById('employee-first-name-update').value;
  const lastName = document.getElementById('employee-last-name-update').value;
  const role = document.getElementById('employee-role-update').value;
  const primaryVenue = document.getElementById(
    'employee-primary-venue-update'
  ).value;

  console.log(id, firstName, lastName, role, primaryVenue);
  const response = await fetch(`/api/employees/${id}`, {
    method: 'PUT',
    body: JSON.stringify({
      first_name: firstName,
      last_name: lastName,
      role_id: role,
      primary_venue: primaryVenue,
    }),
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
