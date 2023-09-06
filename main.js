function darkTheme() {
  document.body.classList.add("dark")
}

function lightTheme() {
  document.body.classList.remove("dark")
}

ScrollReveal({
  origin: 'bottom',
  distance: '50px',
  duration: 700
}).reveal(
  `main header,
  #first-text,
  #first-text .col-b p,
  #first-text .col-b .contact-button`
)
