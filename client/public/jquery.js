$(document).ready(function () {
  $('.navbar .nav-menu > div' || 'a').click(function () {
    $('.navbar .toggler').prop('checked', false);
  });

  storedTheme = JSON.parse(localStorage.getItem('Alps-Theme'));

  if (storedTheme.mode === 'dark') {
    $('.rocker input').prop('checked', false);
  } else {
    $('.rocker input').prop('checked', true);
  }
});
