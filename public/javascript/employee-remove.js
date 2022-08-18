async function deleteEmployeeHandler(event) {
  event.preventDefault();

  const id = event.target.value;

  const response = await fetch(`api/employees/${id}`, {
    method: 'DELETE',
  });

  if (response.ok) {
    document.location.reload();
  } else {
    alert(response.statusText);
  }
}

document
  .querySelector('#remove-employee-btn')
  .addEventListener('click', deleteEmployeeHandler);
