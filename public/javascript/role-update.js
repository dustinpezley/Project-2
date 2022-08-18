async function updateRoleHandler(event) {
  event.preventDefault();

  const id = document.getElementById('#role-select-update').value;

  const roleName = document.getElementById('#role-name-update').value;
  const salaryRate = document.getElementById('#role-salary-rate-update').text;
  const salary = document.getElementById('#role-salary-update').value;

  const response = await fetch(`api/role/${id}`, {
    method: 'PUT',
    body: JSON.stringify(roleName, salaryRate, salary),
    headers: { 'Content-Type': 'application/json' },
  });

  if (response.ok) {
    document.location.reload();
  } else {
    alert(response.statusText);
  }
}

document
  .querySelector('#update-role-btn')
  .addEventListener('click', updateRoleHandler);
