async function addEmployeeHandler(event) {
  event.preventDefault();

  const firstName = document.getElementById('employee-first-name').value.trim();
  const lastName = document.getElementById('employee-last-name').value.trim();
  const role = document.getElementById('employee-role').value;
  const primaryVenue = document.getElementById('employee-primary-venue').value;

  console.log(firstName, lastName, role, primaryVenue);

  const response = await fetch('/api/employees/', {
    method: 'POST',
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
  .querySelector('#add-employee-btn')
  .addEventListener('click', addEmployeeHandler);
