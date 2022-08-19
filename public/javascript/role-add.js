async function addRoleHandler(event) {
  event.preventDefault();

  const roleName = document.getElementById('role-name').value;
  const salaryRate = document.getElementById('role-salary-rate').value;
  const salary = document.getElementById('role-salary').value;

  console.log(roleName, salaryRate, salary);
  const response = await fetch('/api/role', {
    method: 'POST',
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
  .querySelector('#add-role-btn')
  .addEventListener('click', addRoleHandler);
