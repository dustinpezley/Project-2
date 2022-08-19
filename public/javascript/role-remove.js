async function deleteRoleHandler(event) {
  event.preventDefault();

  const id = document.getElementById('role-remove-id').value;

  const response = await fetch(`/api/role/${id}`, {
    method: 'DELETE',
  });

  if (response.ok) {
    document.location.reload();
  } else {
    alert(response.statusText);
  }
}

document
  .querySelector('#remove-role-btn')
  .addEventListener('click', deleteRoleHandler);
