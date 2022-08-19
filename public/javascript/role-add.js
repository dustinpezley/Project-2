async function addRoleHandler(event) {
  event.preventDefault();

  const roleName = document.getElementById('#role-name').value;
  const salaryRate = document.getElementById('#role-salary-rate').text;
  const salary = document.getElementById('#role-salary').value;

  const response = await fetch('api/shows', {
    method: 'POST',
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
  .querySelector('#add-role-btn')
  .addEventListener('click', addRoleHandler);
