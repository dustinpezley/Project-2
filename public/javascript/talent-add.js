async function addTalentHandler(event) {
  event.preventDefault();

  const title = document.getElementById('talent-name').value;

  console.log(title);
  const response = await fetch('/api/talent/', {
    method: 'POST',
    // eslint-disable-next-line object-shorthand
    body: JSON.stringify({ title: title }),
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
