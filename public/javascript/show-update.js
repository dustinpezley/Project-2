async function updateShowHandler(event) {
  event.preventDefault();

  const id = document.getElementById('#select-show-update').value;

  const talentId = document.getElementById('#update-show-talent').value;
  const venueId = document.getElementById('#update-show-venue').value;
  const performanceDate = document.getElementById('#update-show-date').value;
  const performanceTime = document.getElementById('#update-show-time').value;

  const response = await fetch(`api/shows/${id}`, {
    method: 'PUT',
    body: JSON.stringify(talentId, venueId, performanceDate, performanceTime),
    headers: { 'Content-Type': 'application/json' },
  });

  if (response.ok) {
    document.location.reload();
  } else {
    alert(response.statusText);
  }
}

document
  .querySelector('#update-show-btn')
  .addEventListener('click', updateShowHandler);
