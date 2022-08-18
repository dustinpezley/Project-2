document.addEventListener('DOMContentLoaded', () => {
  if (window.location.href.indexOf('#view-employees-modal') !== -1) {
    document.getElementById('view-employees-modal').modal('show');
  }
});
