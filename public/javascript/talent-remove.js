async function deleteTalentHandler(event) {
  event.preventDefault();

  const id = event.target.value;

  const response = await fetch(`api/talent/${id}`, {
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
