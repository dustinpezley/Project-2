async function deleteTalentHandler(event) {
  event.preventDefault();

  const id = document.getElementById('talent-remove-id').value;

  const response = await fetch(`/api/talent/${id}`, {
    method: 'DELETE',
  });

  if (response.ok) {
    document.location.reload();
  } else {
    alert(response.statusText);
  }
}

document
  .querySelector('#remove-talent-btn')
  .addEventListener('click', deleteTalentHandler);
