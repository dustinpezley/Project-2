async function updateTalentHandler(event) {
  event.preventDefault();

  const id = document.getElementById('#talent-select-update').value;

  const title = document.getElementById('#talent-name-update').value;

  const response = await fetch(`api/talent/${id}`, {
    method: 'PUT',
    body: JSON.stringify(title),
    headers: { 'Content-Type': 'application/json' },
  });

  if (response.ok) {
    document.location.reload();
  } else {
    alert(response.statusText);
  }
}

document
  .querySelector('#update-talent-btn')
  .addEventListener('click', updateTalentHandler);
