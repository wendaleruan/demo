document.querySelector('.header_open_button').addEventListener('click', () => {
  document.querySelector('.header_links').classList.add("header_responsive_links");
  document.querySelector('.header_responsive_links').classList.remove("header_links");
});

document.querySelector('.header_close_button').addEventListener('click', () => {
  document.querySelector('.header_responsive_links').classList.add("header_links");
  document.querySelector('.header_links').classList.remove("header_responsive_links");

});
