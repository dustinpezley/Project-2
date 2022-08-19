async function updateRoleHandler(event) {
  event.preventDefault();

  const id = document.getElementById('role-select-update').value;

  const roleName = document.getElementById('role-name-update').value;
  const salaryRate = document.getElementById('role-salary-rate-update').value;
  const salary = document.getElementById('role-salary-update').value;

  console.log(id, roleName, salaryRate, salary);
  const response = await fetch(`/api/role/${id}`, {
    method: 'PUT',
    body: JSON.stringify({
      name: roleName,
      salary_rate: salaryRate,
      // eslint-disable-next-line object-shorthand
      salary: salary,
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
  .querySelector('#update-role-btn')
  .addEventListener('click', updateRoleHandler);
