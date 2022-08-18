async function addShowHandler(event) {
  event.preventDefault();

  const talentId = document.getElementById('#add-show-talent').value;
  const venueId = document.getElementById('#add-show-venue').value;
  const performanceDate = document.getElementById('#add-show-date').value;
  const performanceTime = document.getElementById('#add-show-time').value;

  const response = await fetch('api/shows', {
    method: 'POST',
    body: JSON.stringify(talentId, performanceDate, performanceTime, venueId),
    headers: { 'Content-Type': 'application/json' },
  });

  if (response.ok) {
    document.location.reload();
  } else {
    alert(response.statusText);
  }
}

document
  .querySelector('#add-show-btn')
  .addEventListener('click', addShowHandler);
