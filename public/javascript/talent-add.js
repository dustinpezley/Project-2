async function addTalentHandler(event) {
  event.preventDefault();

  const title = document.getElementById('#talent-name').value;

  const response = await fetch('api/talent/', {
    method: 'POST',
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
  .querySelector('#add-talent-btn')
  .addEventListener('click', addTalentHandler);
