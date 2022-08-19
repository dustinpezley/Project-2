async function deleteShowHandler(event) {
  event.preventDefault();

  const id = document.getElementById('show-remove-id').value;

  const response = await fetch(`/api/shows/${id}`, {
    method: 'DELETE',
  });

  if (response.ok) {
    document.location.reload();
  } else {
    alert(response.statusText);
  }
}

document
  .querySelector('#remove-show-btn')
  .addEventListener('click', deleteShowHandler);
